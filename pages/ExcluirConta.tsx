import { Link } from 'react-router-dom';

const email = 'appgourmetech@gmail.com';
const requestUrl = `mailto:${email}?subject=${encodeURIComponent('Compra Rápida — exclusão de conta')}`;

export default function ExcluirConta() {
  return (
    <section className="mx-auto max-w-2xl px-6 pb-20 pt-32 sm:pt-40">
      <p className="mb-3 text-sm font-semibold text-brand-700">Compra Rápida</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-950">Excluir sua conta</h1>
      <p className="mt-5 text-gray-700">No app, abra o menu do perfil e selecione <strong>Excluir minha conta</strong>. Você recebe um protocolo ao confirmar a solicitação.</p>
      <h2 className="mt-9 text-xl font-semibold text-gray-950">Solicitar por e-mail</h2>
      <p className="mt-3 text-gray-700">Envie a solicitação pelo mesmo e-mail Google usado na conta. O atendimento confirma a identidade e orienta sobre o andamento. Envie apenas a solicitação e o e-mail da conta.</p>
      <a className="mt-5 inline-flex rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800" href={requestUrl}>Enviar solicitação de exclusão</a>
      <p className="mt-8 text-gray-700">A exclusão abrange o perfil, os endereços, o carrinho e os dados de pagamento salvos no app. Pedidos e estornos em andamento são concluídos antes do processamento. Mantemos os registros financeiros necessários conforme a política de privacidade.</p>
      <Link to="/privacidade" className="mt-4 inline-block font-medium text-brand-700 underline">Política de privacidade</Link>
    </section>
  );
}
