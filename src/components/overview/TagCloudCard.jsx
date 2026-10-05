import React, { useState } from 'react';

export default function TagCloudCard() {
  const [activeTag, setActiveTag] = useState('AI Agents');

  // Floating tags matching the screenshot exactly
  const tags = [
    { 
      id: 'ai-mobile', 
      label: 'AI Mobile', 
      className: 'bg-[#EDE9FE] text-[#6D28D9] border-[#DDD6FE]', 
      top: '18%', 
      left: '12%', 
      animation: 'animate-float-tag-1', 
      delay: '0s' 
    },
    { 
      id: 'ai-video-editor', 
      label: 'AI Video Editor', 
      className: 'bg-[#F1F5F9] text-[#334155] border-[#E2E8F0]', 
      top: '22%', 
      left: '58%', 
      animation: 'animate-float-tag-2', 
      delay: '0.8s' 
    },
    { 
      id: 'ai-agents', 
      label: 'AI Agents', 
      className: 'bg-[#E0E7FF] text-[#4338CA] border-[#C7D2FE]', 
      top: '38%', 
      left: '35%', 
      animation: 'animate-float-tag-3', 
      delay: '1.4s' 
    },
    { 
      id: 'ai-saas', 
      label: 'AI SaaS', 
      className: 'bg-[#FFEDD5] text-[#C2410C] border-[#FED7AA]', 
      top: '58%', 
      left: '8%', 
      animation: 'animate-float-tag-1', 
      delay: '0.4s' 
    },
    { 
      id: 'mobile-app', 
      label: 'Mobile App', 
      className: 'bg-[#F1F5F9] text-[#334155] border-[#E2E8F0]', 
      top: '60%', 
      left: '65%', 
      animation: 'animate-float-tag-2', 
      delay: '1.2s' 
    },
    { 
      id: 'ai-chatbot', 
      label: 'AI Chatbot', 
      className: 'bg-[#FCE7F3] text-[#BE185D] border-[#FBCFE8]', 
      top: '76%', 
      left: '10%', 
      animation: 'animate-float-tag-3', 
      delay: '0.6s' 
    },
    { 
      id: 'text-video', 
      label: 'Text Video', 
      className: 'bg-[#F3E8FF] text-[#7E22CE] border-[#E9D5FF]', 
      top: '76%', 
      left: '38%', 
      animation: 'animate-float-tag-1', 
      delay: '1.6s' 
    },
    { 
      id: 'ai-automation', 
      label: 'AI Automation', 
      className: 'bg-[#DBEAFE] text-[#1D4ED8] border-[#BFDBFE]', 
      top: '76%', 
      left: '68%', 
      animation: 'animate-float-tag-2', 
      delay: '0.2s' 
    },
  ];

  return (
    <div className="group relative bg-white rounded-[28px] p-6 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 min-h-[380px] overflow-hidden flex flex-col justify-between">
      
      {/* Curved Background Topographic & Contour Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700" 
        viewBox="0 0 400 360"
        fill="none"
      >
        <path d="M-50,60 C80,20 180,120 450,40" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M-50,110 C90,70 200,170 450,90" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M-50,170 C100,120 220,230 450,150" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M-50,230 C120,180 240,290 450,210" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M-50,290 C130,240 260,340 450,270" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="200" cy="180" r="140" stroke="#F1F5F9" strokeWidth="1.5" />
      </svg>

      {/* Floating Interactive Tag Capsules */}
      <div className="relative w-full h-full min-h-[340px]">
        {tags.map((tag) => {
          const isSelected = activeTag === tag.id;

          return (
            <button
              key={tag.id}
              onClick={() => setActiveTag(tag.id)}
              className={`absolute text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full border shadow-sm cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${tag.className} ${tag.animation} hover:scale-110 hover:shadow-md hover:z-30 ${
                isSelected ? 'ring-2 ring-indigo-400/50 scale-110 z-20 shadow-md font-bold' : 'z-10'
              }`}
              style={{
                top: tag.top,
                left: tag.left,
                animationDelay: tag.delay,
              }}
            >
              {tag.label}
            </button>
          );
        })}
      </div>

    </div>
  );
}
