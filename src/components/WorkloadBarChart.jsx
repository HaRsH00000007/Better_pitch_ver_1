import React, { useState } from 'react';

export default function WorkloadBarChart() {
  const [hoveredBar, setHoveredBar] = useState(null);

  // Exact data heights matching the reference image screenshot
  const data = [
    { month: 'Jan', value: 48 },
    { month: 'Feb', value: 36 },
    { month: 'Mar', value: 62 },
    { month: 'Apr', value: 20 },
    { month: 'May', value: 80 }, // Highest bar at May
    { month: 'Jun', value: 44 },
    { month: 'Jul', value: 24 },
    { month: 'Aug', value: 78 },
    { month: 'Sep', value: 50 },
    { month: 'Oct', value: 40 },
    { month: 'Nov', value: 48 },
    { month: 'Dec', value: 36 },
  ];

  const maxValue = 85;

  return (
    <div className="relative w-full pt-2 pb-1">
      {/* Y-Axis horizontal grid lines and labels */}
      <div className="relative h-44 w-full flex flex-col justify-between border-b border-white/10 pb-1">
        
        {/* Grid lines */}
        {[80, 40, 20, 0].map((val) => (
          <div key={val} className="w-full flex items-center">
            <span className="w-5 text-[10px] font-medium text-white/40 text-left select-none">{val}</span>
            <div className="flex-1 border-b border-dashed border-white/10 ml-1"></div>
          </div>
        ))}

        {/* 12 Monthly Pillar Bars Container */}
        <div className="absolute left-7 right-0 bottom-1 top-2 flex items-end justify-between px-1">
          {data.map((item, idx) => {
            const heightPercent = (item.value / maxValue) * 100;
            const isHovered = hoveredBar === idx;

            return (
              <div
                key={item.month}
                onMouseEnter={() => setHoveredBar(idx)}
                onMouseLeave={() => setHoveredBar(null)}
                className="relative flex flex-col items-center h-full justify-end group cursor-pointer w-full max-w-[20px] mx-0.5"
              >
                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute -top-7 bg-[#0F172A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xl border border-white/20 z-30 whitespace-nowrap animate-fade-in pointer-events-none">
                    {item.value} Tasks
                  </div>
                )}

                {/* The Glass Pillar Bar with Glowing Orange Cap */}
                <div
                  className={`w-full rounded-sm transition-all duration-300 relative flex flex-col justify-between overflow-hidden ${
                    isHovered ? 'scale-y-105 filter brightness-125' : ''
                  }`}
                  style={{ height: `${heightPercent}%` }}
                >
                  {/* Glowing Amber-Orange Cap Block on Top */}
                  <div className="w-full h-3 sm:h-3.5 bg-gradient-to-t from-[#FF5C28] to-[#FFA033] rounded-t-sm shadow-[0_2px_10px_rgba(255,92,40,0.6)] flex-shrink-0 z-10" />

                  {/* Frosted Translucent Glass Column Body */}
                  <div className="w-full flex-1 bg-gradient-to-b from-white/25 to-white/10 border-x border-b border-white/20 rounded-b-sm backdrop-blur-xs" />
                </div>

                {/* X Axis Month Label */}
                <span className={`text-[9.5px] font-medium transition-colors mt-2 ${
                  isHovered ? 'text-orange-400 font-bold' : 'text-white/40'
                }`}>
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
