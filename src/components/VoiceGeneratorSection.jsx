import React, { useState } from 'react';
import { Sparkles, Volume2, Upload, Globe, Users } from 'lucide-react';

export default function VoiceGeneratorSection() {
  const [activeSquircle, setActiveSquircle] = useState(null);
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetingSets = [
    ['Hallo', 'Hai', 'Hi', 'Holla'],
    ['Bonjour', 'Ciao', 'Olá', 'Aloha'],
    ['Konnichiwa', 'Namaste', 'Shalom', 'Marhaba'],
  ];

  // Optional subtle Web Audio synthesizer tone when interacting with voice badges
  const playChime = (freq = 440) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
    } catch (e) {
      // AudioContext fallback
    }
  };

  const handleGreetingCycle = () => {
    playChime(587.33); // D5 note
    setGreetingIndex((prev) => (prev + 1) % greetingSets.length);
  };

  return (
    <section 
      id="voice-generator" 
      className="relative bg-white text-slate-900 py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden select-none min-h-[640px] lg:min-h-[720px] flex items-center justify-center border-t border-slate-100"
    >
      
      {/* 1. Giant Background Watermark Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span 
          className="font-extrabold tracking-tighter text-slate-100/90 whitespace-nowrap text-[120px] sm:text-[180px] md:text-[220px] lg:text-[270px] select-none transform translate-y-4"
          style={{ letterSpacing: '-0.04em' }}
        >
          The AI Voice
        </span>
      </div>

      {/* 2. Delicate Orbital Wave SVG Paths */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1200 700" 
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Large outer orbital arc */}
        <path 
          d="M-100,550 C250,720 950,720 1300,550" 
          stroke="#F1F5F9" 
          strokeWidth="1.5" 
          strokeDasharray="4 6"
        />
        {/* Elliptical constellation track connecting the badges */}
        <ellipse 
          cx="600" 
          cy="350" 
          rx="520" 
          ry="280" 
          stroke="#E2E8F0" 
          strokeWidth="1.2" 
          opacity="0.6"
        />
        {/* Subtle inner arc */}
        <path 
          d="M300,600 C500,680 700,680 900,600" 
          stroke="#CBD5E1" 
          strokeWidth="1" 
          opacity="0.5" 
        />
      </svg>

      {/* 3. Central Content Column */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        
        {/* Eyebrow / Tag */}
        <div className="inline-block text-xs sm:text-sm font-semibold text-slate-800 tracking-wide mb-6 sm:mb-8">
          AI for Audio
        </div>

        {/* Central Display Headline */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight text-[#1E2229] leading-[1.06] mb-6">
          The AI Voice <br />
          Generator
        </h2>

        {/* Subtitle */}
        <p className="text-slate-500 font-normal text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Transform Your Voice Editing Experience with Advanced AI Technology
        </p>

      </div>

      {/* 4. SQUIRCLE BADGES CONSTELLATION */}

      {/* BADGE 1: Crimson Red (Top-Left) - "Just Upload and Generate!" */}
      <div 
        onMouseEnter={() => { setActiveSquircle('red'); playChime(523.25); }}
        onMouseLeave={() => setActiveSquircle(null)}
        onClick={() => playChime(659.25)}
        className="absolute top-[12%] sm:top-[16%] left-[6%] sm:left-[8%] lg:left-[11%] z-20 animate-squircle-1 cursor-pointer group"
      >
        <div className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] lg:w-[102px] lg:h-[102px] rounded-[24px] sm:rounded-[28px] bg-[#B91C1C] text-white p-3 sm:p-4 flex flex-col justify-center items-start shadow-[0_12px_28px_rgba(185,28,28,0.28)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_36px_rgba(185,28,28,0.38)]">
          <span className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold leading-[1.18] tracking-tight">
            Just <br />
            Upload <br />
            and <br />
            Generate!
          </span>
        </div>
      </div>

      {/* BADGE 2: Chartreuse Lime (Mid-Left) - "150 language variations provided" */}
      <div 
        onMouseEnter={() => { setActiveSquircle('lime'); playChime(440); }}
        onMouseLeave={() => setActiveSquircle(null)}
        onClick={() => playChime(523.25)}
        className="absolute top-[36%] sm:top-[38%] left-[15%] sm:left-[18%] lg:left-[21%] z-20 animate-squircle-2 cursor-pointer group"
      >
        <div className="w-[88px] h-[88px] sm:w-[98px] sm:h-[98px] lg:w-[106px] lg:h-[106px] rounded-[24px] sm:rounded-[28px] bg-[#9CA82B] text-[#111827] p-3 sm:p-4 flex flex-col justify-center items-start shadow-[0_12px_28px_rgba(156,168,43,0.25)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_36px_rgba(156,168,43,0.38)]">
          <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-bold leading-[1.24] tracking-tight">
            150 language <br />
            variations <br />
            provided
          </span>
        </div>
      </div>

      {/* BADGE 3: Silver Grey Pebble (Bottom-Left) */}
      <div 
        onMouseEnter={() => { setActiveSquircle('silver1'); playChime(349.23); }}
        onMouseLeave={() => setActiveSquircle(null)}
        className="absolute bottom-[16%] sm:bottom-[20%] left-[8%] sm:left-[10%] lg:left-[12%] z-20 animate-squircle-3 cursor-pointer group"
      >
        <div className="w-[74px] h-[74px] sm:w-[84px] sm:h-[84px] lg:w-[92px] lg:h-[92px] rounded-[22px] sm:rounded-[26px] bg-[#D1D5DB] p-3 flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5">
          {/* Subtle Equalizer Voice Bars */}
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 bg-slate-400 rounded-full animate-eq-bar" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 bg-slate-400 rounded-full animate-eq-bar" style={{ animationDelay: '300ms' }} />
            <span className="w-1.5 bg-slate-400 rounded-full animate-eq-bar" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 bg-slate-400 rounded-full animate-eq-bar" style={{ animationDelay: '450ms' }} />
          </div>
        </div>
      </div>

      {/* BADGE 4: Silver Grey Pebble (Top-Right) */}
      <div 
        onMouseEnter={() => { setActiveSquircle('silver2'); playChime(392); }}
        onMouseLeave={() => setActiveSquircle(null)}
        className="absolute top-[14%] sm:top-[16%] right-[16%] sm:right-[18%] lg:right-[21%] z-20 animate-squircle-2 cursor-pointer group"
      >
        <div className="w-[74px] h-[74px] sm:w-[84px] sm:h-[84px] lg:w-[92px] lg:h-[92px] rounded-[22px] sm:rounded-[26px] bg-[#D1D5DB] p-3 flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5">
          <Volume2 className="w-6 h-6 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </div>
      </div>

      {/* BADGE 5: Cyan/Teal (Mid-Right) - "More than 5K users" */}
      <div 
        onMouseEnter={() => { setActiveSquircle('teal'); playChime(659.25); }}
        onMouseLeave={() => setActiveSquircle(null)}
        onClick={() => playChime(783.99)}
        className="absolute top-[48%] sm:top-[50%] right-[6%] sm:right-[8%] lg:right-[10%] z-20 animate-squircle-1 cursor-pointer group"
      >
        <div className="w-[88px] h-[88px] sm:w-[98px] sm:h-[98px] lg:w-[106px] lg:h-[106px] rounded-[24px] sm:rounded-[28px] bg-[#0EA5B6] text-white p-3 sm:p-4 flex flex-col justify-center items-start shadow-[0_12px_28px_rgba(14,165,182,0.3)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_36px_rgba(14,165,182,0.42)]">
          <span className="text-[10px] sm:text-[11px] font-medium text-white/90 leading-none">
            More than
          </span>
          <div className="text-[28px] sm:text-[34px] font-black text-white leading-none my-1 tracking-tight flex items-baseline">
            5K <span className="text-[10px] font-normal ml-1">users</span>
          </div>
        </div>
      </div>

      {/* BADGE 6: Mint Emerald Green (Bottom-Right) - "Hallo Hai Hi Holla" */}
      <div 
        onMouseEnter={() => { setActiveSquircle('green'); playChime(523.25); }}
        onMouseLeave={() => setActiveSquircle(null)}
        onClick={handleGreetingCycle}
        className="absolute bottom-[12%] sm:bottom-[15%] right-[18%] sm:right-[21%] lg:right-[24%] z-20 animate-squircle-3 cursor-pointer group"
        title="Click to cycle greetings!"
      >
        <div className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] lg:w-[102px] lg:h-[102px] rounded-[24px] sm:rounded-[28px] bg-[#10B981] text-white p-3 sm:p-4 flex flex-col justify-center items-start shadow-[0_12px_28px_rgba(16,185,129,0.28)] transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_36px_rgba(16,185,129,0.4)]">
          {greetingSets[greetingIndex].map((greeting, i) => (
            <span key={i} className="text-[12px] sm:text-[13px] lg:text-[14px] font-bold leading-[1.18] tracking-tight">
              {greeting}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
