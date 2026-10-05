import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import CardStack from './benefits/CardStack';

export default function BenefitsSection() {
  const perks = [
    { title: 'Instant Global Settlement', desc: 'Execute zero-latency transfers across 140+ countries.' },
    { title: 'Automated AI Reconciliation', desc: 'Eliminate manual bookkeeping with 99.8% precision.' },
    { title: 'Enterprise Bank-Grade Security', desc: 'Biometric authorization with AES-256 vault encryption.' },
  ];

  return (
    <section 
      id="benefits" 
      className="relative bg-white text-slate-900 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-100"
    >
      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/3 -right-20 w-[600px] h-[500px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.2) 0%, rgba(147, 51, 234, 0.1) 60%, transparent 80%)'
          }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-[500px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 92, 40, 0.15) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.22em] text-slate-400 uppercase mb-4">
              BENEFITS
            </span>

            {/* Display Headline */}
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[74px] leading-[0.92] tracking-wide uppercase text-slate-900 mb-6 drop-shadow-xs">
              MAKE PAYMENT <br />
              EASY, SIMPLIFY <br />
              <span className="text-[#2563EB]">
                YOUR FINANCE
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mb-8">
              Consolidate your global operations, streamline corporate payments, and accelerate financial growth with enterprise-grade automated workflows.
            </p>

            {/* Benefits Feature List */}
            <div className="space-y-4 mb-8">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{perk.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="bg-[#0A0D14] hover:bg-[#1A202C] text-white text-sm font-semibold pl-6 pr-2.5 py-3 rounded-full flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group cursor-pointer">
                <span>Start Free Trial</span>
                <div className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            </div>

          </div>

          {/* Right Column: Fanned Interactive 3D Card Stack */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center pt-8 lg:pt-0">
            <CardStack />
          </div>

        </div>
      </div>
    </section>
  );
}
