import React from 'react';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import BenefitsSection from './components/BenefitsSection';
import VoiceGeneratorSection from './components/VoiceGeneratorSection';
import TestimonialsSection from './components/TestimonialsSection';
import VoicesSection from './components/VoicesSection';
import ConvenienceSection from './components/ConvenienceSection';
import ReviewsSection from './components/ReviewsSection';
import PayoffSection from './components/PayoffSection';
import HowToSection from './components/HowToSection';
import TeamSection from './components/TeamSection';
import IntegrationsSection from './components/IntegrationsSection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A10] selection:bg-[#FF5C28] selection:text-white">
      <HeroSection />
      <OverviewSection />
      <BenefitsSection />
      <VoiceGeneratorSection />
      <TestimonialsSection />
      <VoicesSection />
      <ConvenienceSection />
      <ReviewsSection />
      <PayoffSection />
      <HowToSection />
      <TeamSection />
      <IntegrationsSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}







