import React, { useState } from 'react';
import DigitalTransformationCard from './DigitalTransformationCard';
import InvestmentCard from './InvestmentCard';
import FinanceCard from './FinanceCard';

export default function CardStack() {
  const [activeCard, setActiveCard] = useState('digital');
  const [isHovered, setIsHovered] = useState(false);

  // Helper function to calculate layer styles dynamically based on which card is active
  const getCardStyle = (cardId) => {
    // Define the 3 positions: front, mid, back
    const orderMap = {
      digital: { digital: 'front', investment: 'mid', finance: 'back' },
      investment: { investment: 'front', digital: 'mid', finance: 'back' },
      finance: { finance: 'front', digital: 'mid', investment: 'back' },
    };

    const role = orderMap[activeCard][cardId];

    if (role === 'front') {
      return {
        zIndex: 30,
        transform: isHovered 
          ? 'translateX(0px) translateY(0px) rotate(-1deg) scale(1)' 
          : 'translateX(0px) translateY(0px) rotate(-2deg) scale(1)',
        opacity: 1,
      };
    }

    if (role === 'mid') {
      return {
        zIndex: 20,
        transform: isHovered 
          ? 'translateX(35px) translateY(-22px) rotate(4.5deg) scale(0.97)' 
          : 'translateX(24px) translateY(-14px) rotate(3deg) scale(0.96)',
        opacity: 0.95,
      };
    }

    // role === 'back'
    return {
      zIndex: 10,
      transform: isHovered 
        ? 'translateX(70px) translateY(-44px) rotate(9deg) scale(0.93)' 
        : 'translateX(48px) translateY(-28px) rotate(7deg) scale(0.92)',
      opacity: 0.9,
    };
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 3D Stack Container */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full max-w-[480px] sm:max-w-[520px] h-[370px] sm:h-[400px] flex items-center justify-center animate-fan-float cursor-pointer select-none"
      >
        
        {/* FINANCE CARD */}
        <div 
          onClick={() => setActiveCard('finance')}
          className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
          style={getCardStyle('finance')}
        >
          <FinanceCard isFront={activeCard === 'finance'} />
        </div>

        {/* INVESTMENT CARD */}
        <div 
          onClick={() => setActiveCard('investment')}
          className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
          style={getCardStyle('investment')}
        >
          <InvestmentCard isFront={activeCard === 'investment'} />
        </div>

        {/* DIGITAL TRANSFORMATION CARD */}
        <div 
          onClick={() => setActiveCard('digital')}
          className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
          style={getCardStyle('digital')}
        >
          <DigitalTransformationCard isFront={activeCard === 'digital'} />
        </div>

      </div>

      {/* Interactive Switcher Pills Below Stack */}
      <div className="flex items-center gap-2 mt-4 z-40 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-xs">
        <button
          onClick={() => setActiveCard('digital')}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
            activeCard === 'digital'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          Digital Transformation
        </button>
        <button
          onClick={() => setActiveCard('investment')}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
            activeCard === 'investment'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          Investment
        </button>
        <button
          onClick={() => setActiveCard('finance')}
          className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-300 ${
            activeCard === 'finance'
              ? 'bg-[#FF5C28] text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          Finance
        </button>
      </div>

    </div>
  );
}
