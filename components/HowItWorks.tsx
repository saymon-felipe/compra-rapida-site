import { Search, ShoppingBag, CheckCircle, ChevronRight } from './Icons';
import PhoneMockup from './PhoneMockup';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Mockups Stack */}
          <div className="relative hidden lg:block h-[700px]">
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-50 rounded-full z-0"></div>
            
            <div className="absolute top-10 left-10 z-10 transform scale-90">
                <PhoneMockup src="/assets/img/print-compra-rapida-inicio.jpg" alt="Busca" className="shadow-2xl border-gray-900" />
            </div>
            <div className="absolute top-32 left-48 z-20 transform scale-95 translate-x-4">
                <PhoneMockup src="/assets/img/print-compra-rapida-carrinho.jpg" alt="Carrinho" className="shadow-2xl border-gray-900" />
            </div>
          </div>

          {/* Right Side: Steps */}
          <div>
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Simplicidade</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Do desejo à porta <br/>em 3 passos.</h3>

            <div className="space-y-12">
              {[
                {
                  icon: <Search className="w-6 h-6 text-white" />,
                  title: "1. Encontre o produto",
                  desc: "Digite o que procura. O app busca automaticamente nos mercados mais próximos com estoque disponível."
                },
                {
                  icon: <ShoppingBag className="w-6 h-6 text-white" />,
                  title: "2. Monte sua cesta",
                  desc: "Adicione um ou mais itens de um vendedor."
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-white" />,
                  title: "3. Receba em casa",
                  desc: "Pague com PIX em 1 toque e acompanhe sua entrega. Sem surpresas, sem demora."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex group">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative">
                      {step.icon}
                    </div>
                    {idx !== 2 && <div className="h-full w-0.5 bg-gray-200 mt-4 -mb-4 group-hover:bg-brand-200 transition-colors"></div>}
                  </div>
                  <div className="pb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 max-w-md">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
               <button className="flex items-center text-brand-700 font-bold hover:text-brand-800 transition-colors">
                  Ver tutorial completo <ChevronRight className="w-5 h-5 ml-1" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;