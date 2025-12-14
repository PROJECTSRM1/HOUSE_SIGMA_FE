import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import FeaturesSection from '@/components/FeaturesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import AuthModals from '@/components/AuthModals';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>HomeNest Streamline Your Property Management</title>
        <meta name="description" content="Explore all the tools you need for efficient and streamlined property management with HomeNest." />
      </Helmet>
      
      <Navbar  />
      <main>
        <HeroSlider />
        <FeaturesSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
      <AuthModals isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
};

export default Index;
