import React from 'react';
import PhoneMockup from './PhoneMockup';
import { Zap, CheckCircle } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-600">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
         <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left text-white">
            <div className="inline-flex items-center space-x-2 bg-brand-700/50 backdrop-blur-sm px-3 py-1 rounded-full mb-6 border border-brand-400/30">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
              </span>
              <span className="text-sm font-medium text-green-50">Disponível em sua região</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Faça sua feira <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-white">
                sem sair do sofá.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-green-50 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              O app mais simples para encontrar produtos em mercados de bairro ou grandes redes. Economize tempo e dinheiro com 3 toques.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-700 font-bold rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_25px_rgba(0,0,0,0.15)] transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5 fill-current" />
                <span>Baixar Agora</span>
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-700/50 text-white font-semibold rounded-xl border border-brand-500/50 hover:bg-brand-700 transition-colors">
                Sou Comerciante
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left max-w-sm mx-auto lg:mx-0">
               <div className="flex items-center space-x-2">
                   <CheckCircle className="text-green-300 w-5 h-5" />
                   <span className="text-sm font-medium">PIX Instantâneo</span>
               </div>
               <div className="flex items-center space-x-2">
                   <CheckCircle className="text-green-300 w-5 h-5" />
                   <span className="text-sm font-medium">Entrega Rápida</span>
               </div>
               <div className="flex items-center space-x-2">
                   <CheckCircle className="text-green-300 w-5 h-5" />
                   <span className="text-sm font-medium">Sem Taxas Ocultas</span>
               </div>
               <div className="flex items-center space-x-2">
                   <CheckCircle className="text-green-300 w-5 h-5" />
                   <span className="text-sm font-medium">Suporte 24h</span>
               </div>
            </div>
          </div>

          {/* Phone Image */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-[400px] lg:max-w-full">
            <div className="relative z-10 transform lg:rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
               <PhoneMockup 
                 src="https://picsum.photos/400/800?random=1" 
                 alt="App Compra Rápida Tela Inicial" 
               />
               
               {/* Floating Badges */}
               <div className="absolute top-[15%] -left-[20px] lg:-left-[40px] bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                   <div className="flex items-center space-x-3">
                       <div className="bg-green-100 p-2 rounded-full">
                           <Zap className="text-brand-600 w-6 h-6" />
                       </div>
                       <div>
                           <p className="text-xs text-gray-500 font-semibold">Tempo de entrega</p>
                           <p className="text-lg font-bold text-gray-800">15 min</p>
                       </div>
                   </div>
               </div>

               <div className="absolute bottom-[20%] -right-[20px] lg:-right-[30px] bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                   <div className="flex items-center space-x-3">
                       <div className="bg-yellow-100 p-2 rounded-full">
                           <CheckCircle className="text-yellow-600 w-6 h-6" />
                       </div>
                       <div>
                           <p className="text-xs text-gray-500 font-semibold">Pagamento</p>
                           <p className="text-lg font-bold text-gray-800">Aprovado</p>
                       </div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px] lg:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;