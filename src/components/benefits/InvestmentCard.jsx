import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function InvestmentCard({ isFront = false, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`relative w-full max-w-[460px] sm:max-w-[500px] h-[320px] sm:h-[340px] rounded-[32px] p-6 sm:p-7 bg-[#EDF6FF] border border-[#BFDBFE]/80 shadow-[0_20px_45px_rgba(37,99,235,0.08)] select-none overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 ${
        isFront ? 'ring-1 ring-blue-300/60' : 'hover:scale-[1.02]'
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
          fill="#BFDBFE" 
        />
      </svg>
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-blue-200/40 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Card Header Typography */}
      <div className="relative z-10">
        <h3 className="font-display text-[32px] sm:text-[38px] leading-[0.94] tracking-wide text-slate-900 uppercase">
          INVESTMENT
        </h3>
        <p className="text-slate-600 text-xs sm:text-[13px] font-medium leading-snug mt-2.5 max-w-[260px]">
          Stocks, bonds, and high-yield funds powered by algorithmic intelligence.
        </p>
      </div>

      {/* Financial Investment Vector Art */}
      <div className="relative z-10 w-full h-[180px] sm:h-[195px] flex items-end justify-end pointer-events-none pr-4 pb-2">
        <svg width="220" height="160" viewBox="0 0 220 160" fill="none">
          {/* Upward Growth Curve */}
          <path 
            d="M20,130 C60,125 90,80 140,70 C170,64 185,35 205,25" 
            stroke="#0284C7" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeDasharray="4 2"
          />
          {/* Glowing Area under Curve */}
          <path 
            d="M20,130 C60,125 90,80 140,70 C170,64 185,35 205,25 L205,150 L20,150 Z" 
            fill="url(#blueWash)" 
            opacity="0.3"
          />
          <defs>
            <linearGradient id="blueWash" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Flying Banknotes / Cash Layer 1 */}
          <g transform="translate(110, 45) rotate(-12)">
            <rect x="0" y="0" width="70" height="42" rx="6" fill="#DBEAFE" stroke="#1E1B4B" strokeWidth="2.2" />
            <circle cx="35" cy="21" r="10" fill="#93C5FD" stroke="#1E1B4B" strokeWidth="1.8" />
            <text x="35" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E1B4B" fontFamily="sans-serif">$</text>
            <circle cx="8" cy="8" r="2.5" fill="#1E1B4B" />
            <circle cx="62" cy="8" r="2.5" fill="#1E1B4B" />
            <circle cx="8" cy="34" r="2.5" fill="#1E1B4B" />
            <circle cx="62" cy="34" r="2.5" fill="#1E1B4B" />
          </g>

          {/* Flying Banknotes / Cash Layer 2 (Angled) */}
          <g transform="translate(135, 20) rotate(15)">
            <rect x="0" y="0" width="65" height="38" rx="5" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="2.2" />
            <circle cx="32" cy="19" r="9" fill="#60A5FA" stroke="#1E1B4B" strokeWidth="1.6" />
            <text x="32" y="23" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">$</text>
          </g>

          {/* Growth Pill Badge */}
          <g transform="translate(30, 80)">
            <rect x="0" y="0" width="85" height="32" rx="16" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.06))" />
            <circle cx="16" cy="16" r="10" fill="#0284C7" />
            <path d="M13,18 L16,13 L19,18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="52" y="20" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1E1B4B" fontFamily="sans-serif">+34.8%</text>
          </g>
        </svg>
      </div>

    </div>
  );
}
