import React from 'react';

export default function FloatingCursors() {
  return (
    <>
      {/* Michel Cursor (Left Side) */}
      <div className="absolute top-[20%] left-[8%] md:left-[16%] z-20 pointer-events-none animate-float-slow hidden sm:flex items-start space-x-1.5">
        {/* Custom White Cursor Arrow with Acoustic Voice Waves */}
        <div className="relative">
          <svg className="w-5 h-5 text-white drop-shadow-lg overflow-visible" viewBox="0 0 24 24" fill="none">
            {/* Mouse Pointer Arrow */}
            <path d="M3 2L10 19L13 12L20 9L3 2Z" fill="white" stroke="#0F172A" strokeWidth="0.75" strokeLinejoin="round" />
            {/* Radiating Acoustic Waves */}
            <path d="M14 4C15.5 5 16.5 6.5 17 8" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M17 2C19 3.5 20 5.5 20.5 8" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M20 0.5C22.5 2.5 23.5 5 24 8" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </div>
        {/* Michel White Tag */}
        <div className="bg-white text-slate-900 font-bold text-xs sm:text-[13px] px-4 py-1 rounded-full shadow-2xl tracking-tight border border-slate-100 -mt-0.5">
          Michel
        </div>
      </div>

      {/* Alexa Cursor (Right Side) */}
      <div className="absolute top-[32%] right-[8%] md:right-[15%] z-20 pointer-events-none animate-float-reverse hidden sm:flex items-start space-x-1.5">
        {/* Custom White Cursor Arrow with Acoustic Voice Waves */}
        <div className="relative">
          <svg className="w-5 h-5 text-white drop-shadow-lg overflow-visible" viewBox="0 0 24 24" fill="none">
            {/* Mouse Pointer Arrow */}
            <path d="M3 2L10 19L13 12L20 9L3 2Z" fill="white" stroke="#0F172A" strokeWidth="0.75" strokeLinejoin="round" />
            {/* Radiating Acoustic Waves */}
            <path d="M14 4C15.5 5 16.5 6.5 17 8" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M17 2C19 3.5 20 5.5 20.5 8" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M20 0.5C22.5 2.5 23.5 5 24 8" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </div>
        {/* Alexa Dark Tag */}
        <div className="bg-[#232936] text-white font-medium text-xs sm:text-[13px] px-4 py-1 rounded-full shadow-2xl border border-white/15 -mt-0.5">
          Alexa
        </div>
      </div>
    </>
  );
}
