interface BrandLogoProps {
  className?: string;
  variant?: 'default' | 'inverted';
}

const BrandLogo = ({ className = "", variant = 'default' }: BrandLogoProps) => {
  // 'default': Usado em fundos brancos (Navbar com scroll) -> logo.png (Colorido + Texto Escuro)
  // 'inverted': Usado em fundos escuros (Hero, Footer, Navbar transparente) -> logo-white.png (Todo Branco)
  const logoSrc = variant === 'inverted' ? '/assets/img/logo-compra-rapida-claro.png' : '/assets/img/logo-compra-rapida.png';

  return (
    <img 
      src={logoSrc} 
      alt="Compra Rápida" 
      className={`h-10 w-auto object-contain transition-all duration-300 ${className}`}
    />
  );
};

export default BrandLogo;