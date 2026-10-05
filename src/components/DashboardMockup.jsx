import React from 'react';
import { ChevronDown, Briefcase, Wallet, Calendar, Plus } from 'lucide-react';
import GaugeChart from './GaugeChart';
import WorkloadBarChart from './WorkloadBarChart';

export default function DashboardMockup() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-10 sm:mt-12 px-2 sm:px-4">
      {/* 3-Column Grid Layout of Glassmorphism Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-start text-left">
        
        {/* COLUMN 1: Overall Progress & Task Items (Left - 4 Cols) */}
        <div className="md:col-span-4 flex flex-col space-y-4">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[26px] p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:border-white/20">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs sm:text-sm font-semibold text-white/95">Overall Progress</h3>
              <button className="flex items-center space-x-1 text-[11px] text-white/70 bg-white/10 hover:bg-white/15 px-2.5 py-0.5 rounded-full border border-white/10 transition-colors">
                <span>All</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>
            </div>

            {/* Gauge Radial Tachometer Chart */}
            <GaugeChart percentage={72} />

            {/* Sub Projects List */}
            <div className="space-y-2.5 mt-3 pt-2 border-t border-white/5">
              {/* Office Project Item */}
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white/80">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Office Project</div>
                    <div className="text-[10px] text-white/50">23 Tasks</div>
                  </div>
                </div>
                {/* 70% Progress Ring */}
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 transform -rotate-90">
                    <circle cx="16" cy="16" r="13" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" fill="none" />
                    <circle cx="16" cy="16" r="13" stroke="#FF5C28" strokeWidth="2.5" strokeDasharray={81.6} strokeDashoffset={81.6 * (1 - 0.70)} strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="absolute text-[9px] font-bold text-white">70%</span>
                </div>
              </div>

              {/* Personal Project Item */}
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.04] border border-white/5 hover:bg-white/[0.07] transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-white/80">
                    <Wallet className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Personal Project</div>
                    <div className="text-[10px] text-white/50">30 Tasks</div>
                  </div>
                </div>
                {/* 52% Progress Ring */}
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <svg className="w-8 h-8 transform -rotate-90">
                    <circle cx="16" cy="16" r="13" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" fill="none" />
                    <circle cx="16" cy="16" r="13" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray={81.6} strokeDashoffset={81.6 * (1 - 0.52)} strokeLinecap="round" fill="none" />
                  </svg>
                  <span className="absolute text-[9px] font-bold text-white">52%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Projects Workload Bar Chart (Center - 5 Cols) */}
        <div className="md:col-span-5">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[26px] p-4 sm:p-5 h-full flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-white/20">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs sm:text-sm font-semibold text-white/95">Projects Workload</h3>
              <button className="flex items-center space-x-1.5 text-[11px] text-white/70 bg-white/10 hover:bg-white/15 px-2.5 py-0.5 rounded-full border border-white/10 transition-colors">
                <span>Last 3 months</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>
            </div>

            {/* Custom Bar Chart with Glowing Amber Top Blocks */}
            <WorkloadBarChart />
          </div>
        </div>

        {/* COLUMN 3: Right Side Stacked Cards (Right - 3 Cols) */}
        <div className="md:col-span-3 flex flex-col space-y-4">
          
          {/* Card 3A: Product Design Task */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[26px] p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:border-white/20">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-white">Product Design</h3>
              {/* Green In Progress Pill */}
              <span className="flex items-center space-x-1 bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 text-[10px] font-medium px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>In Progress</span>
              </span>
            </div>
            
            <p className="text-[11px] text-white/50 mb-3 leading-snug">Complete Redesign Of Company Website</p>
            
            <div className="text-xs font-bold text-white mb-1.5">68%</div>

            {/* 12-Segment Progress Bar */}
            <div className="grid grid-cols-12 gap-1 mb-4">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 rounded-sm transition-all ${
                    i < 8 
                      ? 'bg-gradient-to-t from-[#FF5C28] to-[#FFA033] shadow-[0_1px_4px_rgba(255,92,40,0.4)]' 
                      : 'bg-white/10'
                  }`}
                />
              ))}
            </div>

            {/* Bottom Meta Tags */}
            <div className="flex items-center justify-between pt-2.5 border-t border-white/5 text-[10px] text-white/60">
              <span className="flex items-center space-x-1 bg-white/10 px-2 py-0.5 rounded-full border border-white/10 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span>High</span>
              </span>
              <span className="flex items-center space-x-1 text-white/50">
                <Calendar className="w-3 h-3 opacity-60" />
                <span>Sep 29, 2026</span>
              </span>
            </div>
          </div>

          {/* Card 3B: Create Your Account */}
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 shadow-2xl transition-all duration-300 hover:border-white/20">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-semibold text-white">Create Your Account</h4>
              <button className="w-5 h-5 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
                <Plus className="w-3 h-3 stroke-[2.5]" />
              </button>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-[10px] text-white/50">
                <span>Progress</span>
                <span className="text-white font-bold">78%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div className="bg-white h-full rounded-full w-[78%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
