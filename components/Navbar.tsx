import { useState, useEffect } from 'react';
import { Menu, X } from './Icons';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BrandLogo 
              className="h-8 md:h-10" 
              variant={isScrolled ? 'default' : 'inverted'} 
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Funcionalidades', 'Como Funciona'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`text-sm font-medium hover:opacity-80 transition-opacity ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <button className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 ${
              isScrolled 
                ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200' 
                : 'bg-white text-brand-600 hover:bg-gray-100'
            }`}>
              Baixar Agora
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-gray-800' : 'text-white'}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Funcionalidades', 'Como Funciona', 'Depoimentos'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4">
                <button className="w-full px-5 py-3 rounded-lg font-bold text-white bg-brand-600 hover:bg-brand-700">
                    Baixar App
                </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;