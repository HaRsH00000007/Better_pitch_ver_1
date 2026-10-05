import React, { useState } from 'react';
import { Mic, PenTool, LayoutGrid, Sparkles, Image, Code } from 'lucide-react';

export default function MotionGenieCard() {
  const [selectedTool, setSelectedTool] = useState('voiceover');

  return (
    <div className="group relative bg-white rounded-[28px] pt-7 px-6 pb-0 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[380px] overflow-hidden">
      
      {/* Top Text Header */}
      <div className="text-center z-10">
        <h3 className="text-[20px] font-bold text-slate-900 tracking-tight">
          MotionGenie App
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-1.5 max-w-[260px] mx-auto leading-relaxed">
          Consistently delivers accurate information, ensuring reliable
        </p>
      </div>

      {/* Mobile Mockup Emerging from Bottom */}
      <div className="relative mt-6 mx-auto w-full max-w-[240px] flex justify-center">
        {/* Phone Frame */}
        <div className="w-full bg-[#111827] rounded-t-[32px] p-[6px] pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          
          {/* Inner Screen */}
          <div className="bg-[#FAFBFD] rounded-t-[26px] p-3.5 pb-8 min-h-[220px] border-t border-x border-white/20">
            
            {/* Dynamic Island / Speaker Pill */}
            <div className="w-14 h-3 bg-[#111827] rounded-full mx-auto mb-3.5 flex items-center justify-end px-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
            </div>

            {/* In-App Header Navigation */}
            <div className="flex items-center justify-between mb-3 px-1">
              <button className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FF5C28] to-[#FF8A00] flex items-center justify-center text-white shadow-sm shadow-orange-500/20">
                <Sparkles className="w-3 h-3 fill-white" />
              </div>
            </div>

            {/* In-App Title */}
            <div className="px-1 mb-3">
              <div className="text-[11px] font-extrabold tracking-wider text-slate-900 uppercase">
                AI TOOLS
              </div>
              <div className="text-[9px] text-slate-400 font-medium">
                Explore the best AI collections
              </div>
            </div>

            {/* 2-Column AI Tool Tiles */}
            <div className="grid grid-cols-2 gap-2">
              {/* Tile 1: Voiceover */}
              <div 
                onClick={() => setSelectedTool('voiceover')}
                className={`p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  selectedTool === 'voiceover' 
                    ? 'bg-[#F3E8FF] border-purple-200/80 shadow-sm scale-[1.02]' 
                    : 'bg-purple-50/60 border-purple-100 hover:bg-purple-50'
                }`}
              >
                <div className="w-6 h-6 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-1.5">
                  <Mic className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-slate-900 tracking-tight">
                  VOICEOVER
                </div>
                <div className="text-[8px] text-slate-500 leading-tight mt-0.5">
                  Convert Text To Voice
                </div>
              </div>

              {/* Tile 2: Writer */}
              <div 
                onClick={() => setSelectedTool('writer')}
                className={`p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  selectedTool === 'writer' 
                    ? 'bg-[#FFEDD5] border-orange-200/80 shadow-sm scale-[1.02]' 
                    : 'bg-orange-50/60 border-orange-100 hover:bg-orange-50'
                }`}
              >
                <div className="w-6 h-6 rounded-xl bg-orange-100 text-[#EA580C] flex items-center justify-center mb-1.5">
                  <PenTool className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-slate-900 tracking-tight">
                  WRITER
                </div>
                <div className="text-[8px] text-slate-500 leading-tight mt-0.5">
                  AI to content & SEO
                </div>
              </div>

              {/* Peeking Tile 3: Code */}
              <div className="p-2.5 rounded-2xl bg-sky-50/60 border border-sky-100 opacity-70">
                <div className="w-6 h-6 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-1.5">
                  <Code className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-slate-900">
                  ASSISTANT
                </div>
              </div>

              {/* Peeking Tile 4: Image */}
              <div className="p-2.5 rounded-2xl bg-emerald-50/60 border border-emerald-100 opacity-70">
                <div className="w-6 h-6 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1.5">
                  <Image className="w-3.5 h-3.5" />
                </div>
                <div className="text-[10px] font-bold text-slate-900">
                  DESIGN
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
