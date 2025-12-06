import React from 'react';
import { MapPin, DollarSign, Smartphone, Zap, Star } from './Icons';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group">
    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300">
      <div className="text-brand-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      title: "Mercados Locais",
      description: "Valorize o comércio do seu bairro. Encontre desde a mercearia da esquina até as grandes redes perto de você.",
      icon: <MapPin size={28} />
    },
    {
      title: "Melhor Preço",
      description: "Nosso algoritmo compara os preços em tempo real para garantir que você leve mais pagando menos.",
      icon: <DollarSign size={28} />
    },
    {
      title: "Simplicidade",
      description: "Sem menus complicados. Abra o app, digite o que precisa e pronto. Focado em agilidade.",
      icon: <Smartphone size={28} />
    },
    {
      title: "Entrega Rastreada",
      description: "Nosso app rastreia o status atual do seu pedido. Acompanhe em tempo real.",
      icon: <Zap size={28} />
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-2">Por que usar?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tudo que você precisa, <br/>sem complicações.</h3>
          <p className="text-lg text-gray-600">
            Desenvolvemos o Compra Rápida pensando na sua rotina. Uma experiência limpa, direta e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        {/* Visual Callout inspired by Gourmetech Dashboard clean style */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 space-y-6">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                    Novidade
                </div>
                <h4 className="text-3xl font-bold text-gray-900">Pagamento via PIX Integrado</h4>
                <p className="text-gray-600 text-lg">
                    Esqueça o cartão de crédito. Com nossa integração bancária, você paga instantaneamente, o comerciante recebe na hora e seu pedido é liberado segundos depois.
                </p>
                <ul className="space-y-3">
                    {["Sem taxas de cartão", "Aprovação imediata", "Segurança total"].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 font-medium">
                            <Star className="w-5 h-5 text-yellow-500 mr-3 fill-current" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 relative h-64 w-full md:w-auto bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                 {/* Placeholder for a feature graphic */}
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-green-100"></div>
                 <div className="relative z-10 text-center p-6">
                    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-xs mx-auto transform rotate-3 transition-transform hover:rotate-0">
                        <div className="text-gray-500 text-sm mb-1">Total a pagar</div>
                        <div className="text-3xl font-bold text-gray-900 mb-4">R$ 145,90</div>
                        <button className="w-full bg-brand-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                            Pagar com PIX
                        </button>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;