import React from 'react';

export default function FinanceCard({ isFront = false, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`relative w-full max-w-[460px] sm:max-w-[500px] h-[320px] sm:h-[340px] rounded-[32px] p-6 sm:p-7 bg-[#FFF2EB] border border-[#FED7AA]/80 shadow-[0_20px_45px_rgba(234,88,12,0.08)] select-none overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 ${
        isFront ? 'ring-1 ring-orange-300/60' : 'hover:scale-[1.02]'
      }`}
    >
      {/* Background Organic Wave */}
      <svg 
        className="absolute -bottom-8 -left-8 w-[340px] h-[240px] pointer-events-none opacity-40"
        viewBox="0 0 300 240" 
        fill="none"
      >
        <path 
          d="M0,170 C90,160 130,90 240,120 C300,135 340,70 380,40 L380,240 L0,240 Z" 
          fill="#FED7AA" 
        />
      </svg>
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-orange-200/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Card Header Typography */}
      <div className="relative z-10">
        <h3 className="font-display text-[32px] sm:text-[38px] leading-[0.94] tracking-wide text-slate-900 uppercase">
          FINANCE
        </h3>
        <p className="text-slate-600 text-xs sm:text-[13px] font-medium leading-snug mt-2.5 max-w-[260px]">
          Manage real-time treasury, automated invoicing, and instant bank payouts.
        </p>
      </div>

      {/* Financial Vector Art: Cogwheel, Clock Dial, Credit Card */}
      <div className="relative z-10 w-full h-[180px] sm:h-[195px] flex items-end justify-end pointer-events-none pr-4 pb-2">
        <svg width="220" height="160" viewBox="0 0 220 160" fill="none" className="overflow-visible">
          {/* Black Cogwheel / Gear with Subtle Rotation */}
          <g transform="translate(140, 20)">
            <g style={{ transformOrigin: '33px 31px' }} className="animate-spin-slow">
              {/* Gear teeth */}
              <path 
                d="M30,5 L36,5 L38,12 L44,14 L50,9 L54,14 L50,20 L52,26 L59,28 L59,34 L52,36 L50,42 L55,47 L50,52 L44,48 L38,50 L36,57 L30,57 L28,50 L22,48 L17,53 L12,48 L16,42 L14,36 L7,34 L7,28 L14,26 L16,20 L11,15 L16,10 L22,14 L28,12 Z" 
                fill="#18181B" 
              />
              {/* Gear Center Hole */}
              <circle cx="33" cy="31" r="10" fill="#FFF2EB" />
            </g>
          </g>

          {/* Orange Clock Dial with Gentle Pulse */}
          <g transform="translate(160, 48)" className="animate-gentle-pulse">
            <circle cx="30" cy="30" r="28" fill="#FFEDD5" stroke="#FF5C28" strokeWidth="3" />
            <circle cx="30" cy="30" r="2.5" fill="#18181B" />
            {/* Clock hands */}
            <path d="M30,30 L30,14" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30,30 L42,30" stroke="#FF5C28" strokeWidth="2.5" strokeLinecap="round" />
            {/* Hour ticks */}
            <circle cx="30" cy="7" r="1.5" fill="#FF5C28" />
            <circle cx="53" cy="30" r="1.5" fill="#FF5C28" />
            <circle cx="30" cy="53" r="1.5" fill="#FF5C28" />
            <circle cx="7" cy="30" r="1.5" fill="#FF5C28" />
          </g>

          {/* Modern FinTech Card / Invoice Slip with Float Animation */}
          <g transform="translate(40, 60) rotate(-6)" className="animate-float-slow transition-transform">
            <rect x="0" y="0" width="115" height="70" rx="10" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.2" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.06))" />
            {/* Card chip */}
            <rect x="14" y="14" width="16" height="12" rx="2" fill="#FED7AA" stroke="#18181B" strokeWidth="1.2" />
            {/* Contactless wave */}
            <path d="M38,18 C40,20 40,23 38,25" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" fill="none" className="animate-pulse" />
            <path d="M42,15 C45,19 45,24 42,28" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" fill="none" className="animate-pulse" />
            {/* Card number lines */}
            <rect x="14" y="38" width="40" height="3" rx="1.5" fill="#CBD5E1" />
            <rect x="60" y="38" width="25" height="3" rx="1.5" fill="#CBD5E1" />
            {/* Brand circle */}
            <circle cx="92" cy="52" r="7" fill="#FF5C28" />
            <circle cx="100" cy="52" r="7" fill="#FDBA74" opacity="0.8" />
          </g>
        </svg>
      </div>

    </div>
  );
}
