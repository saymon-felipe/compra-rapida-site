import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Partner from './pages/Partner'; 

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-brand-200 selection:text-brand-900 flex flex-col">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex-grow">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/quero-vender" element={<Partner />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;