import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  Store, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Coins, 
  Zap,
  PackageCheck
} from './Icons';

const DualAudienceSection = () => {
  const [activeTab, setActiveTab] = useState<'customer' | 'merchant'>('customer');

  return (
    <section className="py-24 bg-dark-900 text-white relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Feito para você economizar.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-300">
              Feito para o comércio prosperar.
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            O Compra Rápida conecta quem precisa de agilidade a quem tem os melhores produtos locais. Selecione seu perfil para ver as vantagens.
          </p>

          {/* Toggle de Abas com Framer Motion */}
          <div className="inline-flex p-1.5 rounded-2xl bg-dark-800/90 border border-gray-700/80 mt-8 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('customer')}
              className={`relative px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'customer' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {activeTab === 'customer' && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-brand-600 rounded-xl shadow-lg shadow-brand-600/30"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingBag size={18} />
                <span>Sou Consumidor</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('merchant')}
              className={`relative px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'merchant' ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {activeTab === 'merchant' && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-brand-600 rounded-xl shadow-lg shadow-brand-600/30"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Store size={18} />
                <span>Sou Comerciante</span>
              </span>
            </button>
          </div>
        </div>

        {/* Conteúdo da Aba */}
        <div className="mt-8 max-w-5xl mx-auto">
          {activeTab === 'customer' ? (
            <motion.div
              key="customer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-dark-850/80 border border-gray-800 p-8 sm:p-12 rounded-3xl backdrop-blur-md"
            >
              <div className="space-y-6">
                <div className="inline-block bg-brand-500/20 text-brand-300 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Para o Cliente Final
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Suas compras do mês na velocidade do PIX.
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Não perca seu fim de semana empurrando carrinho em filas de supermercado. Receba tudo fresco no conforto da sua casa pagando preços de prateleira.
                </p>

                <ul className="space-y-3.5">
                  {[
                    'Busca de mercados e comparador de preços em tempo real',
                    'Estorno automático no PIX se algum item faltar no estoque',
                    'Previsão de entrega clara e acompanhamento no mapa',
                    'Sem cobrança de taxas de serviço abusivas'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-0.5"
                  >
                    <Zap size={16} className="fill-current" />
                    <span>Baixar App no Google Play</span>
                  </a>
                </div>
              </div>

              {/* Card visual de destaque */}
              <div className="bg-dark-900/90 border border-gray-700/70 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <span className="text-xs text-gray-400">Resumo de Vantagens</span>
                  <span className="text-xs font-bold text-brand-400">Cliente Compra Rápida</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-dark-800/80 p-4 rounded-xl border border-gray-700/50">
                    <Coins className="w-6 h-6 text-brand-400 mb-2" />
                    <p className="text-xs text-gray-400">Economia Média</p>
                    <p className="text-lg font-bold text-white mt-1">Até 22%</p>
                  </div>
                  <div className="bg-dark-800/80 p-4 rounded-xl border border-gray-700/50">
                    <Zap className="w-6 h-6 text-yellow-400 mb-2 fill-current" />
                    <p className="text-xs text-gray-400">Tempo Médio</p>
                    <p className="text-lg font-bold text-white mt-1">35 min</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-brand-950/50 border border-brand-500/30 text-xs text-brand-200 leading-relaxed">
                  "Finalmente um app que não retém meu dinheiro quando o mercado não tem o produto. O estorno caiu na hora no meu Nubank!"
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="merchant"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center bg-dark-850/80 border border-gray-800 p-8 sm:p-12 rounded-3xl backdrop-blur-md"
            >
              <div className="space-y-6">
                <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Para o Mercado Parceiro
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Transforme seu estoque físico em um e-commerce local.
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Conecte seu comércio ao sistema Gourmetech. Receba pedidos em tempo real em uma tela de separação (KDS) moderna e receba os pagamentos direto na sua conta digital Asaas.
                </p>

                <ul className="space-y-3.5">
                  {[
                    'Tela KDS de picking com conferência ágil de itens',
                    'Resolução de faltas em 1 clique sem burocracia de cancelamento',
                    'Conta digital Asaas integrada com split bancário automático',
                    'Sem mensalidade fixa exorbitante: cresça conforme vende*'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm sm:text-base text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-gray-400 mt-2">* Cobrada taxa de implantação.</p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    to="/quero-vender"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Cadastrar Meu Mercado</span>
                    <ArrowRight size={16} />
                  </Link>

                  <a
                    href="https://app.gourmetech.com.br/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-gray-200 font-semibold text-sm border border-gray-700 transition-colors"
                  >
                    <span>Portal do Lojista</span>
                  </a>
                </div>
              </div>

              {/* Card visual de destaque para comerciante */}
              <div className="bg-dark-900/90 border border-gray-700/70 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <span className="text-xs text-gray-400">Tecnologia de Loja</span>
                  <span className="text-xs font-bold text-blue-400">Gourmetech System</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-dark-800/80 p-4 rounded-xl border border-gray-700/50">
                    <TrendingUp className="w-6 h-6 text-blue-400 mb-2" />
                    <p className="text-xs text-gray-400">Aumento de Vendas</p>
                    <p className="text-lg font-bold text-white mt-1">+ 30% a 45%</p>
                  </div>
                  <div className="bg-dark-800/80 p-4 rounded-xl border border-gray-700/50">
                    <PackageCheck className="w-6 h-6 text-brand-400 mb-2" />
                    <p className="text-xs text-gray-400">Agilidade no Picking</p>
                    <p className="text-lg font-bold text-white mt-1">&lt; 7 minutos</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 leading-relaxed">
                  "O sistema de separação na cozinha evitou 100% dos erros de envio e o dinheiro das vendas entra certinho na conta Asaas da empresa todo dia."
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

export default DualAudienceSection;
