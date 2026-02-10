import AboutSection from '@/components/sections/About';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/Hero';
import React from 'react';

const page = () => {
  return (
    <div className="bg-black">
      <HeroSection />
      <AboutSection />
      <Features />
      <Footer />
    </div>
  );
}

export default page;