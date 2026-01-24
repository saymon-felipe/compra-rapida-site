import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-20 bg-white min-h-screen"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-brand-100 text-brand-700 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">Segurança</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Política de Privacidade</h1>
          <p className="text-gray-500">Seus dados são protegidos conosco.</p>
        </div>

        <div className="space-y-8">
          {[
            { title: "Coleta de Informações", text: "Coletamos apenas o essencial: nome, endereço e dados de contato para realizar a entrega." },
            { title: "Uso de Dados", text: "Seus dados são usados exclusivamente para processar pedidos e melhorar sua experiência no app." },
            { title: "Compartilhamento", text: "Não vendemos seus dados. Compartilhamos apenas com o entregador e o restaurante parceiro para viabilizar o serviço." },
            { title: "Segurança", text: "Utilizamos criptografia SSL em todas as transações e armazenamos dados em servidores seguros." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-gray-200"
            >
              <h3 className="text-xl font-bold text-brand-600 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;