import React from 'react';
import { ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import FloatingCursors from './FloatingCursors';
import DashboardMockup from './DashboardMockup';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#070A10] overflow-hidden text-white flex flex-col justify-between pb-8 sm:pb-12">
      
      {/* 1. Cinematic Photographic Lens Flare & Dark Slated Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Background Image: Deep Navy Slate Left, Fiery Golden Flare Streak Center-Right */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85 scale-105"
          style={{
            backgroundImage: "url('/hero_cinematic_bg.jpg')",
          }}
        />

        {/* Dynamic Radiant Lens Glow Accent */}
        <div 
          className="absolute top-[-5%] right-[12%] w-[750px] h-[650px] rounded-full opacity-60 blur-[130px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,100,20,0.85) 0%, rgba(255,160,30,0.45) 40%, rgba(10,13,20,0) 75%)'
          }}
        />

        {/* Ambient Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A10]/75 via-[#070A10]/20 to-[#070A10]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A10]/50 via-transparent to-[#070A10]/40" />
      </div>

      {/* 2. Top Navigation Bar (Attached to viewport top) */}
      <Navbar />

      {/* 3. Floating Collaborator Cursors (Michel with voice rays on left, Alexa on right) */}
      <FloatingCursors />

      {/* 4. Main Hero Typography & Call-To-Action Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 pt-10 sm:pt-14 text-center flex-1 flex flex-col items-center justify-center">
        
        {/* Version Release Badge: White Capsule Pill */}
        <div className="inline-flex items-center gap-2 bg-white text-slate-800 rounded-full pl-1.5 pr-4 py-1 mb-6 shadow-xl border border-slate-100 hover:scale-105 transition-all duration-300 cursor-pointer group">
          <span className="bg-[#FF5C28] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
            New
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28]" />
          <span className="text-xs font-semibold text-slate-800 tracking-tight">
            See what's new in v19.0
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-semibold text-white tracking-tight leading-[1.14] max-w-4xl mx-auto mb-5 drop-shadow-md">
          Productivity Reimagined with <br className="hidden sm:inline" />
          Artificial Intelligence
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-200/90 max-w-xl mx-auto leading-relaxed mb-8 font-normal">
          AI-powered productivity tools help teams eliminate repetitive tasks, automate workflows, and focus on high-impact work.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8 z-20">
          {/* Button 1: Get Started Dark Pill */}
          <button className="w-full sm:w-auto bg-[#0B0F17] hover:bg-[#161D2B] text-white text-xs sm:text-sm font-semibold pl-5 sm:pl-6 pr-2 py-2 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/10 group">
            <span>Get Started</span>
            <div className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-sm">
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </div>
          </button>

          {/* Button 2: Get a Quote White Pill */}
          <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-semibold pl-5 sm:pl-6 pr-2 py-2 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-slate-200 group">
            <span>Get a Quote</span>
            <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center group-hover:translate-x-0.5 transition-transform shadow-inner">
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </div>
          </button>
        </div>

        {/* 5. 3-Column Glassmorphism Dashboard UI Mockup */}
        <DashboardMockup />
      </main>

      {/* 6. Luminous Bottom Misty Fog Gradient Mask into Overview Section */}
      <div 
        className="absolute bottom-0 inset-x-0 h-40 sm:h-56 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, #FAFAFD 12%, rgba(250, 250, 253, 0.75) 45%, rgba(250, 250, 253, 0.15) 75%, transparent 100%)'
        }}
      />

    </div>
  );
}
