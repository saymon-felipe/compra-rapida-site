import { motion } from 'framer-motion';
import { 
  FileText, 
  Store, 
  Coins, 
  ArrowRight, 
  CheckCircle2, 
  PackageCheck, 
  ShieldCheck, 
  ExternalLink 
} from '../components/Icons';

const Partner = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Credenciamento Rápido",
      desc: "Cadastre seu CNPJ e ative sua conta digital Asaas em poucos minutos para split de vendas automático.",
      color: "bg-emerald-50 text-brand-600"
    },
    {
      icon: Store,
      title: "2. Catálogo no Gourmetech",
      desc: "Insira seus produtos e estoque no sistema Gourmetech. A vitrine no Compra Rápida sincroniza em tempo real.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: PackageCheck,
      title: "3. Separação Assistida (KDS)",
      desc: "Receba os pedidos na tela de separação da loja. Confira os itens por checklist digital, resolva faltas na gôndola e despache com agilidade.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Coins,
      title: "4. Receba Direto no PIX",
      desc: "O dinheiro de cada venda cai na sua conta digital Asaas sem atrasos e sem taxas predatórias de marketplaces gigantes.",
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-20 pb-20 bg-gray-50 min-h-screen"
    >
      {/* Hero do Lojista */}
      <section className="bg-dark-900 text-white py-20 relative overflow-hidden bg-grid-pattern">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 font-sans"
          >
            Venda mais no seu bairro <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-300 font-brand italic">
              com tecnologia Gourmetech.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            A maneira mais inteligente de transformar sua loja física em um e-commerce hiperlocal. Sem mensalidades abusivas e com controle operacional completo.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://www.gourmetech.com.br/contact?source=compra-rapida" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-2xl shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center gap-2"
            >
              <span>Solicitar Credenciamento</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="https://app.gourmetech.com.br/login" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 bg-dark-800 hover:bg-dark-700 text-gray-200 hover:text-white font-semibold rounded-2xl border border-gray-700 transition-all flex items-center justify-center gap-2"
            >
              <span>Já sou parceiro (Entrar)</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Passos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Como funciona a parceria?</h2>
          <p className="text-gray-600 mt-2 text-base">Do cadastro ao faturamento recorrente em 4 etapas estruturadas.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-7 rounded-3xl shadow-glow-card border border-gray-100 relative group hover:border-brand-200 transition-colors"
            >
              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm relative z-10 group-hover:scale-105 transition-transform`}>
                <step.icon size={28} />
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Card de Conversão */}
        <motion.div 
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-md w-fit mb-3">
                Parceria Estratégica
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Pronto para multiplicar suas vendas locais?
              </h3>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                Una a força do seu ponto comercial à conveniência que os consumidores modernos exigem.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Split bancário instantâneo com a conta digital Asaas',
                  'Tela de separação (KDS) que elimina erros de montagem',
                  'Visibilidade prioritária para clientes no raio de entrega',
                  'Suporte técnico e operacional humanizado'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm sm:text-base font-medium">
                    <CheckCircle2 className="text-brand-600 mr-3 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div>
                <a 
                  href="https://www.gourmetech.com.br/contact?source=compra-rapida" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 text-white font-bold rounded-2xl hover:bg-brand-500 transition-all shadow-lg shadow-brand-600/30 group"
                >
                  <span>Cadastrar meu estabelecimento</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-dark-900 min-h-[300px] md:min-h-full overflow-hidden relative flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/60 to-dark-900 pointer-events-none z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                alt="Parceria de negócios e comércio local" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />
              <div className="relative z-20 text-center text-white max-w-xs p-6 bg-dark-850/80 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-400 mx-auto flex items-center justify-center mb-3">
                  <ShieldCheck size={28} />
                </div>
                <p className="font-bold text-lg text-white">Gourmetech System</p>
                <p className="text-xs text-gray-300 mt-1">
                  Mais de 500 estabelecimentos impulsionando suas operações no varejo alimentício.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Partner;