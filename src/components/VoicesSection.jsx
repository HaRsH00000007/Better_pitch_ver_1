import React, { useState } from 'react';
import { ArrowRight, Volume2, Globe, Sparkles, Mic } from 'lucide-react';

export default function VoicesSection() {
  const [activeVoice, setActiveVoice] = useState(null);

  // Gentle audio synthesis chime feedback on interaction
  const playInteractionTone = (freq = 520) => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
      // AudioContext fallback
    }
  };

  return (
    <section 
      id="voices" 
      className="relative bg-white text-slate-900 py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-slate-100"
    >
      
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/4 left-10 w-[500px] h-[400px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-10 w-[550px] h-[450px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(255, 92, 40, 0.1) 60%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* TOP ROW: Title on Left, Translation Block on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16 lg:mb-20">
          
          {/* Main Display Headline (Left) */}
          <div className="lg:col-span-6 pt-2">
            <h2 className="text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#071E40] tracking-tight leading-[1.08]">
              Voices for <br />
              All Your{' '}
              <span className="relative inline-block pb-3">
                Ideas
                {/* Dual Accent Lines matching the image */}
                <span className="absolute bottom-1.5 inset-x-0 h-[3px] bg-[#0284C7] rounded-full" />
                <span className="absolute bottom-0 inset-x-0 h-[3px] bg-[#84CC16] rounded-full" />
              </span>
            </h2>
          </div>

          {/* FEATURE 2: Translation (Top Right) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 lg:pl-6">
            
            {/* Visual Image */}
            <div className="relative group shrink-0 overflow-hidden rounded-[30px] shadow-xl w-60 h-60 sm:w-64 sm:h-64 bg-purple-900 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
              <img 
                src="/images/translation.jpg" 
                alt="AI Translation and Sound Waves" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle Concentric Pulse Overlay on Hover */}
              <div className="absolute inset-0 rounded-[30px] border border-white/20 pointer-events-none group-hover:border-purple-400/50 transition-colors" />
            </div>

            {/* Translation Copy & Stats */}
            <div className="flex flex-col justify-between py-1 text-center sm:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#071E40] tracking-tight mb-2">
                  Translation
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-[210px] mb-6 mx-auto sm:mx-0">
                  Translation services from audio and automation to the selected language
                </p>
              </div>

              {/* Big Stat Highlight */}
              <div className="mb-6">
                <div className="text-3xl sm:text-[38px] font-black text-[#071E40] leading-none tracking-tight">
                  + 20
                </div>
                <div className="text-2xl sm:text-[28px] font-bold text-[#071E40] leading-tight tracking-tight mt-0.5">
                  language
                </div>
              </div>

              {/* Button */}
              <button 
                onClick={() => playInteractionTone(660)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-slate-400 text-xs font-semibold text-slate-800 hover:bg-[#071E40] hover:text-white hover:border-[#071E40] transition-all duration-300 group/btn self-center sm:self-start cursor-pointer shadow-xs hover:shadow"
              >
                <span>Explore Language</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* MIDDLE ROW: Voiceover Block (Left) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 lg:mb-20">
          
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
            {/* Visual Image */}
            <div className="relative group shrink-0 overflow-hidden rounded-[28px] shadow-xl w-52 h-52 sm:w-60 sm:h-60 bg-amber-950 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl">
              <img 
                src="/images/voiceover.jpg" 
                alt="Voiceover Motion" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[28px] border border-white/20 pointer-events-none group-hover:border-orange-400/50 transition-colors" />
            </div>

            {/* Voiceover Copy */}
            <div className="flex flex-col text-center sm:text-left py-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#071E40] tracking-tight mb-2">
                Voiceover
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-[220px] mb-5 mx-auto sm:mx-0">
                Changed the voiceover to a more proportional voice for commercial needs
              </p>

              <button 
                onClick={() => playInteractionTone(520)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-slate-400 text-xs font-semibold text-slate-800 hover:bg-[#071E40] hover:text-white hover:border-[#071E40] transition-all duration-300 group/btn self-center sm:self-start cursor-pointer shadow-xs hover:shadow"
              >
                <span>Try Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Podcast (Left) and Dubbing (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          
          {/* FEATURE 3: Podcast (Bottom Left) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
            {/* Visual Image */}
            <div className="relative group shrink-0 overflow-hidden rounded-[26px] shadow-lg w-56 h-40 sm:w-64 sm:h-44 bg-slate-200 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl">
              <img 
                src="/images/podcast.jpg" 
                alt="Podcast Studio Microphone" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[26px] border border-white/20 pointer-events-none group-hover:border-slate-400/50 transition-colors" />
            </div>

            {/* Podcast Copy */}
            <div className="flex flex-col text-center sm:text-left py-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#071E40] tracking-tight mb-2">
                Podcast
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-[210px] mb-5 mx-auto sm:mx-0">
                Make it easier for you to summarize the contents of the podcast into text
              </p>

              <button 
                onClick={() => playInteractionTone(440)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-slate-400 text-xs font-semibold text-slate-800 hover:bg-[#071E40] hover:text-white hover:border-[#071E40] transition-all duration-300 group/btn self-center sm:self-start cursor-pointer shadow-xs hover:shadow"
              >
                <span>Try Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* FEATURE 4: Dubbing (Bottom Right) */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-end justify-end gap-6 lg:gap-8">
            
            {/* Dubbing Copy (Aligned to Right) */}
            <div className="flex flex-col text-center sm:text-right py-2 order-2 sm:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#071E40] tracking-tight mb-2">
                Dubbing
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed max-w-[220px] mb-5 mx-auto sm:ml-auto sm:mr-0">
                Dubbing is made easy from generating text into the sound you want
              </p>

              <button 
                onClick={() => playInteractionTone(587)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-slate-400 text-xs font-semibold text-slate-800 hover:bg-[#071E40] hover:text-white hover:border-[#071E40] transition-all duration-300 group/btn self-center sm:self-end cursor-pointer shadow-xs hover:shadow"
              >
                <span>Try Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual Image */}
            <div className="relative group shrink-0 overflow-hidden rounded-[28px] shadow-xl w-44 h-60 sm:w-48 sm:h-64 bg-slate-900 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl order-1 sm:order-2">
              <img 
                src="/images/dubbing.jpg" 
                alt="Dubbing High Speed Runner" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[28px] border border-white/20 pointer-events-none group-hover:border-blue-400/50 transition-colors" />
            </div>

          </div>

        </div>

        {/* BOTTOM FEATURE CALLOUT FROM SCREENSHOT */}
        <div className="mt-20 sm:mt-24 pt-4 text-center flex flex-col items-center">
          <p className="text-sm sm:text-base font-medium text-slate-600 leading-relaxed max-w-sm mx-auto mb-5">
            There are still many features that this <br />
            AI voice can do
          </p>

          <button 
            onClick={() => playInteractionTone(520)}
            className="bg-[#1C2640] hover:bg-[#111A2E] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 sm:px-7 sm:py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            See All Features
          </button>
        </div>

      </div>

    </section>
  );
}
