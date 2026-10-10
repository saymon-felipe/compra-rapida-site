import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Pagina tecnica (sem layout do site) aberta pelo botao do e-mail de redefinicao de senha do app do
// entregador. Clientes de e-mail removem links com esquema de app, entao o e-mail aponta para ca:
// a pagina valida o token no backend e abre o app (Compra Rapida Entrega), que continua o fluxo.
// Em condicoes normais nao mostra nada; so aparece algo se o link for invalido ou o app nao abrir.

// appId do app (compra-rapida-entrega/capacitor.config.json), tambem registrado como esquema no AndroidManifest
const APP_SCHEME = 'com.kineticsolutions.comprarapidaentrega';
// 24 bytes em hexa, como o core gera (generateResetToken)
const TOKEN_FORMAT = /^[0-9a-f]{48}$/i;

// O e-mail informa em qual backend validar (producao x homologacao); so estes hosts sao aceitos,
// para o token nunca ser enviado a um endereco arbitrario vindo da URL.
const PROD_API = 'https://gourmetech-core-46715094ffeb.herokuapp.com';
const HOMOLOG_API = 'https://gourmetech-coreteste-5d758e07e0da.herokuapp.com';
const LOCAL_HOST = /^(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3})$/;
const LOCAL_API = /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}):\d+$/;

// Backends onde validar o token. Sem uma dica valida no link, tenta producao e depois homologacao
// (o token e aleatorio de 192 bits, entao nao ha risco de coincidir entre os dois).
const resolveApis = (hint: string | null): string[] => {
  if (hint) {
    try {
      const origin = new URL(hint).origin;
      if (origin === PROD_API || origin === HOMOLOG_API) return [origin];
      // Core local so vale se o proprio site tambem estiver rodando local (desenvolvimento)
      if (LOCAL_HOST.test(window.location.hostname) && LOCAL_API.test(origin)) return [origin];
    } catch {
      // parametro invalido: ignora a dica
    }
  }
  return [PROD_API, HOMOLOG_API];
};

type Status = 'checking' | 'opening' | 'invalid' | 'error';

const EntregadorRedefinirSenha = () => {
  const [params] = useSearchParams();
  const token = params.get('token') ?? '';
  const apiHint = params.get('api');
  const tokenOk = TOKEN_FORMAT.test(token);
  const deepLink = `${APP_SCHEME}://reset-password?token=${token}`;

  const [status, setStatus] = useState<Status>(tokenOk ? 'checking' : 'invalid');
  const [showFallback, setShowFallback] = useState(false);

  // Pagina tecnica: fora dos buscadores
  useEffect(() => {
    const meta = document.querySelector('meta[name="robots"]');
    const previous = meta?.getAttribute('content') ?? null;
    meta?.setAttribute('content', 'noindex, nofollow');
    return () => {
      if (meta && previous !== null) meta.setAttribute('content', previous);
    };
  }, []);

  useEffect(() => {
    if (!tokenOk) return;

    let cancelled = false;

    const validate = async () => {
      let unreachable = false;

      for (const api of resolveApis(apiHint)) {
        try {
          const response = await fetch(`${api}/delivery/auth/validate-reset-token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
          });
          if (cancelled) return;

          if (response.ok) {
            setStatus('opening');
            window.location.replace(deepLink);
            return;
          }

          // 400: token nao vale neste backend; 404: backend ainda sem o endpoint. Tenta o proximo.
          if (response.status !== 400 && response.status !== 404) unreachable = true;
        } catch {
          if (cancelled) return;
          unreachable = true;
        }
      }

      if (!cancelled) setStatus(unreachable ? 'error' : 'invalid');
    };

    validate();

    return () => {
      cancelled = true;
    };
  }, [tokenOk, token, apiHint, deepLink]);

  // Se a pagina continua aberta, o navegador bloqueou a abertura automatica (ou o app nao esta
  // instalado): mostra o botao, cujo toque conta como gesto do usuario.
  useEffect(() => {
    if (status !== 'opening') return;
    const timer = setTimeout(() => setShowFallback(true), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  if (status === 'checking' || (status === 'opening' && !showFallback)) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center bg-gray-50 text-gray-800">
      <div className="max-w-sm space-y-4">
        {status === 'opening' && (
          <>
            <p>Se o app do entregador não abriu, toque no botão abaixo.</p>
            <a
              href={deepLink}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white"
            >
              Abrir o app do entregador
            </a>
            <p className="text-sm text-gray-500">O app precisa estar instalado neste celular.</p>
          </>
        )}

        {status === 'invalid' && (
          <p>Este link é inválido ou já expirou. Peça um novo em &quot;Esqueci minha senha&quot;, no app do entregador.</p>
        )}

        {status === 'error' && (
          <>
            <p>Não foi possível validar o link agora. Verifique sua conexão e tente novamente.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="inline-block rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white"
            >
              Tentar novamente
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default EntregadorRedefinirSenha;
