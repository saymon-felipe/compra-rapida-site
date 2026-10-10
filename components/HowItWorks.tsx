import { motion } from 'framer-motion';
import { Search, Zap, Truck, CheckCircle2 } from './Icons';
import PhoneMockup from './PhoneMockup';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      badge: "Passo 01",
      title: "Busca no bairro",
      desc: "Abra o app e encontre produtos frescos de supermercados, hortifrútis e mercearias próximas de você, comparando itens com total conveniência."
    },
    {
      icon: Zap,
      badge: "Passo 02",
      title: "Pagamento instantâneo",
      desc: "Checkout seguro e sem atrito via PIX Asaas. Copiou, colou no seu banco e o pedido é aprovado em segundos, liberando o preparo imediatamente."
    },
    {
      icon: Truck,
      badge: "Passo 03",
      title: "Separação e entrega",
      desc: "O comerciante confere os itens e separa seu pedido com cuidado. O entregador do mercado leva até a sua porta com máxima agilidade."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Do pedido à sua porta, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500">
              simples e sem letras miúdas.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal">
            Conheça o passo a passo da tecnologia que garante que suas compras cheguem completas e sem cobranças indevidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Dual Mockup Composition */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Círculo com gradiente suave de fundo */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] bg-brand-50 rounded-full blur-2xl -z-10 pointer-events-none"></div>

            <div className="relative w-full max-w-[460px] h-[580px] sm:h-[640px] flex items-center justify-center">
              {/* Mockup 1: Tela Inicial (Fundo, deslocado à esquerda) */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 sm:left-4 top-4 z-10 scale-[0.88] sm:scale-95 transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              >
                <PhoneMockup 
                  src="/assets/img/print-compra-rapida-inicio.jpg" 
                  alt="Tela Inicial com busca e categorias" 
                />
              </motion.div>

              {/* Mockup 2: Tela do Carrinho (Frente, deslocado à direita) */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-0 sm:right-4 bottom-2 z-20 scale-[0.92] sm:scale-100 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl"
              >
                <PhoneMockup 
                  src="/assets/img/print-compra-rapida-carrinho.jpg" 
                  alt="Tela do Carrinho com resumo de itens" 
                />
              </motion.div>
            </div>
          </div>

          {/* Lado Direito: Steps */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-100 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm mt-1">
                  <step.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-100/80 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-brand-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Micro banner de garantia */}
            <div className="mt-6 p-4 rounded-2xl bg-brand-50/80 border border-brand-200/80 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-brand-900 font-medium">
                Sem assinaturas ou mensalidades para o consumidor. Você paga apenas o que colocar na cesta.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;