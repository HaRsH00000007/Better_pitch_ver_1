import React from 'react';
import { Sparkles } from 'lucide-react';
import VoiceAssistantCard from './overview/VoiceAssistantCard';
import TypographyCard from './overview/TypographyCard';
import AutomationGraphCard from './overview/AutomationGraphCard';
import MotionGenieCard from './overview/MotionGenieCard';
import TagCloudCard from './overview/TagCloudCard';
import GlobalCommunityCard from './overview/GlobalCommunityCard';

export default function OverviewSection() {
  return (
    <section 
      id="overview" 
      className="relative bg-[#FAFAFD] text-slate-900 pt-20 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors"
    >
      {/* Subtle Ambient Background Lighting Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Warm Radial Glow (matches 'Everything') */}
        <div 
          className="absolute top-10 right-[15%] w-[550px] h-[450px] rounded-full opacity-35 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 92, 40, 0.25) 0%, rgba(255, 140, 50, 0.08) 55%, transparent 80%)'
          }}
        />

        {/* Soft Cool Cyan/Blue Radial Glow (matches 'Power') */}
        <div 
          className="absolute top-20 left-[15%] w-[500px] h-[400px] rounded-full opacity-30 blur-[110px]"
          style={{
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, rgba(56, 189, 248, 0.08) 55%, transparent 80%)'
          }}
        />

        {/* Subtle Fine Dot Grid Texture for Depth */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          
          {/* Top Capsule Badge: "Overview" */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm hover:shadow transition-all duration-300 mb-6 cursor-default">
            {/* Colorful Circular Icon */}
            <div 
              className="w-5 h-5 rounded-full flex items-center justify-center text-white shadow-xs"
              style={{
                background: 'linear-gradient(135deg, #0284C7 0%, #FF5C28 100%)'
              }}
            >
              <Sparkles className="w-3 h-3 fill-white stroke-none" />
            </div>
            <span className="text-xs sm:text-[13px] font-semibold text-slate-800 tracking-wide">
              Overview
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Complete AI Platform to <br />
            <span className="bg-gradient-to-r from-[#0284C7] via-[#0091FF] to-[#0284C7] bg-clip-text text-transparent">
              Power
            </span>{' '}
            <span className="bg-gradient-to-r from-[#FF5C28] via-[#FF7744] to-[#EA580C] bg-clip-text text-transparent">
              Everything
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
            AI SaaS brings all your creative, analytical, and automation tools together, giving your team a seamless workspace designed to boost productivity and simplify every workflow.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Row 1 - Card 1: Voice Assistant */}
          <div className="h-full">
            <VoiceAssistantCard />
          </div>

          {/* Row 1 - Card 2: Typography Statement Card */}
          <div className="h-full">
            <TypographyCard />
          </div>

          {/* Row 1 - Card 3: AI Automation Graph */}
          <div className="h-full">
            <AutomationGraphCard />
          </div>

          {/* Row 2 - Card 4: MotionGenie App Mockup */}
          <div className="h-full">
            <MotionGenieCard />
          </div>

          {/* Row 2 - Card 5: Interactive AI Tag Cloud */}
          <div className="h-full">
            <TagCloudCard />
          </div>

          {/* Row 2 - Card 6: Built for Global Community */}
          <div className="h-full">
            <GlobalCommunityCard />
          </div>

        </div>

      </div>
    </section>
  );
}
