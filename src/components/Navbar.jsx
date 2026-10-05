import React, { useState } from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#' },
    { name: 'Features', path: '#' },
    { name: 'Pages', path: '#' },
    { name: 'Pricing', path: '#' },
  ];

  return (
    <header className="w-full flex justify-center sticky top-0 z-50 pointer-events-auto">
      {/* Top White Hanging Capsule Tab Navigation */}
      <nav className="bg-white text-slate-900 rounded-b-[24px] sm:rounded-b-[28px] px-6 sm:px-8 py-2.5 flex items-center justify-between shadow-[0_12px_32px_rgba(0,0,0,0.15)] w-full max-w-4xl border-b border-x border-slate-100 transition-all duration-300">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-2.5 cursor-pointer group">
          <div className="w-7 h-7 rounded-md bg-[#FF5C28] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            {/* 4-dot Grid Pattern Icon */}
            <div className="grid grid-cols-2 gap-0.5 p-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-900">Taskbet</span>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-5 text-xs sm:text-[13px] font-medium text-slate-600">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center space-x-1 hover:text-slate-900 transition-colors ${
                  isActive ? 'text-slate-900 font-semibold' : 'text-slate-600'
                }`}
              >
                <span className="text-slate-400 text-xs">•</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-3.5">
          {/* Shopping Bag Button with Badge */}
          <button 
            className="relative p-1.5 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#FF5C28] text-white text-[9px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              0
            </span>
          </button>

          {/* Get Started Dark Pill Button */}
          <button className="bg-[#0B0F17] hover:bg-[#18202E] text-white text-xs sm:text-sm font-semibold pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full flex items-center space-x-2 transition-all shadow-md hover:shadow-lg group">
            <span>Get Started</span>
            <div className="w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
