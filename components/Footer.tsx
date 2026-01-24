import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Link to="/">
                <BrandLogo className="h-8" variant="inverted" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simplificando a forma como você faz compras de mercado. Rápido, barato e local.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-brand-500">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/sobre" className="hover:text-white">Sobre nós</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-brand-500">Parceiros</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/quero-vender" className="hover:text-white">Quero vender</Link></li>
              <li><a href="https://app.gourmetech.com.br/login" target="_blank" className="hover:text-white">Portal do Parceiro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-brand-500">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/termos" className="hover:text-white">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-white">Privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Compra Rápida. Feito por <a href="https://kineticsolutions.com.br?utm_source=compra-rapida" target="_blank" rel="noopener noreferrer">KSI - Kinetic Solutions</a>.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-brand-500">Instagram</a>
             <a href="#" className="hover:text-brand-500">Twitter</a>
             <a href="#" className="hover:text-brand-500">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;