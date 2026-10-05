import React, { useState } from 'react';
import { SlidersHorizontal, Play, Pause, CheckCircle2, Trash2, Wand2, Sparkles } from 'lucide-react';

export default function ConvenienceSection() {
  const [activeVoice, setActiveVoice] = useState('bryan');
  const [isPlaying, setIsPlaying] = useState(false);
  const [uploadState, setUploadState] = useState('idle');
  const [isEnhanced, setIsEnhanced] = useState(false);

  // Synthetic tone generator for audio previews
  const playTone = (freq = 440) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.07, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.38);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.38);
    } catch (e) {
      // Audio fallback
    }
  };

  const handleVoiceSelect = (voiceId, freq) => {
    setActiveVoice(voiceId);
    setIsPlaying(true);
    playTone(freq);
    setTimeout(() => setIsPlaying(false), 900);
  };

  const handleUploadSim = () => {
    setUploadState('uploading');
    setTimeout(() => {
      setUploadState('uploaded');
      playTone(659);
      setTimeout(() => setUploadState('idle'), 3500);
    }, 500);
  };

  const handleEnhanceClick = () => {
    setIsEnhanced(true);
    playTone(784);
    setTimeout(() => setIsEnhanced(false), 1800);
  };

  const voiceActors = [
    { id: 'bryan', name: 'Bryan', gender: 'male', flag: '🇬🇧', freq: 440 },
    { id: 'setiawan', name: 'Setiawan', gender: 'male', flag: '🇩🇪', freq: 392 },
    { id: 'leksono', name: 'Leksono', gender: 'male', flag: '🇮🇹', freq: 523 },
  ];

  return (
    <section id="convenience" className="relative bg-white text-slate-900 overflow-hidden select-none border-t border-slate-100">
      
      {/* 1. TOP MARQUEE BANNER: "AI SOUND WITHOUT LIMITS" */}
      <div className="relative w-full bg-[#FAFBFD] border-b border-slate-200/80 py-5 sm:py-6 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-16">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 sm:gap-16 shrink-0">
              <span className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#071E40] tracking-tight leading-none uppercase">
                AI SOUND WITHOUT{' '}
                <span className="relative inline-block">
                  LIMITS
                  {/* Lime-green strikethrough slice */}
                  <span className="absolute top-[48%] -left-1 -right-1 h-[4px] sm:h-[5px] bg-[#84CC16] rounded-full pointer-events-none" />
                </span>
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* 2. MAIN CONVENIENCE STAGE CONTAINER */}
      <div className="relative py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[780px] lg:min-h-[850px]">
        
        {/* Soft Ambient Radial Wash */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full opacity-20 blur-[130px]"
            style={{
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, rgba(132, 204, 22, 0.15) 50%, transparent 80%)'
            }}
          />
        </div>

        {/* ACOUSTIC SOUNDWAVE PILLARS (Behind Central Content) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-3 sm:gap-4 pointer-events-none z-0">
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#F1F5F9] animate-eq-pillar" style={{ animationDelay: '0.4s' }} />
          <div className="w-8 sm:w-11 h-44 rounded-full bg-[#F1F5F9] animate-eq-pillar" style={{ animationDelay: '0.1s' }} />
          <div className="w-8 sm:w-11 h-64 rounded-full bg-[#F1F5F9] animate-eq-pillar" style={{ animationDelay: '0.3s' }} />
          <div className="w-8 sm:w-11 h-72 rounded-full bg-[#F1F5F9] animate-eq-pillar" style={{ animationDelay: '0.5s' }} />
          <div className="w-8 sm:w-11 h-56 rounded-full bg-[#F1F5F9] animate-eq-pillar" style={{ animationDelay: '0.2s' }} />
          <div className="w-8 sm:w-11 h-36 rounded-full bg-[#F1F5F9] animate-eq-pillar" style={{ animationDelay: '0.6s' }} />
          <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#F1F5F9] animate-eq-pillar" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* 3. CENTRAL HEADING & SUBTITLE */}
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4 my-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#071E40] tracking-tight leading-[1.08] mb-6">
            Convenience <br />
            for{' '}
            <span className="relative inline-block pb-3">
              you.
              {/* Dual Accent Underline */}
              <span className="absolute bottom-1.5 inset-x-0 h-[3px] bg-[#0284C7] rounded-full" />
              <span className="absolute bottom-0 inset-x-0 h-[3px] bg-[#84CC16] rounded-full" />
            </span>
          </h2>

          <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Our AI Voice Editor revolutionizes the way you edit and enhance audio. Powered by state-of-the-art artificial intelligence, our tool offers seamless, intuitive, and efficient solutions for all your voice editing needs.
          </p>
        </div>

        {/* 4. UPPER FLOATING TOOL CARDS */}

        {/* CARD 1 (Top-Left): Drag & Drop Upload Card */}
        <div 
          onClick={handleUploadSim}
          className="absolute top-[6%] sm:top-[8%] left-[3%] sm:left-[6%] lg:left-[8%] z-20 animate-squircle-1 cursor-pointer group"
          title="Click to simulate file upload"
        >
          <div className="w-[230px] sm:w-[260px] rounded-2xl bg-white border border-slate-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.06)] p-3 sm:p-4 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-[0_22px_45px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between mb-3 px-0.5">
              <div className="flex items-center gap-1.5">
                <span className="bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                  New Upload
                </span>
                <span className="text-slate-400 text-[10px] font-medium px-2 py-1">
                  Recent
                </span>
              </div>
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className={`border-2 border-dashed rounded-xl p-4 sm:p-5 text-center transition-all ${
              uploadState === 'uploaded' 
                ? 'border-emerald-400 bg-emerald-50/60' 
                : 'border-slate-200 group-hover:border-blue-400 bg-slate-50/50'
            }`}>
              {uploadState === 'uploaded' ? (
                <div className="flex flex-col items-center py-0.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mb-1" />
                  <span className="text-[10px] font-bold text-emerald-700">Audio_Master_v2.wav</span>
                  <span className="text-[8px] text-emerald-500">Ready to enhance</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-snug">
                    Click to browse or <br />
                    drag and drop your files
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CARD 2 (Top-Right): Voice Actor Selector Card */}
        <div className="absolute top-[6%] sm:top-[8%] right-[3%] sm:right-[6%] lg:right-[8%] z-20 animate-squircle-2">
          <div className="w-[240px] sm:w-[260px] rounded-3xl bg-[#0B111E] p-3 sm:p-3.5 shadow-[0_20px_50px_rgba(11,17,30,0.3)] border border-slate-800 flex flex-col gap-2">
            {voiceActors.map((actor) => {
              const isSelected = activeVoice === actor.id;

              return (
                <div
                  key={actor.id}
                  onClick={() => handleVoiceSelect(actor.id, actor.freq)}
                  className={`p-2.5 rounded-xl flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-md scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 text-white/85'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg leading-none">{actor.flag}</span>
                    <div className="text-left">
                      <span className="text-xs font-bold leading-tight block">
                        {actor.name}{' '}
                        <span className={`text-[10px] font-normal ${isSelected ? 'text-slate-400' : 'text-white/50'}`}>
                          ({actor.gender})
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-slate-900 text-white' : 'bg-white/10 text-white/80'
                  }`}>
                    {isSelected && isPlaying ? (
                      <Pause className="w-3 h-3 fill-current" />
                    ) : (
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. LOWER CONTINUATION BLOCKS (From Second Screenshot) */}

        {/* BOTTOM-LEFT: Podcaster Studio + Transcript + Waveform + Curved Arrow */}
        <div className="absolute bottom-[4%] sm:bottom-[6%] left-[3%] sm:left-[6%] lg:left-[8%] z-20 flex flex-col items-start">
          
          {/* Main Studio Recording Image Card */}
          <div className="relative w-[260px] sm:w-[310px] h-[170px] sm:h-[195px] rounded-[26px] overflow-hidden shadow-xl bg-slate-900 border border-slate-100 group">
            <img 
              src="/images/studio_podcaster.jpg" 
              alt="Studio Podcaster Recording" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Transcript Pill (Overlapping bottom of photo) */}
          <div className="relative -mt-10 sm:-mt-12 ml-4 sm:ml-6 w-[250px] sm:w-[290px] rounded-2xl bg-white border border-slate-200/90 shadow-[0_16px_36px_rgba(0,0,0,0.12)] p-3 sm:p-3.5 z-30 transition-transform hover:-translate-y-1">
            {/* Top row: timestamps + trash */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mb-1">
              <div className="flex items-center gap-4">
                <span>00:00:00</span>
                <span>00:12:00</span>
                <span className="text-slate-500 font-semibold">(12s)</span>
              </div>
              <button className="text-slate-300 hover:text-rose-500 transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom row: transcript text */}
            <p className="text-[12px] sm:text-[13px] font-bold text-[#071E40] tracking-tight truncate">
              Hello guys kembali lagi di channel ini te...
            </p>
          </div>

          {/* Lime Green Audio Waveform Bar + Curved Arrow */}
          <div className="relative mt-2 ml-4 sm:ml-6 flex items-center">
            {/* Lime Waveform Bar */}
            <div className="w-[230px] sm:w-[260px] h-9 rounded-xl bg-[#8DA026] flex items-center justify-between px-3.5 shadow-md">
              {[4, 8, 12, 16, 10, 18, 14, 20, 16, 12, 18, 22, 14, 8, 16, 20, 18, 12, 16, 22, 18, 14, 10, 14, 18, 12, 8, 6].map((h, i) => (
                <span
                  key={i}
                  className="w-[2px] bg-white rounded-full transition-all duration-300"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>

            {/* Curved Navy Indicator Arrow */}
            <div className="absolute -right-8 sm:-right-9 top-0 pointer-events-none">
              <svg width="34" height="42" viewBox="0 0 34 42" fill="none">
                <path
                  d="M26,2 C34,14 30,32 10,36"
                  stroke="#071E40"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M16,31 L8,36 L14,41"
                  stroke="#071E40"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

        </div>

        {/* BOTTOM-RIGHT: Audio Track + Floating "Enhance Audio" Card */}
        <div className="absolute bottom-[6%] sm:bottom-[8%] right-[3%] sm:right-[6%] lg:right-[8%] z-20 flex items-center justify-center">
          
          {/* Horizontal Soundwave Track Capsule */}
          <div className="relative w-[280px] sm:w-[330px] h-16 rounded-2xl bg-white border border-slate-200/90 shadow-[0_12px_30px_rgba(0,0,0,0.06)] px-5 flex items-center justify-between">
            
            {/* Left Soundwave Bars (Lime Green) */}
            <div className="flex items-center gap-1">
              {[8, 14, 20, 16, 22, 12, 18].map((h, idx) => (
                <span
                  key={idx}
                  className={`w-[2.5px] bg-[#8DA026] rounded-full transition-all duration-300 ${
                    isEnhanced ? 'animate-eq-bar' : ''
                  }`}
                  style={{ height: `${h}px`, animationDelay: `${idx * 80}ms` }}
                />
              ))}
            </div>

            {/* Right Soundwave Bars (Lime Green) */}
            <div className="flex items-center gap-1">
              {[18, 12, 22, 16, 20, 14, 8].map((h, idx) => (
                <span
                  key={idx}
                  className={`w-[2.5px] bg-[#8DA026] rounded-full transition-all duration-300 ${
                    isEnhanced ? 'animate-eq-bar' : ''
                  }`}
                  style={{ height: `${h}px`, animationDelay: `${idx * 80}ms` }}
                />
              ))}
            </div>

            {/* Floating "Enhance Audio" Center Card */}
            <div 
              onClick={handleEnhanceClick}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[145px] sm:w-[160px] rounded-2xl bg-white border border-dashed border-slate-300 shadow-[0_16px_36px_rgba(0,0,0,0.12)] p-3.5 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                isEnhanced ? 'scale-105 border-blue-500 shadow-blue-500/20 ring-2 ring-blue-400' : 'hover:scale-105 hover:border-slate-400'
              }`}
            >
              {/* Magic Wand Icon */}
              <div className="relative mb-1">
                <Wand2 className={`w-5 h-5 text-[#071E40] transition-transform ${isEnhanced ? 'rotate-12 scale-110' : ''}`} />
                <Sparkles className="w-2.5 h-2.5 text-[#0284C7] absolute -top-1 -right-1 animate-pulse" />
              </div>

              {/* Title */}
              <span className="text-[12px] sm:text-[13px] font-bold text-[#071E40] tracking-tight leading-tight">
                Enhance Audio
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
