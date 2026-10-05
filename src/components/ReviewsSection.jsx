import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      id: 'james',
      name: 'James Walker',
      role: 'Business Consultant',
      quote: "This AI task management platform completely changed how our team organizes work. Tasks are automatically prioritized, and the smart reminders keep everyone on track. We've improved our productivity and collaboration significantly.",
      rating: '4.9',
      avatarBg: 'bg-amber-600',
      avatarImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      floatAnim: 'animate-float-slow',
    },
    {
      id: 'sarah',
      name: 'Sarah Johnson',
      role: 'Product Designer',
      quote: "The intelligent scheduling feature is a game changer. Tasks are automatically arranged based on priorities and deadlines, saving us hours of planning every week. work and streamline workflows. multiple teams without losing visibility.",
      rating: '4.9',
      avatarBg: 'bg-orange-600',
      avatarImg: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      floatAnim: 'animate-float-reverse',
    },
    {
      id: 'michael',
      name: 'Michael Chen',
      role: 'Marketing Manager',
      quote: "I've tried many productivity tools, but this one truly stands out. The AI suggestions help us plan projects faster and remove the stress of manual scheduling. It feels like having a digital assistant for our entire team.",
      rating: '4.9',
      avatarBg: 'bg-blue-600',
      avatarImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      floatAnim: 'animate-float-slow',
    },
  ];

  return (
    <section 
      id="reviews" 
      className="relative bg-[#070A10] text-white py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-white/5"
    >
      
      {/* 1. ATMOSPHERIC FIERY AMBIENT LIGHTING BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Warm Fiery Beam Bokeh */}
        <div 
          className="absolute -top-10 -left-20 w-[650px] h-[750px] rounded-full opacity-45 blur-[120px]"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(255, 92, 40, 0.75) 0%, rgba(255, 140, 30, 0.35) 45%, transparent 75%)'
          }}
        />

        {/* Lower Warm Golden Ambient Bokeh */}
        <div 
          className="absolute bottom-0 left-[15%] w-[450px] h-[400px] rounded-full opacity-35 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 160, 40, 0.5) 0%, rgba(255, 80, 20, 0.15) 55%, transparent 80%)'
          }}
        />

        {/* Right Subtle Cool Dark Contrast */}
        <div 
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(30, 58, 138, 0.3) 0%, transparent 70%)'
          }}
        />

        {/* Subtle Architectural Grid / Lighting Lines */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Vignette mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070A10] via-transparent to-[#070A10] opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Reviews Pill Badge */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28] animate-ping" />
            <span className="text-xs font-semibold text-white/90 tracking-wide">
              Reviews
            </span>
          </div>
        </div>

        {/* GIANT CENTER BACKGROUND TITLE: "Testimonials" */}
        <div className="relative flex items-center justify-center my-6 sm:my-10 pointer-events-none select-none">
          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[145px] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C28] via-[#FF7744] to-[#FFA278] drop-shadow-[0_15px_30px_rgba(255,92,40,0.25)]">
            Testimonials
          </h2>
        </div>

        {/* STAGGERED 3 GLASSMORPHISM TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mt-[-60px] sm:mt-[-80px] lg:mt-[-90px]">
          
          {/* LEFT COLUMN: James Walker (Top) & Sarah Johnson (Bottom) */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:gap-10">
            
            {/* CARD 1: James Walker */}
            <div className={`relative max-w-[420px] rounded-2xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.06] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-orange-500/50 hover:bg-white/[0.09] hover:-translate-y-1.5 group cursor-pointer ${reviews[0].floatAnim}`}>
              
              {/* Author Header */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={reviews[0].avatarImg} 
                  alt={reviews[0].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500/50 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {reviews[0].name}
                  </h4>
                  <p className="text-[11px] text-white/50 font-medium">
                    {reviews[0].role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-white/80 text-xs sm:text-[13px] font-normal leading-relaxed mb-4">
                {reviews[0].quote}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-end gap-1.5 pt-1 text-[#FF5C28]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-bold text-white/90">{reviews[0].rating}</span>
              </div>
            </div>

            {/* CARD 2: Sarah Johnson */}
            <div className={`relative max-w-[420px] rounded-2xl p-6 sm:p-7 backdrop-blur-xl bg-white/[0.06] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-orange-500/50 hover:bg-white/[0.09] hover:-translate-y-1.5 group cursor-pointer ${reviews[1].floatAnim}`}>
              
              {/* Author Header */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={reviews[1].avatarImg} 
                  alt={reviews[1].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500/50 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {reviews[1].name}
                  </h4>
                  <p className="text-[11px] text-white/50 font-medium">
                    {reviews[1].role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-white/80 text-xs sm:text-[13px] font-normal leading-relaxed mb-1">
                {reviews[1].quote}
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Michael Chen (Offset Staggered in Center-Right) */}
          <div className="lg:col-span-6 flex justify-start lg:justify-center lg:pt-8">
            
            {/* CARD 3: Michael Chen */}
            <div className={`relative w-full max-w-[440px] rounded-2xl p-6 sm:p-8 backdrop-blur-xl bg-white/[0.06] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.65)] transition-all duration-300 hover:border-orange-500/50 hover:bg-white/[0.09] hover:-translate-y-1.5 group cursor-pointer ${reviews[2].floatAnim}`}>
              
              {/* Author Header */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={reviews[2].avatarImg} 
                  alt={reviews[2].name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500/50 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {reviews[2].name}
                  </h4>
                  <p className="text-[11px] text-white/50 font-medium">
                    {reviews[2].role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-white/80 text-xs sm:text-[13px] font-normal leading-relaxed mb-4">
                {reviews[2].quote}
              </p>

              {/* Rating */}
              <div className="flex items-center justify-end gap-1.5 pt-1 text-[#FF5C28]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-bold text-white/90">{reviews[2].rating}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
