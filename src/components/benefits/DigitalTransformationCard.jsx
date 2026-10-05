import React, { useState } from 'react';
import { Mic, Video, MessageSquare } from 'lucide-react';

export default function DigitalTransformationCard({ isFront = true, onClick }) {
  const [micActive, setMicActive] = useState(true);
  const [videoActive, setVideoActive] = useState(true);

  return (
    <div 
      onClick={onClick}
      className={`relative w-full max-w-[460px] sm:max-w-[500px] h-[320px] sm:h-[340px] rounded-[32px] p-6 sm:p-7 bg-[#F4F0FF] border border-[#E9D5FF]/80 shadow-[0_20px_45px_rgba(109,40,217,0.08)] select-none overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 ${
        isFront ? 'ring-1 ring-purple-300/60' : 'hover:scale-[1.02]'
      }`}
    >
      {/* Background Organic Curved Waves */}
      <svg 
        className="absolute -bottom-10 -left-10 w-[340px] h-[260px] pointer-events-none opacity-50"
        viewBox="0 0 300 240" 
        fill="none"
      >
        <path 
          d="M0,180 C80,180 120,80 260,110 C320,125 340,60 380,30 L380,240 L0,240 Z" 
          fill="#E9D5FF" 
        />
      </svg>
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-purple-200/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Card Header Typography */}
      <div className="relative z-10">
        <h3 className="font-display text-[32px] sm:text-[38px] leading-[0.94] tracking-wide text-slate-900 uppercase">
          DIGITAL <br />
          TRANSFORMATION
        </h3>
        <p className="text-slate-600 text-xs sm:text-[13px] font-medium leading-snug mt-2.5 max-w-[260px]">
          Move the whole operation onto one platform and change how it runs.
        </p>
      </div>

      {/* Hand-drawn Collaboration Handshake Illustration */}
      <div className="relative z-10 w-full h-[180px] sm:h-[195px] flex items-end justify-end pointer-events-none">
        
        {/* Person On Left (Standing, Reaching into Phone) */}
        <div className="absolute bottom-1 right-[145px] sm:right-[165px] flex flex-col items-center">
          <svg width="120" height="155" viewBox="0 0 120 155" fill="none" className="overflow-visible">
            {/* Left Waving Arm */}
            <g className="animate-gentle-wave">
              <path d="M22,50 C12,42 8,32 10,25 C12,18 18,20 22,28" stroke="#1E1B4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {/* Hand */}
              <circle cx="10" cy="22" r="4.5" fill="#FED7AA" stroke="#1E1B4B" strokeWidth="2" />
              <path d="M7,19 L5,14" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M10,17 L10,12" stroke="#1E1B4B" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            {/* Head & Hair */}
            <path d="M52,18 C52,10 64,8 68,14 C72,20 68,28 60,28 C54,28 52,24 52,18 Z" fill="#FED7AA" stroke="#1E1B4B" strokeWidth="2.5" />
            {/* Hair */}
            <path d="M50,14 C52,6 64,6 68,10 C70,12 65,16 60,15 C55,14 52,15 50,14 Z" fill="#1E1B4B" />
            
            {/* Torso / Purple Sweater */}
            <path d="M40,36 C45,32 75,32 80,36 L86,85 L34,85 Z" fill="#A855F7" stroke="#1E1B4B" strokeWidth="2.5" strokeLinejoin="round" />

            {/* Right Arm Reaching Forward for Handshake */}
            <path d="M78,45 C88,52 105,62 118,65" stroke="#A855F7" strokeWidth="12" strokeLinecap="round" />
            <path d="M78,45 C88,52 105,62 118,65" stroke="#1E1B4B" strokeWidth="2.5" fill="none" strokeLinecap="round" />

            {/* Hand Clasp */}
            <circle cx="118" cy="65" r="5" fill="#FED7AA" stroke="#1E1B4B" strokeWidth="2" />

            {/* Legs / Black Pants */}
            <path d="M38,85 L35,135 L52,135 L55,90 L65,90 L68,135 L85,135 L82,85 Z" fill="#1E1B4B" stroke="#1E1B4B" strokeWidth="2" strokeLinejoin="round" />
            {/* White Shoes */}
            <path d="M30,135 C30,132 40,130 52,135 L52,142 L28,142 Z" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="2" />
            <path d="M68,135 C68,132 78,130 90,135 L90,142 L66,142 Z" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="2" />
          </svg>
        </div>

        {/* Smartphone Screen on Right */}
        <div className="relative w-[115px] sm:w-[130px] h-[170px] sm:h-[185px] bg-white rounded-2xl border-[2.5px] border-[#1E1B4B] shadow-lg flex flex-col justify-between p-2 pb-2.5 overflow-hidden">
          
          {/* Top Notch Speaker */}
          <div className="w-8 h-1.5 bg-[#1E1B4B] rounded-full mx-auto mb-1" />

          {/* Video Screen Interior with Person Inside */}
          <div className="relative flex-1 bg-[#FAF5FF] rounded-xl border border-purple-100 flex flex-col items-center justify-end overflow-hidden pt-1">
            
            {/* Subtle Aura */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-purple-200/60 to-transparent" />

            {/* Avatar inside phone */}
            <svg width="80" height="95" viewBox="0 0 80 95" fill="none">
              {/* Head */}
              <circle cx="40" cy="22" r="11" fill="#FED7AA" stroke="#1E1B4B" strokeWidth="2" />
              {/* Eyes & Smile */}
              <circle cx="37" cy="21" r="1" fill="#1E1B4B" />
              <circle cx="43" cy="21" r="1" fill="#1E1B4B" />
              <path d="M37,25 Q40,28 43,25" stroke="#1E1B4B" strokeWidth="1.2" fill="none" strokeLinecap="round" />

              {/* Purple Sweater Body */}
              <path d="M20,40 C25,35 55,35 60,40 L68,95 L12,95 Z" fill="#A855F7" stroke="#1E1B4B" strokeWidth="2" />

              {/* Handshake Arm reaching out */}
              <path d="M22,46 C12,52 2,58 -6,62" stroke="#A855F7" strokeWidth="9" strokeLinecap="round" />
              <path d="M22,46 C12,52 2,58 -6,62" stroke="#1E1B4B" strokeWidth="2" fill="none" strokeLinecap="round" />

              {/* Other Waving Hand */}
              <g className="animate-gentle-wave">
                <path d="M58,45 C66,40 70,32 72,25" stroke="#A855F7" strokeWidth="8" strokeLinecap="round" />
                <path d="M58,45 C66,40 70,32 72,25" stroke="#1E1B4B" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="72" cy="23" r="3.5" fill="#FED7AA" stroke="#1E1B4B" strokeWidth="1.8" />
              </g>
            </svg>
          </div>

          {/* Bottom 3 Video Call Action Buttons */}
          <div className="flex items-center justify-center gap-2 pt-2 pointer-events-auto">
            <button 
              onClick={(e) => { e.stopPropagation(); setMicActive(!micActive); }}
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                micActive ? 'bg-[#9333EA] text-white' : 'bg-slate-200 text-slate-500'
              }`}
            >
              <Mic className="w-3 h-3" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setVideoActive(!videoActive); }}
              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                videoActive ? 'bg-[#9333EA] text-white' : 'bg-slate-200 text-slate-500'
              }`}
            >
              <Video className="w-3 h-3" />
            </button>
            <button 
              onClick={(e) => e.stopPropagation()}
              className="w-6 h-6 rounded-full bg-[#7E22CE] text-white flex items-center justify-center hover:bg-[#6B21A8]"
            >
              <MessageSquare className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
