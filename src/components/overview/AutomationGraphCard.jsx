import React, { useState } from 'react';
import { 
  Flame, 
  Link2, 
  Zap, 
  Settings, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Clock,
  Cpu
} from 'lucide-react';

export default function AutomationGraphCard() {
  const [activeNode, setActiveNode] = useState(null);

  // Satellite node definitions matching the screenshot
  const nodes = [
    { id: 'clock', label: 'Scheduler', icon: Clock, color: 'text-sky-500', bg: 'bg-sky-50', border: 'border-sky-200/80', angle: -135, x: 50, y: 35 },
    { id: 'flame', label: 'Triggers', icon: Flame, color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-200/80', angle: -90, x: 145, y: 25 },
    { id: 'link', label: 'Webhooks', icon: Link2, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200/80', angle: -45, x: 240, y: 35 },
    { id: 'zap', label: 'Actions', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200/80', angle: 0, x: 245, y: 105 },
    { id: 'settings', label: 'Config', icon: Settings, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-200/80', angle: 45, x: 240, y: 175 },
    { id: 'shield', label: 'Security', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200/80', angle: 90, x: 145, y: 185 },
    { id: 'sparkles', label: 'AI Engine', icon: Sparkles, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-200/80', angle: 135, x: 50, y: 175 },
    { id: 'terminal', label: 'Code Exec', icon: Terminal, color: 'text-slate-800', bg: 'bg-slate-100', border: 'border-slate-300/80', angle: 180, x: 45, y: 105 },
  ];

  const centerX = 145;
  const centerY = 105;

  return (
    <div className="group relative bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[280px] overflow-hidden">
      
      {/* Card Header */}
      <div className="flex items-center justify-between z-10">
        <h3 className="text-[19px] font-bold text-slate-900 tracking-tight">
          AI Automation
        </h3>
        {activeNode && (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 animate-fadeIn">
            {nodes.find(n => n.id === activeNode)?.label}
          </span>
        )}
      </div>

      {/* SVG Network Graph */}
      <div className="relative w-full h-[190px] my-auto flex items-center justify-center">
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 290 210"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF5C28" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Dashed Connector Lines from Central Hub to Satellite Nodes */}
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <g key={node.id}>
                {/* Background dashed line */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={node.x}
                  y2={node.y}
                  stroke={isActive ? '#0284C7' : '#CBD5E1'}
                  strokeWidth={isActive ? 2 : 1.5}
                  strokeDasharray="4 4"
                  className={isActive ? 'animate-dash-flow' : 'opacity-70 group-hover:opacity-100 transition-opacity'}
                />
              </g>
            );
          })}
        </svg>

        {/* Central Hub Node */}
        <div 
          className="absolute z-20 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
            boxShadow: '0 8px 20px -4px rgba(2, 132, 199, 0.45)',
          }}
        >
          {/* Subtle outer pulse aura */}
          <div className="absolute inset-0 rounded-full border-2 border-white/60 animate-ping opacity-30 pointer-events-none" style={{ animationDuration: '3s' }} />
          
          {/* White 'A' Logo Emblem */}
          <div className="w-5 h-5 flex items-center justify-center text-white">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 21h4.5l2-4.5h5l2 4.5H21L12 2z" fill="white" />
              <path d="M10 13.5h4" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* 8 Satellite Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;

          // Responsive percentage coordinates relative to 290x210
          const leftPercent = (node.x / 290) * 100;
          const topPercent = (node.y / 210) * 100;

          return (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className={`absolute z-20 w-8 h-8 rounded-full border ${node.border} ${node.bg} flex items-center justify-center shadow-sm cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
                isActive ? 'scale-125 shadow-md z-30 ring-2 ring-sky-300' : 'hover:scale-115'
              }`}
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
              }}
              title={node.label}
            >
              <Icon className={`w-3.5 h-3.5 ${node.color} stroke-[2.2]`} />
            </div>
          );
        })}
      </div>

      {/* Bottom Subtitle / Tagline */}
      <div className="text-center z-10 pt-1">
        <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-500 transition-colors">
          Connected to 50+ automation integrations
        </span>
      </div>
    </div>
  );
}
