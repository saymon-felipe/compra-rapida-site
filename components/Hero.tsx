import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import { Zap, CheckCircle2, ArrowRight, RefreshCw, Truck, Sparkles } from './Icons';

const Hero = () => {
  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-dark-900 text-white bg-grid-pattern">
      {/* Luzes e Efeitos de Fundo Conceituais */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[450px] bg-brand-500/20 rounded-full blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-[20%] right-[-5%] w-[500px] h-[400px] bg-emerald-600/15 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[350px] bg-brand-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto & Copywriting */}
          <div className="lg:col-span-7 text-center lg:text-left pt-4">
            {/* Headline com Tipografia Kanit/Inter e velocidade */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] font-sans"
            >
              O mercado do seu bairro <br className="hidden sm:inline" />
              <span className="font-brand italic tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-emerald-300 to-white">
                sem filas e em minutos.
              </span>
            </motion.h1>
            
            {/* Subtítulo embasado nas funcionalidades reais */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Abasteça sua casa com produtos frescos de mercearias e supermercados próximos. Economize tempo, pague com praticidade no <strong className="text-white">PIX</strong> e receba suas compras com agilidade e comodidade.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button 
                onClick={scrollToDownload}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-bold rounded-2xl shadow-[0_12px_28px_rgba(34,197,94,0.35)] hover:shadow-[0_16px_35px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 active:translate-y-0 transition-all duration-200 flex items-center justify-center space-x-2.5 group"
              >
                <Zap className="w-5 h-5 fill-current text-white group-hover:scale-110 transition-transform" />
                <span className="text-base tracking-wide">Baixar Aplicativo Grátis</span>
              </button>

              <a 
                href="/quero-vender"
                className="w-full sm:w-auto px-7 py-4 bg-dark-800/90 text-gray-200 hover:text-white font-semibold rounded-2xl border border-gray-700/70 hover:border-brand-500/50 hover:bg-dark-800 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Cadastrar Meu Mercado</span>
                <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Selos de Confiança e Tecnologias Reais */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-left max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="text-brand-400 w-4 h-4 flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">PIX Instantâneo</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="text-brand-400 w-4 h-4 flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Estorno Automático</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="text-brand-400 w-4 h-4 flex-shrink-0" />
                <span className="text-xs text-gray-300 font-medium">Entrega Rastreada</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna Visual — Mockups com Badges Dinâmicos */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Moldura Central */}
              <div className="relative z-10">
                <PhoneMockup 
                  src="/assets/img/print-compra-rapida-inicio.jpg" 
                  alt="App Compra Rápida Tela Inicial" 
                  className="transform hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Badge 1: PIX Confirmado com Validação Bancária */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-[18%] -left-[16px] sm:-left-[36px] z-30 bg-dark-850/95 border border-brand-500/40 p-3 sm:p-3.5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] backdrop-blur-md max-w-[210px]"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="bg-brand-500/20 p-2 rounded-xl text-brand-400 flex-shrink-0">
                    <Zap className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] uppercase font-bold text-brand-400 tracking-wider">PIX Direto</span>
                      <Sparkles className="w-3 h-3 text-brand-300" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight">Aprovado em 1.4s</p>
                    <p className="text-[10px] text-gray-400">Sem taxas extras</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge 2: Estorno Automático no PIX */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-[22%] -right-[16px] sm:-right-[36px] z-30 bg-dark-850/95 border border-emerald-400/40 p-3 sm:p-3.5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.5)] backdrop-blur-md max-w-[220px]"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="bg-emerald-500/20 p-2 rounded-xl text-emerald-400 flex-shrink-0">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Garantia Real</span>
                    <p className="text-xs sm:text-sm font-bold text-white leading-tight">Estorno no PIX</p>
                    <p className="text-[10px] text-gray-400">Devolução se faltar item</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Divisor Angular Dinâmico (Speed Angle) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg 
          className="relative block w-full h-[40px] sm:h-[60px] text-gray-50" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 120V120H1200V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;