import { motion } from 'framer-motion';
import { Zap, QrCode, ShieldCheck, CheckCircle2 } from './Icons';

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-800 relative overflow-hidden text-white">
      {/* Elementos abstratos de energia */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
          <span>Disponível para Download</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
          Pronto para abastecer sua casa <br className="hidden sm:inline" />
          <span className="text-brand-200">em minutos e sem complicações?</span>
        </h2>
        
        <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          Baixe gratuitamente o Compra Rápida no seu celular Android. Descubra os mercados mais próximos, compare preços e nunca mais perca tempo em filas.
        </p>

        {/* Bloco Central de Download */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto bg-black/20 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15">
          
          {/* Botão Google Play Principal */}
          <motion.a 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://play.google.com/store/apps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gray-950 hover:bg-black text-white px-8 py-4 rounded-2xl flex items-center justify-center space-x-3.5 shadow-2xl border border-gray-800 transition-all group"
          >
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.428V3.242c0-.555.228-1.057.609-1.428zM15.207 13.414l2.586 2.586-11.379 6.4c-.456.257-.96.228-1.32-.014l10.113-8.972zm0-2.828L5.094 1.614c.36-.242.864-.271 1.32-.014l11.379 6.4-2.586 2.586zm1.414 1.414l3.172-1.786a1.5 1.5 0 0 1 0 2.6l-3.172 1.786v-2.6z"/>
            </svg>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold leading-none">Disponível no</div>
              <div className="text-lg font-bold leading-none mt-1">Google Play</div>
            </div>
          </motion.a>

          {/* Divisor Desktop */}
          <div className="hidden md:block w-px h-16 bg-white/20"></div>

          {/* QR Code Rápido */}
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-16 h-16 bg-white rounded-2xl p-2 flex items-center justify-center text-gray-900 shadow-md">
              <QrCode size={44} className="text-brand-700" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wide">Aponte a câmera</p>
              <p className="text-xs text-emerald-100">Escaneie para baixar direto</p>
            </div>
          </div>

        </div>

        {/* Selos de Garantia */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm text-emerald-100 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-brand-300" />
            <span>App 100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-brand-300" />
            <span>Processamento Seguro Asaas</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-brand-300" />
            <span>Estorno Automático no PIX</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DownloadSection;