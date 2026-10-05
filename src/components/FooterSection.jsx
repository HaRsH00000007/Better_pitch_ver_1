import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Sparkles, 
  Twitter, 
  Github, 
  Linkedin, 
  Disc as Discord, 
  ArrowUpRight 
} from 'lucide-react';

export default function FooterSection() {
  const [gaugeProgress, setGaugeProgress] = useState(72);

  // Play pleasant lightweight Web Audio synth tone on interaction
  const playTone = (freq = 520) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // Audio context might be restricted before first gesture
    }
  };

  return (
    <footer id="footer" className="relative bg-[#070A10] text-white overflow-hidden select-none">
      
      {/* ======================================================== */}
      {/* 1. HEROIC FIERY CALL TO ACTION BANNER */}
      {/* ======================================================== */}
      <div className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Atmospheric Fiery Lighting & Prismatic Rainbow Flare */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left Warm Fiery Beam */}
          <div 
            className="absolute -top-10 -left-20 w-[650px] h-[650px] rounded-full opacity-45 blur-[130px]"
            style={{
              background: 'radial-gradient(circle at 30% 40%, rgba(255, 92, 40, 0.75) 0%, rgba(255, 140, 30, 0.3) 45%, transparent 75%)'
            }}
          />

          {/* Center Fiery Core Bokeh */}
          <div 
            className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-35 blur-[110px]"
            style={{
              background: 'radial-gradient(circle, rgba(255, 80, 20, 0.4) 0%, rgba(255, 140, 40, 0.15) 50%, transparent 75%)'
            }}
          />

          {/* Right Prismatic Lens Flare Streak */}
          <div 
            className="absolute top-0 right-[-10%] w-[600px] h-[600px] -rotate-12 opacity-40 blur-[100px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 110, 40, 0.5) 0%, rgba(236, 72, 153, 0.35) 45%, rgba(59, 130, 246, 0.3) 75%, transparent 100%)'
            }}
          />

          {/* Vignette mask */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070A10]/40 to-[#070A10]" />
        </div>

        {/* FLOATING 3D DASHBOARD WIDGETS */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* ======================================================== */}
          {/* LEFT WIDGET: Daily Users 4.80k Spline Chart */}
          {/* ======================================================== */}
          <div className="hidden lg:block absolute left-2 xl:left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            <div 
              style={{ transform: 'rotate(-13deg)' }}
              className="w-[230px] rounded-2xl bg-[#141A24]/85 backdrop-blur-xl border border-white/15 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-105 hover:border-orange-500/40 animate-float-slow cursor-pointer"
              onClick={() => playTone(659.25)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-white/90 tracking-tight">
                  4.80k
                </span>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-semibold text-white/80">
                  <span>Daily Users</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </div>
              </div>

              {/* Spline Wave Lines Chart */}
              <div className="relative h-20 w-full mt-2">
                <svg viewBox="0 0 200 80" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="waveOrangeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FF5C28" stopOpacity="1" />
                      <stop offset="100%" stopColor="#FFA07A" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Faint Grid Lines */}
                  <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Secondary Grey Wave */}
                  <path 
                    d="M 0 60 Q 40 30, 80 55 T 160 40 T 200 50" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.25)" 
                    strokeWidth="1.75" 
                  />

                  {/* Primary Orange Glowing Wave */}
                  <path 
                    d="M 0 35 Q 35 15, 65 45 T 130 25 T 200 40" 
                    fill="none" 
                    stroke="url(#waveOrangeGrad)" 
                    strokeWidth="2.5" 
                    className="drop-shadow-[0_4px_8px_rgba(255,92,40,0.5)]"
                  />

                  {/* Highlight Pin at (30, 22) */}
                  <circle cx="28" cy="23" r="5" fill="#070A10" stroke="#FF5C28" strokeWidth="2.5" />
                  <circle cx="28" cy="23" r="2" fill="#FFFFFF" />
                </svg>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* RIGHT WIDGET: Overall Progress 72% Gauge Speedometer */}
          {/* ======================================================== */}
          <div className="hidden lg:block absolute right-2 xl:right-6 bottom-4 z-20 pointer-events-auto">
            <div 
              style={{ transform: 'rotate(13deg)' }}
              className="w-[240px] rounded-2xl bg-[#141A24]/85 backdrop-blur-xl border border-white/15 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-105 hover:border-orange-500/40 animate-float-reverse cursor-pointer"
              onClick={() => {
                setGaugeProgress((prev) => (prev === 72 ? 88 : 72));
                playTone(783.99);
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-white/80">
                  Overall Progress
                </span>
                <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/10 text-[9px] font-medium text-white/70">
                  <span>All</span>
                  <ChevronDown className="w-2.5 h-2.5 opacity-60" />
                </div>
              </div>

              {/* Speedometer Gauge Meter */}
              <div className="relative h-24 w-full flex items-center justify-center">
                <svg viewBox="0 0 160 100" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="gaugeGrad" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FF3300" />
                      <stop offset="60%" stopColor="#FF5C28" />
                      <stop offset="100%" stopColor="#FFA726" />
                    </linearGradient>
                  </defs>

                  {/* Background Track Arc */}
                  <path 
                    d="M 20 85 A 60 60 0 0 1 140 85" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.12)" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                  />

                  {/* Filled Gauge Progress Arc (72%) */}
                  <path 
                    d="M 20 85 A 60 60 0 0 1 140 85" 
                    fill="none" 
                    stroke="url(#gaugeGrad)" 
                    strokeWidth="8" 
                    strokeLinecap="round" 
                    strokeDasharray="188.4" 
                    strokeDashoffset={188.4 * (1 - gaugeProgress / 100)} 
                    className="transition-all duration-700 drop-shadow-[0_0_10px_rgba(255,92,40,0.6)]"
                  />

                  {/* Scale Markings */}
                  <text x="14" y="98" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="bold">0</text>
                  <text x="32" y="55" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="bold">25</text>
                  <text x="76" y="22" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="bold">50</text>
                  <text x="122" y="55" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="bold">75</text>
                  <text x="135" y="98" fill="rgba(255,255,255,0.4)" fontSize="7" fontWeight="bold">100</text>
                </svg>

                {/* Gauge Center Text */}
                <div className="absolute bottom-2 inset-x-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-black text-white tracking-tight">
                    {gaugeProgress}%
                  </span>
                  <span className="text-[9px] font-medium text-white/50 tracking-wide">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CENTER HEROIC CTA CONTENT */}
          {/* ======================================================== */}
          <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
            
            {/* Top Badge: New • Call to Actions */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-lg">
              <span className="px-2 py-0.5 rounded-full bg-white text-[#070A10] text-[10px] font-black uppercase tracking-wider">
                New
              </span>
              <span className="text-xs font-semibold text-white/90">
                • Call to Actions
              </span>
            </div>

            {/* Giant Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Get Started With Smarter<br />
              Task Management
            </h2>

            {/* Subtitle */}
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mt-4 mb-8 sm:mb-10 font-normal">
              AI-powered productivity tools help teams eliminate repetitive tasks, automate workflows, and focus on high-impact work.
            </p>

            {/* TWO CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              
              {/* Primary: Get Started > */}
              <button 
                onClick={() => playTone(600)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#FF5C28] hover:bg-[#FF7243] text-white font-bold text-sm shadow-[0_12px_28px_rgba(255,92,40,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>Get Started</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#FF5C28] flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.8]" />
                </span>
              </button>

              {/* Secondary: Get a Quote > */}
              <button 
                onClick={() => playTone(700)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#070A10] font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>Get a Quote</span>
                <span className="w-6 h-6 rounded-full bg-slate-100 text-[#070A10] flex items-center justify-center text-xs font-bold transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.8]" />
                </span>
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* 2. BOTTOM NAVIGATION & FOOTER CREDITS */}
      {/* ======================================================== */}
      <div className="relative z-10 border-t border-white/10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info (2 Columns on MD) */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4 cursor-pointer" onClick={() => playTone(523.25)}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF5C28] to-[#FFA726] flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Task<span className="text-[#FF5C28]">bet</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Reimagining human productivity with high-performance voice generation, predictive workflows, and intelligent team orchestration.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#twitter" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#github" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#discord" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Discord className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column: Product */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-slate-400">
              <li><a href="#overview" className="hover:text-white transition-colors">Overview</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#voice" className="hover:text-white transition-colors">Voice AI</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Column: Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-slate-400">
              <li><a href="#startups" className="hover:text-white transition-colors">For Startups</a></li>
              <li><a href="#creatives" className="hover:text-white transition-colors">Creative Teams</a></li>
              <li><a href="#operations" className="hover:text-white transition-colors">Operations</a></li>
              <li><a href="#enterprise" className="hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Column: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-slate-400">
              <li><a href="#team" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Taskbet Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#cookies" className="hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
