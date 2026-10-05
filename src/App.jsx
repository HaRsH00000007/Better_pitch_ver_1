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
  React.useEffect(() => {
    // Elegant IntersectionObserver for scroll-driven reveals across all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#070A10] selection:bg-[#FF5C28] selection:text-white">
      <HeroSection />
      <div className="reveal-on-scroll"><OverviewSection /></div>
      <div className="reveal-on-scroll"><BenefitsSection /></div>
      <div className="reveal-on-scroll"><VoiceGeneratorSection /></div>
      <div className="reveal-on-scroll"><TestimonialsSection /></div>
      <div className="reveal-on-scroll"><VoicesSection /></div>
      <div className="reveal-on-scroll"><ConvenienceSection /></div>
      <div className="reveal-on-scroll"><ReviewsSection /></div>
      <div className="reveal-on-scroll"><PayoffSection /></div>
      <div className="reveal-on-scroll"><HowToSection /></div>
      <div className="reveal-on-scroll"><TeamSection /></div>
      <div className="reveal-on-scroll"><IntegrationsSection /></div>
      <div className="reveal-on-scroll"><FaqSection /></div>
      <div className="reveal-on-scroll"><FooterSection /></div>
    </div>
  );
}







