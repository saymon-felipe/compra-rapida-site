import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from './Icons';

interface FaqItem {
  question: string;
  answer: string;
  category: 'consumidor' | 'mercado';
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<'todos' | 'consumidor' | 'mercado'>('todos');

  const faqs: FaqItem[] = [
    {
      category: 'consumidor',
      question: 'Como funciona o estorno automático no PIX se um item faltar?',
      answer: 'Durante a separação do seu pedido no mercado parceiro, se algum item estiver indisponível e você tiver optado por cancelamento (ou se o substituto tiver valor menor), a diferença é liquidada automaticamente de volta na mesma chave PIX que você utilizou para pagar, sem burocracia e sem cupons presos.'
    },
    {
      category: 'consumidor',
      question: 'O Compra Rápida cobra taxa de mensalidade ou anuidade?',
      answer: 'Não. O aplicativo é 100% gratuito para download e uso pelo consumidor final. Você paga estritamente pelos produtos selecionados na cesta e pela taxa de entrega definida pelo raio de distância do estabelecimento.'
    },
    {
      category: 'consumidor',
      question: 'Posso pedir em mais de um mercado no mesmo pedido?',
      answer: 'Cada pedido é encaminhado diretamente ao estabelecimento escolhido para garantir separação imediata e entrega rápida. Você pode fazer compras em diferentes mercados gerando pedidos separados.'
    },
    {
      category: 'mercado',
      question: 'Como o mercado recebe o dinheiro das vendas?',
      answer: 'Cada mercado parceiro possui uma conta digital integrada via Asaas. A cada pedido aprovado via PIX, o split financeiro é executado com total transparência e o valor fica disponível para transferência à sua conta bancária comercial.'
    },
    {
      category: 'mercado',
      question: 'O que é a tela de separação (KDS Gourmetech)?',
      answer: 'É um terminal operacional onde sua equipe visualiza os pedidos do app em tempo real, confere os produtos por checklist digital e resolve substituições ou faltas com apenas um toque, notificando o cliente instantaneamente.'
    },
    {
      category: 'mercado',
      question: 'Quem realiza a entrega das compras?',
      answer: 'As entregas são realizadas pelos próprios entregadores do mercado. Não utilizamos entregadores externos avulsos. Disponibilizamos o aplicativo Compra Rápida Entrega exclusivamente para a equipe de entrega do seu estabelecimento, organizando rotas, facilitando o despacho e aumentando a agilidade — principalmente para lojas que contam com mais de um entregador.'
    }
  ];

  const filteredFaqs = filter === 'todos' ? faqs : faqs.filter(f => f.category === filter);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Transparência total sobre o funcionamento do aplicativo, pagamentos e parcerias.
          </p>

          {/* Filtros */}
          <div className="flex justify-center gap-2 mt-6">
            {(['todos', 'consumidor', 'mercado'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'todos' ? 'Todas' : cat === 'consumidor' ? 'Para Consumidores' : 'Para Mercados'}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Acordeões */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-gray-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-gray-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-brand-600"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-gray-50/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
