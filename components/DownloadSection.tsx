import { motion } from 'framer-motion';
import { playStoreUrl } from '../config';

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-br from-brand-700 via-brand-600 to-emerald-800 relative overflow-hidden text-white">
      {/* Elementos abstratos de energia */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-5xl">Compra Rápida para Android</h2>
        <p className="mx-auto mb-8 max-w-xl text-emerald-100">
          {playStoreUrl
            ? 'Veja os mercados que entregam no seu endereço, confira o frete e acompanhe seu pedido.'
            : 'O aplicativo está em preparação. O link oficial do Google Play aparecerá aqui quando o download estiver disponível.'}
        </p>
        {playStoreUrl && (
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-2xl bg-gray-950 px-8 py-4 font-bold text-white hover:bg-black"
          >
            Baixar no Google Play
          </motion.a>
        )}
      </div>
    </section>
  );
};

export default DownloadSection;