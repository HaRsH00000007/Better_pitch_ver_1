import React, { useState } from 'react';
import { 
  Hash, 
  Pipette, 
  Layers, 
  ArrowDownRight, 
  Sparkles, 
  Plus, 
  ChevronDown, 
  ChevronsUpDown, 
  Bold, 
  Italic, 
  AlignLeft,
  Image as ImageIcon,
  FileText,
  Play,
  MousePointer,
  Circle,
  Type,
  Search,
  Eye,
  Check
} from 'lucide-react';

export default function HowToSection() {
  const [activeStep, setActiveStep] = useState(0); // 0 = Create, 1 = Collaborate

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
    <section 
      id="howto" 
      className="relative bg-gradient-to-b from-white via-[#FAF7FF] to-[#F5EFFF] text-[#111827] py-24 sm:py-32 px-4 sm:px-8 lg:px-14 overflow-hidden select-none"
    >
      {/* Soft Ambient Ethereal Glow in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-10 right-1/4 w-[600px] h-[500px] rounded-full opacity-35 blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(192, 132, 252, 0.08) 60%, transparent 80%)'
          }}
        />
        <div 
          className="absolute bottom-10 left-10 w-[500px] h-[400px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(94, 32, 217, 0.15) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          {/* Rail Tag: HOW TO */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#5E20D9] uppercase">
              HOW TO
            </span>
          </div>

          {/* Main Title: 2 lines */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#110D20] leading-[1.14] tracking-[-0.025em] max-w-2xl">
            From first draft to<br />closed deal, and beyond
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-xl mt-3 font-normal">
            The best presentations aren&apos;t made by just one person. In Pitch, your whole team works together to create sleek, effective slides.
          </p>

          {/* Optional Interactive Step Selector Pills */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={() => {
                setActiveStep(0);
                playTone(523.25);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeStep === 0
                  ? 'bg-[#5E20D9] text-white shadow-md shadow-purple-500/20'
                  : 'bg-white/80 text-neutral-600 hover:bg-purple-50 border border-slate-200/80'
              }`}
            >
              (01) Create
            </button>
            <button
              onClick={() => {
                setActiveStep(1);
                playTone(659.25);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                activeStep === 1
                  ? 'bg-[#5E20D9] text-white shadow-md shadow-purple-500/20'
                  : 'bg-white/80 text-neutral-600 hover:bg-purple-50 border border-slate-200/80'
              }`}
            >
              (02) Collaborate
            </button>
          </div>
        </div>

        {/* WORKFLOW CARDS CONTAINER: SHOWCASING CARD 1 AND PEEKING CARD 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ======================================================== */}
          {/* CARD 1: (01) CREATE (Prominent Light Saas Card) */}
          {/* ======================================================== */}
          <div 
            onClick={() => {
              if (activeStep !== 0) {
                setActiveStep(0);
                playTone(523.25);
              }
            }}
            className={`lg:col-span-7 xl:col-span-8 bg-white rounded-[32px] p-6 sm:p-8 md:p-9 border border-purple-100/80 shadow-[0_20px_50px_rgba(94,32,217,0.06)] transition-all duration-500 flex flex-col justify-between cursor-pointer ${
              activeStep === 0 ? 'ring-2 ring-[#5E20D9]/20' : 'opacity-85 hover:opacity-100'
            }`}
          >
            <div>
              {/* Card Header: (01) Create + 3 Icons */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-[#5E20D9]">
                    (01)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#5E20D9] tracking-tight">
                    Create
                  </h3>
                </div>

                {/* 3 Purple Accent Icons */}
                <div className="flex items-center gap-3 text-[#5E20D9]">
                  <button className="p-1 hover:bg-purple-50 rounded-lg transition-colors" title="Grid View">
                    <Hash className="w-5 h-5 stroke-[2.2]" />
                  </button>
                  <button className="p-1 hover:bg-purple-50 rounded-lg transition-colors" title="Color Tool">
                    <Pipette className="w-5 h-5 stroke-[2.2]" />
                  </button>
                  <button className="p-1 hover:bg-purple-50 rounded-lg transition-colors" title="Layers">
                    <Layers className="w-5 h-5 stroke-[2.2]" />
                  </button>
                </div>
              </div>

              {/* INNER CANVAS MOCKUP */}
              <div className="relative bg-gradient-to-br from-[#EFEBFF] via-[#F4EFFF] to-[#E9DEFF] rounded-2xl p-5 sm:p-8 overflow-hidden border border-purple-200/50 min-h-[340px] flex items-center justify-center">
                
                {/* Floating Left Thumbnails Sidebar Rail */}
                <div className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 flex-col gap-2.5 p-2 rounded-2xl bg-white/70 backdrop-blur-md border border-purple-200/40 shadow-sm z-10">
                  <div className="w-10 h-8 rounded-lg bg-purple-100/80 flex items-center justify-center text-purple-600">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div className="w-10 h-8 rounded-lg bg-purple-200/60 flex flex-col justify-center gap-1 px-1.5">
                    <div className="w-full h-1 bg-purple-400 rounded-full" />
                    <div className="w-3/4 h-1 bg-purple-300 rounded-full" />
                  </div>
                  <div className="w-10 h-8 rounded-lg bg-purple-100/80 flex items-center justify-center text-purple-600">
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                {/* Floating AI Prompt Bubble: "How can I support you?" */}
                <div className="absolute top-4 sm:top-6 left-3 sm:left-6 z-20 animate-float-slow">
                  <div className="bg-[#24123E] text-white px-4 py-3 rounded-2xl shadow-xl border border-purple-400/20 max-w-[170px]">
                    <p className="text-xs font-semibold leading-snug">
                      How can<br />I support you?
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#5E20D9] flex items-center justify-center text-white text-xs shadow-md border border-white/20 mt-1.5 ml-2 hover:scale-110 transition-transform cursor-pointer">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Slide Editor Canvas Container */}
                <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] ml-auto sm:mr-4 mt-6 sm:mt-4">
                  
                  {/* Floating Toolbar above the slide */}
                  <div className="flex justify-end mb-2.5">
                    <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-[11px] font-semibold text-slate-700">
                      <span className="flex items-center gap-1 hover:text-[#5E20D9] cursor-pointer">
                        Subheadline <ChevronDown className="w-3 h-3" />
                      </span>
                      <span className="w-px h-3 bg-slate-200" />
                      <span className="flex items-center gap-0.5 text-slate-600">
                        120 <ChevronsUpDown className="w-3 h-3 opacity-60" />
                      </span>
                      <span className="w-px h-3 bg-slate-200" />
                      <span className="font-serif font-bold text-slate-800 hover:text-[#5E20D9] cursor-pointer">A</span>
                      <Bold className="w-3 h-3 text-slate-800 hover:text-[#5E20D9] cursor-pointer" />
                      <AlignLeft className="w-3 h-3 text-slate-800 hover:text-[#5E20D9] cursor-pointer" />
                      <Italic className="w-3 h-3 text-slate-800 hover:text-[#5E20D9] cursor-pointer" />
                    </div>
                  </div>

                  {/* The Slide Mockup Card */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white group">
                    <div className="relative h-[190px] sm:h-[220px] w-full overflow-hidden">
                      {/* Photo Background */}
                      <img 
                        src="/images/creative_brief.jpg" 
                        alt="Creative Brief Models"
                        className="w-full h-full object-cover object-center filter brightness-[0.92] group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Gentle Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/30" />

                      {/* Top Left Company Name */}
                      <div className="absolute top-3 left-4 text-[10px] font-medium text-white/80 tracking-wide">
                        Company Name
                      </div>

                      {/* Main Slide Title: CREATIVE BRIEF '24 */}
                      <div className="absolute inset-0 flex flex-col justify-center px-4 pointer-events-none">
                        <h4 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-[0.88] drop-shadow-lg">
                          CREATIVE<br />
                          <span>
                            BRIEF
                            <span className="inline-flex items-center justify-center align-top ml-1.5 w-6 h-6 rounded-full bg-white text-black text-[9px] font-black tracking-normal shadow">
                              &apos;24
                            </span>
                          </span>
                        </h4>
                      </div>

                      {/* Floating Bottom Right Button: + Add brand kit */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            playTone(700);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5E20D9] hover:bg-[#4E14C8] text-white text-[11px] font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add brand kit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card Footer: Diagonal Arrow + Title + Description */}
            <div className="mt-6 pt-2">
              <div className="flex items-start gap-2.5">
                <ArrowDownRight className="w-5 h-5 text-[#5E20D9] flex-shrink-0 mt-0.5 stroke-[2.2]" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#5E20D9]">
                    Intuitive slide creation
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-lg mt-1 font-normal">
                    Start from a blank canvas or template — or use AI to generate on-brand slides in seconds. Keep full design control over every detail, so your slides always stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 2: (02) COLLABORATE (Dark Indigo / Violet Card) */}
          {/* ======================================================== */}
          <div 
            onClick={() => {
              if (activeStep !== 1) {
                setActiveStep(1);
                playTone(659.25);
              }
            }}
            className={`lg:col-span-5 xl:col-span-4 bg-[#23153C] text-white rounded-[32px] p-6 sm:p-8 md:p-9 border border-purple-900/60 shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer ${
              activeStep === 1 ? 'ring-2 ring-purple-400/40 shadow-purple-950/50' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <div>
              {/* Card Header: (02) Collaborate */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-purple-300/80">
                    (02)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#C0AAEC] tracking-tight">
                    Collaborate
                  </h3>
                </div>
              </div>

              {/* INNER CANVAS MOCKUP (DARK COLLABORATION CANVAS) */}
              <div className="relative bg-[#180B2D] rounded-2xl p-5 sm:p-7 overflow-hidden border border-purple-800/40 min-h-[340px] flex items-center justify-center">
                
                {/* Left Mini Tool Palette */}
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 p-2 rounded-xl bg-purple-950/70 border border-purple-800/30 text-purple-300/70">
                  <Plus className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <MousePointer className="w-3.5 h-3.5 text-purple-200" />
                  <Circle className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <Type className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <Search className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <Eye className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                </div>

                {/* Central Collaborative Text Selection */}
                <div className="relative z-10 text-center pl-6">
                  
                  {/* Dashed Selection Bounding Box around text */}
                  <div className="relative inline-block px-4 py-2 border-2 border-dashed border-purple-400/70 rounded-lg bg-purple-900/20">
                    
                    {/* Corner Resize Handles */}
                    <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-purple-400 rounded-sm" />
                    <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-purple-400 rounded-sm" />
                    <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-purple-400 rounded-sm" />
                    <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-purple-400 rounded-sm" />

                    {/* Team|work Text with Blinking Cursor */}
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center">
                      <span>Team</span>
                      <span className="w-0.5 h-8 bg-purple-400 animate-pulse mx-0.5" />
                      <span className="text-purple-300">work</span>
                    </div>

                    {/* Top Collaborator Badge */}
                    <div className="absolute -top-7 right-4">
                      <div className="w-6 h-6 rounded-full ring-2 ring-pink-500 overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" 
                          alt="Reviewer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Frank (Designer) Floating Live Cursor Tag */}
                  <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/80 border border-purple-500/40 shadow-xl backdrop-blur-md animate-float-slow">
                    <div className="w-5 h-5 rounded-full ring-1 ring-white/60 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" 
                        alt="Frank" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-white">
                      Frank
                    </span>
                    <span className="text-[10px] text-purple-300 font-medium">
                      Designer
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 ml-0.5" />
                  </div>

                </div>

              </div>
            </div>

            {/* Card Footer: Diagonal Arrow + Title + Description */}
            <div className="mt-6 pt-2">
              <div className="flex items-start gap-2.5">
                <ArrowDownRight className="w-5 h-5 text-purple-300/80 flex-shrink-0 mt-0.5 stroke-[2.2]" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#E2D6FF]">
                    Remove team bottlenecks
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-300/70 leading-relaxed mt-1 font-normal">
                    The best presentations are made together. But they don&apos;t have to take weeks. Live assignments, and comments mean your team moves faster and smarter.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
