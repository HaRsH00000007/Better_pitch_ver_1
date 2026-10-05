import React, { useState } from 'react';

export default function PayoffSection() {
  const [activeStat, setActiveStat] = useState(null);

  // Play pleasant lightweight Web Audio synth tone on interaction
  const playChime = (freq = 440) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // Audio context might be restricted before first gesture
    }
  };

  const stats = [
    {
      id: 'stat-1',
      metric: '4 M+',
      description: 'Professional teams choose Pitch to build, deliver, and win.',
      soundFreq: 523.25, // C5
    },
    {
      id: 'stat-2',
      metric: '150+',
      description: 'Templates designed by experts to get you started.',
      soundFreq: 659.25, // E5
    },
    {
      id: 'stat-3',
      metric: '5 H+',
      description: 'On average, users save over 5 hours every week.',
      soundFreq: 783.99, // G5
    },
  ];

  return (
    <section
      id="payoff"
      className="relative bg-white text-[#111827] py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
    >
      {/* Soft Ambient Violet Ethereal Glow in Corners */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right soft lavender glow */}
        <div
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full opacity-40 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(110, 44, 243, 0.18) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 75%)',
          }}
        />

        {/* Bottom-right soft purple aura */}
        <div
          className="absolute -bottom-24 right-[10%] w-[450px] h-[450px] rounded-full opacity-30 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(94, 32, 217, 0.15) 0%, rgba(167, 139, 250, 0.06) 60%, transparent 80%)',
          }}
        />

        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #5E20D9 1px, transparent 1px), linear-gradient(to bottom, #5E20D9 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between min-h-[520px]">
        {/* Main Content Layout with Left Section Rail & Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column / Rail: THE PAYOFF label */}
          <div className="lg:col-span-3 xl:col-span-2 pt-2">
            <div className="inline-flex items-center gap-2 group cursor-default">
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#5E20D9] uppercase transition-all duration-300 group-hover:tracking-[0.28em]">
                THE PAYOFF
              </span>
            </div>
          </div>

          {/* Right / Main Column: Big Headline & Stats Grid */}
          <div className="lg:col-span-9 xl:col-span-10">
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#5E20D9] leading-[1.18] tracking-[-0.025em] max-w-4xl">
              Presentations are more than an asset. With Pitch, they&apos;re your new competitive advantage. Build trust, get buy-in, and win more deals.
            </h2>

            {/* 3 Metric Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-16 sm:mt-20 lg:mt-24 pt-2">
              {stats.map((stat, idx) => {
                const isActive = activeStat === stat.id;
                return (
                  <div
                    key={stat.id}
                    onMouseEnter={() => {
                      setActiveStat(stat.id);
                      playChime(stat.soundFreq);
                    }}
                    onMouseLeave={() => setActiveStat(null)}
                    onClick={() => playChime(stat.soundFreq)}
                    className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Big Bold Stat Number */}
                    <div className="relative inline-block mb-3.5">
                      <span className="text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#5E20D9] leading-none transition-transform duration-300 group-hover:scale-105 inline-block">
                        {stat.metric}
                      </span>
                      {/* Subtle accent dot on hover */}
                      <span
                        className={`absolute -top-1 -right-3 w-2 h-2 rounded-full bg-[#5E20D9] transition-opacity duration-300 ${
                          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                      />
                    </div>

                    {/* Stat Description */}
                    <p className="text-xs sm:text-[13px] sm:text-sm font-medium text-neutral-500 leading-relaxed max-w-[220px] transition-colors duration-200 group-hover:text-neutral-700">
                      {stat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section Indicator / HOW TO Rail Tag */}
        <div className="mt-16 sm:mt-24 pt-4 flex items-center">
          <a
            href="#howto"
            onClick={(e) => {
              playChime(440);
            }}
            className="group inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#5E20D9] uppercase transition-all duration-300 hover:text-[#4B14B8] hover:tracking-[0.28em]"
          >
            <span>HOW TO</span>
            <span className="text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
