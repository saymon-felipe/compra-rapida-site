import { motion } from 'framer-motion';
import { FileText, Database, TrendingUp, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

const Partner = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Solicite o Cadastro",
      desc: "Entre em contato com o sistema Gourmetech para iniciar sua parceria.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Database,
      title: "2. Cadastre os Produtos",
      desc: "Insira seu cardápio ou catálogo no sistema. A sincronização com o app Compra Rápida é automática e instantânea.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "3. Venda Muito",
      desc: "Seus produtos ficam visíveis para os usuários na sua região. Receba pedidos em tempo real.",
      color: "bg-brand-100 text-brand-600"
    },
    {
      icon: DollarSign,
      title: "4. Receba com Segurança",
      desc: "O dinheiro das vendas cai direto na sua conta digital Asaas criada para a empresa. Transfira para seu banco quando quiser.",
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20 bg-gray-50 min-h-screen"
    >
      <section className="bg-brand-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Venda mais com o Compra Rápida
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-100 max-w-2xl mx-auto"
          >
            A maneira mais simples de conectar seus produtos aos clientes do seu bairro. Sem taxas abusivas, sem complicação.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Como funciona?</h2>
          <p className="text-gray-500 mt-2">Do cadastro ao dinheiro no bolso em 4 passos simples.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative"
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-2xl mb-6 mx-auto md:mx-0 shadow-sm relative z-10`}>
                <step.icon size={32} />
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pronto para começar?</h3>
              <p className="text-gray-600 mb-8">
                Junte-se a outros estabelecimentos que já estão faturando mais com o Compra Rápida.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Pagamento rápido via Asaas', 'Visibilidade local garantida', 'Plataforma fácil de usar'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="text-brand-500 mr-2" size={20} />
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href="https://www.gourmetech.com.br/contact?source=compra-rapida" 
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 group"
              >
                Solicitar cadastro
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="bg-gray-100 h-64 md:h-auto overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Parceria de negócios" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Partner;