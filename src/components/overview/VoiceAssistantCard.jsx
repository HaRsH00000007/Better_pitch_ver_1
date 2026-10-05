import React, { useState } from 'react';
import { Mic, Volume2 } from 'lucide-react';

export default function VoiceAssistantCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-[28px] p-7 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-between min-h-[280px] cursor-pointer overflow-hidden"
    >
      {/* Subtle top ambient glow on hover */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-pink-100/40 to-transparent blur-2xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100" />

      {/* Floating 3D Voice Orb */}
      <div className="relative my-auto flex items-center justify-center pt-2">
        {/* Outer gentle ambient pulse ring */}
        <div 
          className={`absolute w-36 h-36 rounded-full border border-pink-400/20 transition-all duration-700 pointer-events-none ${
            isHovered ? 'scale-110 opacity-70 animate-ping' : 'scale-95 opacity-0'
          }`}
          style={{ animationDuration: '3s' }}
        />

        {/* Second soft halo */}
        <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/15 to-blue-500/20 blur-xl pointer-events-none" />

        {/* Main 3D Spherical Orb */}
        <div className="relative w-28 h-28 rounded-full animate-voice-breathe transition-transform duration-300 group-hover:scale-105">
          {/* Base gradient body */}
          <div 
            className="w-full h-full rounded-full shadow-[inset_-8px_-8px_20px_rgba(30,27,75,0.4),inset_6px_6px_16px_rgba(255,255,255,0.7)]"
            style={{
              background: 'radial-gradient(circle at 35% 28%, #FF85C0 0%, #F43F5E 25%, #A855F7 60%, #3B82F6 100%)',
            }}
          />

          {/* Glossy Specular Light Reflection */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 32% 24%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 32%, transparent 60%)',
            }}
          />

          {/* Micro Sound Wave Bars (shown gently on hover) */}
          <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 transition-all duration-300 ${isHovered ? 'opacity-90 scale-100' : 'opacity-0 scale-75'}`}>
            <span className="w-1 h-3 bg-white/90 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-5 bg-white/90 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-2.5 bg-white/90 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            <span className="w-1 h-4 bg-white/90 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
          </div>
        </div>
      </div>

      {/* Typography */}
      <div className="text-center w-full z-10">
        <h3 className="text-[19px] font-bold text-slate-900 tracking-tight transition-colors group-hover:text-black">
          Voice Assistant
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-1.5 max-w-[210px] mx-auto leading-relaxed">
          Natural language interface - just ask what you need
        </p>
      </div>
    </div>
  );
}
