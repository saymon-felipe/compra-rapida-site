import { motion } from 'framer-motion';
import { ShoppingBag, Users, Zap, Heart } from 'lucide-react'; 

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20 bg-gray-50 min-h-screen"
    >
      <section className="relative py-20 bg-brand-600 text-white mb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Revolucionando o Comércio Local
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-brand-100 max-w-2xl mx-auto"
          >
            Conectando vizinhos e pequenos negócios através da tecnologia, velocidade e confiança.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                O <strong>Compra Rápida</strong> nasceu de uma necessidade simples: a vontade de apoiar o mercado do bairro com a conveniência dos grandes apps de delivery.
              </p>
              <p>
                Percebemos que a tecnologia poderia ser uma ponte, não uma barreira. Por isso, criamos uma plataforma onde a agilidade encontra a proximidade.
              </p>
              <p>
                Não somos apenas um app de entregas. Somos parceiros de quem vende e facilitadores de quem compra, garantindo que o dinheiro circule na comunidade e que você receba seus produtos em tempo recorde.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80" 
              alt="Entregador sorrindo" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Pilares</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Velocidade Real", desc: "Seu tempo é precioso. Otimizamos rotas para entregas relâmpago." },
              { icon: Users, title: "Comunidade", desc: "Valorizamos o comércio local e as relações humanas." },
              { icon: Heart, title: "Transparência", desc: "Sem taxas escondidas. O que você vê é o que você paga." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default About;