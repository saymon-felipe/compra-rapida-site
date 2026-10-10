import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Zap, ShieldCheck } from './Icons';
import BrandLogo from './BrandLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDarkHero = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : isDarkHero
          ? 'bg-dark-900/40 backdrop-blur-sm border-b border-white/10 py-4'
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo com micro-interação */}
          <Link to="/" className="flex items-center group">
            <BrandLogo
              className="h-9 md:h-11 transition-transform duration-300 group-hover:scale-105"
              variant={isDarkHero ? 'inverted' : 'default'}
            />
          </Link>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isDarkHero
                  ? 'text-gray-200 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Como Funciona
            </button>

            <button
              onClick={() => scrollToSection('diferenciais')}
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                isDarkHero
                  ? 'text-gray-200 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Diferenciais
            </button>

            <Link
              to="/quero-vender"
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
                location.pathname === '/quero-vender'
                  ? 'text-brand-600 font-semibold'
                  : isDarkHero
                  ? 'text-gray-200 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span>Quero Vender</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-500">
                Parceiros
              </span>
            </Link>

            <Link
              to="/sobre"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                location.pathname === '/sobre'
                  ? 'text-brand-600 font-semibold'
                  : isDarkHero
                  ? 'text-gray-200 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Sobre Nós
            </Link>

            <Link
              to="/termos"
              className={`px-3.5 py-2 rounded-lg transition-colors ${
                location.pathname === '/termos' || location.pathname === '/privacidade'
                  ? 'text-brand-600 font-semibold'
                  : isDarkHero
                  ? 'text-gray-200 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Termos & LGPD
            </Link>
          </nav>

          {/* Ações Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://app.gourmetech.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${
                isDarkHero
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span>Portal do Lojista</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={() => scrollToSection('download')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/25 hover:shadow-lg hover:shadow-brand-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              <Zap size={16} className="fill-current text-white animate-pulse" />
              <span>Baixar App</span>
            </button>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none ${
                isDarkHero ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'
              }`}
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-b border-gray-100 shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-3">
              <button
                onClick={() => {
                  scrollToSection('como-funciona');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-between"
              >
                <span>Como Funciona</span>
                <span className="text-gray-400 text-xs">Passo a passo</span>
              </button>

              <button
                onClick={() => {
                  scrollToSection('diferenciais');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-between"
              >
                <span>Diferenciais</span>
                <span className="text-gray-400 text-xs">Tecnologia e estorno</span>
              </button>

              <Link
                to="/quero-vender"
                className="w-full text-left px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span>Quero Vender</span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-brand-100 text-brand-700">
                    Mercados
                  </span>
                </div>
              </Link>

              <Link
                to="/sobre"
                className="block px-3 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
              >
                Sobre Nós
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                <Link
                  to="/termos"
                  className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-brand-600 bg-gray-50 rounded-lg text-center"
                >
                  Termos de Uso
                </Link>
                <Link
                  to="/privacidade"
                  className="px-3 py-2 text-xs font-medium text-gray-600 hover:text-brand-600 bg-gray-50 rounded-lg text-center"
                >
                  Privacidade LGPD
                </Link>
              </div>

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    scrollToSection('download');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-3 px-4 bg-brand-600 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <Zap size={18} />
                  <span>Baixar Compra Rápida</span>
                </button>

                <a
                  href="https://app.gourmetech.com.br/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-center text-xs font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <ShieldCheck size={16} className="text-brand-600" />
                  <span>Acessar Portal do Parceiro (Gourmetech)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;