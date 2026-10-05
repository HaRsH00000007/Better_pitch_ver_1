import React from 'react';

export default function GaugeChart({ percentage = 72 }) {
  // Semi-circle dimensions
  const cx = 100;
  const cy = 95;
  const radius = 70;
  const strokeWidth = 10;
  const circumference = Math.PI * radius; // Half-circle arc length (approx 219.9)
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Generate precision tachometer radial tick lines
  const totalTicks = 36;
  const ticks = [];
  for (let i = 0; i <= totalTicks; i++) {
    const fraction = i / totalTicks;
    const angleDeg = 180 - fraction * 180;
    const angleRad = (angleDeg * Math.PI) / 180;

    const isMajor = i % 9 === 0; // 0%, 25%, 50%, 75%, 100%
    const rInner = 80;
    const rOuter = isMajor ? 88 : 84;

    const x1 = cx + rInner * Math.cos(angleRad);
    const y1 = cy - rInner * Math.sin(angleRad);
    const x2 = cx + rOuter * Math.cos(angleRad);
    const y2 = cy - rOuter * Math.sin(angleRad);

    const isFilled = fraction * 100 <= percentage;

    ticks.push({
      id: i,
      x1,
      y1,
      x2,
      y2,
      isMajor,
      color: isFilled 
        ? (fraction < 0.35 ? '#FF4500' : fraction < 0.65 ? '#FF9A00' : '#FFD700') 
        : 'rgba(255, 255, 255, 0.15)',
    });
  }

  return (
    <div className="relative flex flex-col items-center justify-center my-1">
      <svg className="w-56 h-32 overflow-visible" viewBox="0 0 200 115">
        <defs>
          <linearGradient id="heroGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF3800" />
            <stop offset="45%" stopColor="#FF7A00" />
            <stop offset="85%" stopColor="#FFBA00" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          <filter id="gaugeGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Tachometer Tick Teeth */}
        {ticks.map((t) => (
          <line
            key={t.id}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke={t.color}
            strokeWidth={t.isMajor ? 1.75 : 1}
            strokeLinecap="round"
          />
        ))}

        {/* Numeric Legend Labels */}
        <text x="12" y="102" fill="rgba(255,255,255,0.4)" fontSize="8.5" textAnchor="middle" fontFamily="sans-serif">0</text>
        <text x="46" y="32" fill="rgba(255,255,255,0.4)" fontSize="8.5" textAnchor="middle" fontFamily="sans-serif">25</text>
        <text x="100" y="8" fill="rgba(255,255,255,0.4)" fontSize="8.5" textAnchor="middle" fontFamily="sans-serif">50</text>
        <text x="188" y="102" fill="rgba(255,255,255,0.4)" fontSize="8.5" textAnchor="middle" fontFamily="sans-serif">100</text>

        {/* Background Track Arc */}
        <path
          d="M 30,95 A 70,70 0 0,1 170,95"
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Active Colorful Progress Arc */}
        <path
          d="M 30,95 A 70,70 0 0,1 170,95"
          fill="none"
          stroke="url(#heroGaugeGrad)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          filter="url(#gaugeGlowFilter)"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Center Value & Completed Subtext */}
      <div className="absolute bottom-2 text-center flex flex-col items-center">
        <span className="text-3xl sm:text-[34px] font-extrabold text-white tracking-tight leading-none drop-shadow-md">
          {percentage}%
        </span>
        <span className="text-[10px] text-white/40 font-medium tracking-wide mt-1">
          Completed
        </span>
      </div>
    </div>
  );
}
