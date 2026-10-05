import React, { useState } from 'react';

export default function TypographyCard() {
  const [hoveredDot, setHoveredDot] = useState(null);

  const dots = [
    { bg: 'bg-[#7DD3FC]', ring: 'hover:ring-[#7DD3FC]/40', label: 'Create' },
    { bg: 'bg-[#C4B5FD]', ring: 'hover:ring-[#C4B5FD]/40', label: 'Automate' },
    { bg: 'bg-[#F9A8D4]', ring: 'hover:ring-[#F9A8D4]/40', label: 'Scale' },
    { bg: 'bg-[#FDBA74]', ring: 'hover:ring-[#FDBA74]/40', label: 'Deploy' },
  ];

  return (
    <div className="group relative bg-white rounded-[28px] p-7 sm:p-8 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[280px] overflow-hidden">
      
      {/* Background subtle light ambient tint on hover */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-50/50 via-sky-50/30 to-transparent blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top 4 Colored Pastel Dots */}
      <div className="flex items-center gap-2 z-10">
        {dots.map((dot, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredDot(index)}
            onMouseLeave={() => setHoveredDot(null)}
            className={`w-3 h-3 rounded-full ${dot.bg} transition-all duration-300 transform group-hover:scale-110 cursor-pointer ${
              hoveredDot === index ? 'scale-125 ring-4 ' + dot.ring : ''
            }`}
            style={{
              transitionDelay: `${index * 40}ms`,
            }}
          />
        ))}
      </div>

      {/* Typography Statement */}
      <div className="my-auto pt-6 z-10">
        <h3 className="text-[23px] sm:text-[25px] lg:text-[26px] font-bold leading-[1.32] tracking-tight">
          <span className="text-[#0284C7] transition-colors duration-300 group-hover:text-[#0369A1]">
            Build, create, automate, and{' '}
          </span>
          <span className="text-[#FF5C28] transition-colors duration-300 group-hover:text-[#EA580C]">
            scale faster
          </span>
          <br className="hidden sm:inline" />{' '}
          <span className="text-[#0284C7] transition-colors duration-300 group-hover:text-[#0369A1]">
            with a unified AI workspace designed for{' '}
          </span>
          <br className="hidden sm:inline" />
          <span className="text-[#FF5C28] transition-colors duration-300 group-hover:text-[#EA580C]">
            modern teams.
          </span>
        </h3>
      </div>

      {/* Bottom Subtle Indicator Bar */}
      <div className="w-12 h-1 bg-gradient-to-r from-[#0284C7] to-[#FF5C28] rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500 ease-out" />
    </div>
  );
}
