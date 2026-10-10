import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DualAudienceSection from '../components/DualAudienceSection';
import FaqSection from '../components/FaqSection';
import DownloadSection from '../components/DownloadSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <DualAudienceSection />
      <FaqSection />
      <DownloadSection />
    </>
  );
};

export default Home;