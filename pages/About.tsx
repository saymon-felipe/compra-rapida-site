import { motion } from 'framer-motion';
import { Users, Zap, ShieldCheck } from '../components/Icons';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-20 bg-gray-50 min-h-screen"
    >
      {/* Header Institucional */}
      <section className="relative py-20 bg-dark-900 text-white overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 font-sans"
          >
            Revolucionando o Comércio Local
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Conectamos vizinhos a pequenos e médios mercados através de tecnologia justa, velocidade real e transparência financeira.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Bloco Missão */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-block bg-brand-50 border border-brand-200 text-brand-700 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
              Nossa Missão
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              A proximidade do bairro com a tecnologia que você merece.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>
                O <strong>Compra Rápida</strong> nasceu da constatação de que os grandes aplicativos de entrega se tornaram caros, burocráticos e distantes da realidade do comércio local. Taxas abusivas penalizam o lojista, e cobranças extras ou créditos retidos prejudicam o consumidor.
              </p>
              <p>
                Decidimos mudar essa dinâmica. Criamos uma solução integrada com o sistema <strong>Gourmetech</strong>, onde o mercado de bairro gerencia seu catálogo com facilidade, separa os pedidos em uma tela profissional e recebe os pagamentos diretamente via PIX com split automático Asaas.
              </p>
              <p>
                Para você, consumidor, o resultado é um aplicativo intuitivo, onde o dinheiro rende mais, a entrega chega em minutos e você sabe exatamente o que está pagando.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-brand-600">100%</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Foco em Comércio Local</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-brand-600">&lt; 35 min</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Média de Entrega</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-2xl font-bold text-brand-600">0%</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">Taxas Ocultas</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[440px]">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80" 
                alt="Comércio local e agilidade" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase font-bold text-brand-300 tracking-wider">Desenvolvido por</p>
                <p className="text-lg font-bold">Kinetic Solutions (KSI)</p>
                <p className="text-xs text-gray-300 mt-0.5">Engenharia de software focada no varejo brasileiro.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pilares */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nossos Pilares Fundamentais</h2>
            <p className="text-gray-600">Princípios que guiam cada linha de código e cada entrega realizada.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Velocidade Real", 
                desc: "Roteamento inteligente por proximidade. Menos tempo no trânsito, mais frescor na sua mesa." 
              },
              { 
                icon: Users, 
                title: "Economia Circular", 
                desc: "O dinheiro gasto fortalece o comerciante do seu bairro, gerando empregos e valor na sua comunidade." 
              },
              { 
                icon: ShieldCheck, 
                title: "Transparência Absoluta", 
                desc: "Sem pegadinhas ou saldo retido. Se o item faltar, o estorno no PIX é automático e imediato." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-3xl shadow-glow-card border border-gray-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;