import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importe useLocation e Link
import { Menu, X } from './Icons';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = (isScrolled || !isHome) ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
  const textColor = (isScrolled || !isHome) ? 'text-gray-700' : 'text-white';
  const logoVariant = (isScrolled || !isHome) ? 'default' : 'inverted';
  const buttonStyle = (isScrolled || !isHome)
    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200' 
    : 'bg-white text-brand-600 hover:bg-gray-100';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <BrandLogo className="h-8 md:h-10" variant={logoVariant} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Funcionalidades', 'Como Funciona'].map((item) => (
              <a 
                key={item} 
                href={`/#${item.toLowerCase().replace(' ', '-')}`} 
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${textColor}`}
              >
                {item}
              </a>
            ))}
            <Link to="/sobre" className={`text-sm font-medium hover:opacity-80 transition-opacity ${textColor}`}>
                Sobre
            </Link>
            
            <button className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 ${buttonStyle}`}>
              Baixar Agora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={textColor}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-fade-in">
           <div className="px-4 pt-2 pb-6 space-y-1">
             <Link to="/sobre" className="block px-3 py-3 text-base font-medium text-gray-700">Sobre</Link>
             <Link to="/termos" className="block px-3 py-3 text-base font-medium text-gray-700">Termos</Link>
             <Link to="/privacidade" className="block px-3 py-3 text-base font-medium text-gray-700">Privacidade</Link>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;