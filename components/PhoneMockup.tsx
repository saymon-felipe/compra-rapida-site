interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

const PhoneMockup = ({ src, alt, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[10px] sm:border-[12px] rounded-[2.8rem] h-[560px] sm:h-[620px] w-[280px] sm:w-[310px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/20 ${className}`}>
      {/* Botões laterais */}
      <div className="h-[32px] w-[3px] bg-gray-700 absolute -left-[14px] top-[90px] rounded-l-md"></div>
      <div className="h-[46px] w-[3px] bg-gray-700 absolute -left-[14px] top-[140px] rounded-l-md"></div>
      <div className="h-[46px] w-[3px] bg-gray-700 absolute -left-[14px] top-[196px] rounded-l-md"></div>
      <div className="h-[64px] w-[3px] bg-gray-700 absolute -right-[14px] top-[150px] rounded-r-md"></div>

      {/* Tela */}
      <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-dark-900 relative">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover object-top select-none" 
          loading="eager"
        />
        
        {/* Dynamic Island / Notch */}
        <div className="w-[96px] h-[20px] bg-black top-2.5 rounded-full left-1/2 -translate-x-1/2 absolute z-20 flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 bg-[#0a1a0f] rounded-full border border-gray-800"></div>
        </div>

        {/* Reflexo sutil de vidro */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;