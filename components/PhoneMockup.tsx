import React from 'react';

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ src, alt, className = "" }) => {
  return (
    <div className={`relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-10"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        
        {/* Overlay to simulate app UI elements if image is just a placeholder */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {/* Fake Status Bar */}
            <div className="flex justify-between items-center px-6 pt-3 text-xs font-bold text-gray-800/50">
                <span>9:41</span>
                <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-gray-800/50 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-800/50 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;