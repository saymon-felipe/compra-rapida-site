import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-600 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pronto para economizar tempo?
            </h2>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
                Baixe agora o Compra Rápida e descubra a forma mais inteligente de abastecer sua casa. Disponível para Android e iOS.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors shadow-lg w-full sm:w-auto justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414C17.523 11.9118 20.375 10.3706 20.5134 10.2874C19.1234 8.28302 16.969 7.96222 16.2082 7.93062C14.3726 7.74342 12.6074 8.98142 11.667 8.98142C10.7266 8.98142 9.27738 7.92342 7.74778 7.95422C5.74338 7.98582 3.89938 9.11902 2.87258 10.903C0.803778 14.4934 2.34858 19.8242 4.36498 22.7386C5.35218 24.1642 6.51698 25.7594 8.07098 25.6982C9.55338 25.6378 10.1258 24.7578 11.9098 24.7578C13.6934 24.7578 14.1958 25.6982 15.7538 25.6682C17.3882 25.6378 18.4286 24.195 19.4158 22.7686C20.537 21.1446 20.9998 19.5706 21.0198 19.489C20.9858 19.4766 17.523 18.1578 17.523 15.3414ZM14.6294 5.38542C15.4266 4.42102 15.9614 3.07902 15.815 1.73702C14.6394 1.78422 13.2146 2.52182 12.3734 3.50182C11.6258 4.36262 10.9678 5.72302 11.135 7.04262C12.4486 7.14502 13.8294 6.35022 14.6294 5.38542Z" transform="translate(0 -2)"/></svg>
                    <div className="text-left">
                        <div className="text-xs">Baixar na</div>
                        <div className="text-lg font-bold leading-none">App Store</div>
                    </div>
                </button>
                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors shadow-lg w-full sm:w-auto justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12l-10.183 10.185A2.379 2.379 0 0 1 3 20.819V3.18C3 2.65 3.22 2.152 3.609 1.814zM16.296 14.505l-1.503-1.503 1.502-1.503 4.226 2.403c.803.457.803 1.202 0 1.66l-4.225 2.403v-3.46zM14.793 9.497L4.609 19.682c.28.188.618.297.973.315L14.793 9.497zM14.793 14.503L5.581 5.292c-.354.018-.692.126-.973.315l10.185 8.896z"/></svg>
                    <div className="text-left">
                        <div className="text-xs">Disponível no</div>
                        <div className="text-lg font-bold leading-none">Google Play</div>
                    </div>
                </button>
            </div>
        </div>
    </section>
  );
};

export default DownloadSection;