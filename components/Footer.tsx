import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { ShieldCheck, Zap, ArrowUpRight } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-dark-950 text-white pt-16 pb-12 border-t border-gray-800 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid Principal do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-850">
          
          {/* Coluna da Marca (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo className="h-9" variant="inverted" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Conectando sua casa ao comércio do bairro com a velocidade do PIX. Sem surpresas na sacola: substituição inteligente e estorno automático na hora.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-1 rounded-lg border border-brand-500/20">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping"></span>
                Operação Normal
              </span>
              <span>•</span>
              <span>Asaas Banking Integrado</span>
            </div>
          </div>
          
          {/* Coluna Consumidor (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-400">Consumidor</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="/#diferenciais" className="hover:text-white transition-colors">Diferenciais & Estorno</a></li>
              <li><a href="/#download" className="hover:text-white transition-colors">Baixar Aplicativo</a></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre a Plataforma</Link></li>
            </ul>
          </div>

          {/* Coluna Parceiros & Mercados (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-400">Para Estabelecimentos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/quero-vender" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Quero Vender no App</span>
                  <span className="text-[10px] uppercase font-bold bg-brand-500/20 text-brand-300 px-1 rounded">Novo</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://app.gourmetech.com.br/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Portal do Lojista (Gourmetech)</span>
                  <ArrowUpRight size={12} className="text-gray-500" />
                </a>
              </li>
              <li><a href="https://www.gourmetech.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Conhecer Gourmetech PDV</a></li>
            </ul>
          </div>

          {/* Coluna Legal & Governança (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-brand-400">Legal & Governança</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/termos" className="hover:text-white transition-colors">Termos de Uso (Consumidor)</Link></li>
              <li><Link to="/termos" className="hover:text-white transition-colors">Termos de Adesão (Mercados)</Link></li>
              <li><Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade (LGPD)</Link></li>
              <li><a href="mailto:appgourmetech@gmail.com" className="hover:text-white transition-colors">Canal do Encarregado (DPO)</a></li>
            </ul>
          </div>

        </div>
        
        {/* Barra Inferior com Créditos e Selos */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Compra Rápida. Todos os direitos reservados.</p>
            <span className="hidden sm:inline">•</span>
            <p>
              Tecnologia desenvolvida por{' '}
              <a 
                href="https://kineticsolutions.com.br?utm_source=compra-rapida" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-400 font-semibold underline decoration-gray-700 transition-colors"
              >
                Kinetic Solutions (KSI)
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-brand-400" />
              <span>Conexão Segura SSL 256-bit</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Zap size={14} className="text-brand-400 fill-current" />
              <span>PIX Instantâneo Asaas</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;