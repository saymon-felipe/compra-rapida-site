import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;