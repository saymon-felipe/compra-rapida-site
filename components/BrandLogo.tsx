import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'default' | 'inverted';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "", variant = 'default' }) => {
  // 'default': Usado em fundos brancos (Navbar com scroll) -> logo.png (Colorido + Texto Escuro)
  // 'inverted': Usado em fundos escuros (Hero, Footer, Navbar transparente) -> logo-white.png (Todo Branco)
  const logoSrc = variant === 'inverted' ? '/assets/img/logo-white.png' : '/assets/img/logo.png';

  return (
    <img 
      src={logoSrc} 
      alt="Compra Rápida" 
      className={`h-10 w-auto object-contain transition-all duration-300 ${className}`}
    />
  );
};

export default BrandLogo;