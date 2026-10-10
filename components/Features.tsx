import { motion } from 'framer-motion';
import { 
  RefreshCw, 
  MapPin, 
  Zap, 
  PackageCheck, 
  CheckCircle2, 
  Coins
} from './Icons';

const Features = () => {
  return (
    <section id="diferenciais" className="py-24 bg-gray-50/70 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-5">
            Muito mais que um delivery.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
              Uma experiência sem frustrações.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Analisamos tudo o que incomoda em apps tradicionais — itens em falta, estornos que demoram semanas e taxas abusivas — para criar uma plataforma transparente do pedido à entrega.
          </p>
        </div>

        {/* Bento Grid Conceitual */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1 (Destaque Principal): Substituição Inteligente & Estorno PIX (Span 7) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-glow-card border border-gray-100 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <RefreshCw className="w-6 h-6" />
              </div>

              <div className="inline-block bg-brand-100/70 text-brand-800 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md mb-2">
                Exclusivo Compra Rápida
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                Substituição com Estorno Automático no PIX
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Faltou algum produto na gôndola durante a separação? Sem estresse. Se o item substituto custar menos, ou se você preferir cancelar o produto em falta, <strong className="text-gray-900">a diferença cai de volta na sua conta bancária na mesma hora</strong>, sem vouchers presos.
              </p>
            </div>

            {/* Simulação Visual do Recibo / Ledger */}
            <div className="relative z-10 bg-gray-50/90 rounded-2xl p-4 sm:p-5 border border-gray-100 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-500 pb-2 border-b border-gray-200/60">
                <span className="font-semibold text-gray-700">Separação em tempo real</span>
                <span className="flex items-center text-brand-600 font-bold gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Conferido
                </span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm bg-white p-2.5 rounded-xl border border-gray-100">
                <div>
                  <p className="font-semibold text-gray-800">Leite Integral (Marca A) → Substituído</p>
                  <p className="text-[11px] text-gray-400">Substituto de valor menor aceito pelo cliente</p>
                </div>
                <div className="text-right">
                  <span className="text-xs line-through text-gray-400">R$ 5,49</span>
                  <p className="text-xs font-bold text-gray-800">R$ 4,89</p>
                </div>
              </div>

              <div className="flex items-center justify-between bg-brand-500/10 border border-brand-500/20 px-3 py-2 rounded-xl text-xs font-semibold text-brand-800">
                <span className="flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-brand-600" />
                  Estorno PIX liquidado:
                </span>
                <span className="font-bold text-brand-700">+ R$ 0,60 estornado</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Busca Hiperlocal & Preços de Gôndola (Span 5) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 shadow-glow-card border border-gray-100 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Mercados do Seu Bairro
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Valorize os comércios da sua região. Encontre a padaria da esquina, o açougue local e os grandes supermercados com raios de entrega inteligentes e estoques integrados.
              </p>
            </div>

            {/* Widget de Distância & Mercados */}
            <div className="space-y-2.5">
              <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-600 text-white font-bold text-xs flex items-center justify-center">
                    SD
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Supermercado Dia & Noite</p>
                    <p className="text-[11px] text-gray-500">1.1 km • 25 a 35 min</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-brand-600 bg-brand-100 px-2 py-1 rounded-md">
                  Aberto
                </span>
              </div>

              <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-800 text-white font-bold text-xs flex items-center justify-center">
                    EM
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Empório das Frutas</p>
                    <p className="text-[11px] text-gray-500">800 m • 15 a 25 min</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-brand-600 bg-brand-100 px-2 py-1 rounded-md">
                  Aberto
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Separação Assistida Gourmetech KDS (Span 5) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 shadow-glow-card border border-gray-100 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <PackageCheck className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Separação Especializada
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Seu pedido é separado no terminal do comerciante com conferência ágil item a item. Produtos refrigerados permanecem em temperatura ideal até o momento exato do despacho.
              </p>
            </div>

            <div className="bg-dark-900 text-white p-4 rounded-2xl border border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-ping"></span>
                <span className="text-xs font-mono font-medium text-gray-300">Sistema Gourmetech KDS</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-brand-400 bg-brand-500/20 px-2 py-0.5 rounded">
                Sincronizado
              </span>
            </div>
          </motion.div>

          {/* Card 4: PIX Direto em 1 Toque sem Intermediários Abusivos (Span 7) */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 shadow-glow-card border border-gray-100 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-emerald-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                Pagamento Instantâneo via PIX
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Copia e cola com confirmação bancária em segundos. Sem risco de dados de cartão expostos, sem assinaturas mensais camufladas e com liberação imediata do seu pedido.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 font-medium">Aprovação</p>
                <p className="text-base font-bold text-gray-900 mt-0.5">&lt; 2 segundos</p>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 font-medium">Taxas Extras</p>
                <p className="text-base font-bold text-brand-600 mt-0.5">R$ 0,00</p>
              </div>
              <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 font-medium">Segurança</p>
                <p className="text-base font-bold text-gray-900 mt-0.5">Asaas Banking</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Features;