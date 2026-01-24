import { motion } from 'framer-motion';

const Terms = () => {
  const sections = [
    { title: "1. Aceitação", content: "Ao acessar o Compra Rápida, você concorda com estes termos." },
    { title: "2. Uso do App", content: "É proibido usar o app para fins ilegais ou não autorizados." },
    { title: "3. Pedidos", content: "Os pedidos estão sujeitos à aceitação do estabelecimento parceiro." },
    { title: "4. Cancelamento", content: "Cancelamentos só são permitidos antes do preparo do pedido." }
  ];

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Termos de Uso</h1>
          <p className="text-gray-500">Última atualização: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="prose prose-brand max-w-none text-gray-600">
            <p className="lead text-lg mb-8">
              Bem-vindo ao Compra Rápida. Estes termos regem o uso do nosso aplicativo e serviços relacionados.
            </p>

            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p>{section.content}</p>
              </motion.div>
            ))}
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-400">
                Dúvidas? Entre em contato pelo e-mail suporte@comprarapida.com.br
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terms;