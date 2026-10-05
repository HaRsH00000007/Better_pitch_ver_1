import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Play pleasant lightweight Web Audio synth tone on interaction
  const playTone = (freq = 550) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // Audio context might be restricted before first gesture
    }
  };

  const team = [
    {
      id: 'david',
      name: 'David',
      role: 'Manager',
      image: '/images/team_david.jpg',
      bio: 'David is dedicated to ensuring our clients achieve their goals and are fully satisfied with our services. His proactive approach...',
      soundFreq: 523.25, // C5
    },
    {
      id: 'raoul',
      name: 'Raoul',
      role: 'Operations',
      image: '/images/team_raoul.jpg',
      bio: 'Raoul streamlines our daily operations, enhancing efficiency and ensuring smooth workflow across teams.',
      soundFreq: 659.25, // E5
    },
    {
      id: 'michael',
      name: 'Michael',
      role: 'Head Of Product',
      image: '/images/team_michael.jpg',
      bio: 'Michael directs the creation and enhancement of our product offerings, focusing on user needs and market trends.',
      soundFreq: 783.99, // G5
    },
  ];

  return (
    <section 
      id="team" 
      className="relative bg-white text-[#111827] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden select-none border-t border-slate-100"
    >
      {/* Subtle Ethereal Diagonal Webflow Geometry Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left diagonal soft lavender streak */}
        <div 
          className="absolute -bottom-20 -left-20 w-[450px] h-[300px] -rotate-45 opacity-40 blur-[90px]"
          style={{
            background: 'linear-gradient(135deg, rgba(94, 32, 217, 0.12) 0%, rgba(224, 215, 255, 0.3) 100%)'
          }}
        />
        {/* Top right diagonal soft violet streak */}
        <div 
          className="absolute -top-10 -right-10 w-[500px] h-[350px] -rotate-45 opacity-30 blur-[100px]"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.14) 0%, rgba(243, 238, 255, 0.4) 100%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* 2-COLUMN MAIN LAYOUT: Left Headline, Right Description + 3 Compact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Pill & Giant Title */}
          <div className="lg:col-span-5 xl:col-span-5 pr-4">
            {/* Small bulleted pill */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E1649]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#1E1649] uppercase">
                ROADMAP
              </span>
            </div>

            {/* Giant Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#1E1649] leading-[1.14] tracking-[-0.025em]">
              Introducing Our<br />
              Talented Team Who<br />
              Drive Lucre’s Success<br />
              &amp; Innovation
            </h2>
          </div>

          {/* RIGHT COLUMN: Description + 3 Compact Cards Row */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-start">
            
            {/* Explanatory Subtitle positioned right above the cards */}
            <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-md font-normal mb-8 sm:mb-10">
              Our dedicated team provides ongoing support and strategic insights to ensure your startup thrives. Explore how our core strengths can empower your journey and set you on the path to remarkable growth.
            </p>

            {/* TEAM CARDS: 3 COMPACT CARDS ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
              {team.map((member) => {
                const isHovered = hoveredMember === member.id;
                return (
                  <div 
                    key={member.id}
                    onMouseEnter={() => {
                      setHoveredMember(member.id);
                      playTone(member.soundFreq);
                    }}
                    onMouseLeave={() => setHoveredMember(null)}
                    className="group flex flex-col cursor-pointer transition-all duration-300"
                  >
                    {/* Compact Portrait Photo Container */}
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center filter brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Bottom-left Role Pill Badge */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md shadow-xs text-slate-800 text-[10px] font-semibold tracking-wide border border-white/60">
                          {member.role}
                        </div>
                      </div>
                    </div>

                    {/* Content Under Photo */}
                    <div className="pt-3 flex flex-col justify-between flex-1">
                      {/* Bio */}
                      <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed line-clamp-3 font-normal mb-2.5">
                        {member.bio}
                      </p>

                      {/* More ABOUT link */}
                      <div className="pt-0.5">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            playTone(member.soundFreq * 1.25);
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1E1649] transition-all duration-200 group-hover:text-[#5E20D9]"
                        >
                          <span className="font-normal text-slate-500">More</span>
                          <span className="underline underline-offset-2 font-bold tracking-wide">ABOUT</span>
                          <ArrowUpRight className={`w-3 h-3 transition-transform duration-300 ${isHovered ? 'translate-x-0.5 -translate-y-0.5 opacity-100' : 'opacity-0'}`} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
