import React, { useState } from 'react';

// Crisp SVG Mini Flags in circular badges
const FlagUK = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full rounded-full">
    <clipPath id="uk-clip"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#uk-clip)">
      <rect width="32" height="32" fill="#012169" />
      <path d="M0,0 L32,32 M32,0 L0,32" stroke="#FFF" strokeWidth="6" />
      <path d="M0,0 L32,32 M32,0 L0,32" stroke="#C8102E" strokeWidth="3" />
      <path d="M16,0 V32 M0,16 H32" stroke="#FFF" strokeWidth="9" />
      <path d="M16,0 V32 M0,16 H32" stroke="#C8102E" strokeWidth="5" />
    </g>
  </svg>
);

const FlagSpain = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full rounded-full">
    <clipPath id="es-clip"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#es-clip)">
      <rect width="32" height="8" fill="#AA151B" />
      <rect y="8" width="32" height="16" fill="#F1BF00" />
      <rect y="24" width="32" height="8" fill="#AA151B" />
      <circle cx="10" cy="16" r="3" fill="#AA151B" />
    </g>
  </svg>
);

const FlagFrance = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full rounded-full">
    <clipPath id="fr-clip"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fr-clip)">
      <rect width="10.6" height="32" fill="#002395" />
      <rect x="10.6" width="10.8" height="32" fill="#FFF" />
      <rect x="21.4" width="10.6" height="32" fill="#ED2939" />
    </g>
  </svg>
);

const FlagItaly = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full rounded-full">
    <clipPath id="it-clip"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#it-clip)">
      <rect width="10.6" height="32" fill="#009246" />
      <rect x="10.6" width="10.8" height="32" fill="#FFF" />
      <rect x="21.4" width="10.6" height="32" fill="#CE2B37" />
    </g>
  </svg>
);

const FlagSweden = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full rounded-full">
    <clipPath id="se-clip"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#se-clip)">
      <rect width="32" height="32" fill="#006AA7" />
      <path d="M11,0 V32 M0,16 H32" stroke="#FECC00" strokeWidth="5" />
    </g>
  </svg>
);

const FlagGermany = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full rounded-full">
    <clipPath id="de-clip"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#de-clip)">
      <rect width="32" height="10.6" fill="#000" />
      <rect y="10.6" width="32" height="10.8" fill="#D00" />
      <rect y="21.4" width="32" height="10.6" fill="#FFCE00" />
    </g>
  </svg>
);

const FlagUSA = () => (
  <svg viewBox="0 0 32 32" className="w-full h-full rounded-full">
    <clipPath id="us-clip"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#us-clip)">
      <rect width="32" height="32" fill="#FFF" />
      <path d="M0,4 H32 M0,9 H32 M0,14 H32 M0,19 H32 M0,24 H32 M0,29 H32" stroke="#B22234" strokeWidth="2.5" />
      <rect width="14" height="16" fill="#3C3B6E" />
    </g>
  </svg>
);

export default function GlobalCommunityCard() {
  const [activeFlag, setActiveFlag] = useState(null);

  const pins = [
    { id: 'uk', country: 'United Kingdom', users: '34.2k active', Flag: FlagUK, top: '48%', left: '22%', hasPing: false },
    { id: 'fr', country: 'France', users: '28.7k active', Flag: FlagFrance, top: '56%', left: '38%', hasPing: true },
    { id: 'es', country: 'Spain', users: '19.5k active', Flag: FlagSpain, top: '64%', left: '26%', hasPing: false },
    { id: 'it', country: 'Italy', users: '21.3k active', Flag: FlagItaly, top: '62%', left: '50%', hasPing: false },
    { id: 'de', country: 'Germany', users: '42.1k active', Flag: FlagGermany, top: '44%', left: '48%', hasPing: true },
    { id: 'se', country: 'Sweden', users: '15.8k active', Flag: FlagSweden, top: '34%', left: '55%', hasPing: false },
    { id: 'us', country: 'United States', users: '88.4k active', Flag: FlagUSA, top: '52%', left: '74%', hasPing: false },
  ];

  return (
    <div className="group relative bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[380px] overflow-hidden">
      
      {/* Top Text Content */}
      <div className="z-10">
        <h3 className="text-[19px] sm:text-[20px] font-bold text-slate-900 tracking-tight">
          Built for the Global Community
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-1.5 leading-relaxed max-w-[280px]">
          Motiongenie connects global creators through seamless multilingual communication.
        </p>
      </div>

      {/* 3D Perspective Globe with Flag Pins */}
      <div className="relative w-full h-[220px] mt-auto flex items-end justify-center">
        
        {/* Radiant Pastel Glow Mesh behind globe */}
        <div 
          className="absolute bottom-0 inset-x-0 h-44 rounded-t-full opacity-60 group-hover:opacity-85 transition-opacity duration-500 blur-2xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(244,114,182,0.35) 0%, rgba(125,211,252,0.4) 40%, rgba(196,181,253,0.2) 70%, transparent 100%)'
          }}
        />

        {/* Globe Base SVG: Perspective Curved World Grid & Landmasses */}
        <div className="relative w-full h-[180px] overflow-hidden rounded-b-[24px]">
          <svg 
            className="w-full h-full"
            viewBox="0 0 320 180" 
            fill="none"
            preserveAspectRatio="xMidYEnd meet"
          >
            <defs>
              <linearGradient id="globeAtmosphere" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Globe Outer Curve Horizon */}
            <path 
              d="M-40,190 C40,40 280,40 360,190" 
              stroke="#CBD5E1" 
              strokeWidth="1.5" 
              fill="url(#globeAtmosphere)" 
            />

            {/* Latitude Grid Arcs */}
            <path d="M-20,160 C50,70 270,70 340,160" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
            <path d="M10,135 C80,95 240,95 310,135" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

            {/* Longitude Grid Curves */}
            <path d="M160,50 C160,90 160,140 160,180" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
            <path d="M110,58 C100,95 85,140 70,180" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
            <path d="M210,58 C220,95 235,140 250,180" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />

            {/* Stylized Continent Silhouettes */}
            {/* Europe / UK */}
            <path 
              d="M80,110 C90,95 130,85 150,100 C155,115 140,135 125,145 C105,150 90,135 80,110 Z" 
              fill="url(#landGrad)" 
              opacity="0.85" 
            />
            {/* Scandinavia */}
            <path 
              d="M140,75 C150,70 170,75 175,90 C165,100 150,98 140,75 Z" 
              fill="url(#landGrad)" 
              opacity="0.75" 
            />
            {/* Asia peeking */}
            <path 
              d="M170,100 C200,90 260,95 280,120 C270,145 220,150 185,135 Z" 
              fill="url(#landGrad)" 
              opacity="0.7" 
            />
            {/* Atlantic / Americas horizon */}
            <path 
              d="M20,95 C40,90 55,105 45,125 C30,130 15,115 20,95 Z" 
              fill="url(#landGrad)" 
              opacity="0.6" 
            />
          </svg>

          {/* Floating Flag Pins */}
          {pins.map((pin) => {
            const isHovered = activeFlag === pin.id;
            const FlagComponent = pin.Flag;

            return (
              <div
                key={pin.id}
                onMouseEnter={() => setActiveFlag(pin.id)}
                onMouseLeave={() => setActiveFlag(null)}
                className="absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-1/2 group/pin"
                style={{ top: pin.top, left: pin.left }}
              >
                {/* Active Radar Ripple */}
                {pin.hasPing && (
                  <span className="absolute -inset-1 rounded-full bg-sky-400 animate-radar-ping pointer-events-none" />
                )}

                {/* Circular Flag Badge */}
                <div className={`relative w-6 h-6 rounded-full border-2 border-white shadow-md transition-all duration-300 transform ${
                  isHovered ? 'scale-125 ring-2 ring-sky-400 z-30 shadow-lg -translate-y-1' : 'hover:scale-115'
                }`}>
                  <FlagComponent />
                </div>

                {/* Micro Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-slate-900 text-white rounded-lg text-[10px] font-semibold whitespace-nowrap shadow-xl z-40 pointer-events-none animate-fadeIn flex items-center gap-1.5">
                    <span>{pin.country}</span>
                    <span className="text-slate-400 font-normal">• {pin.users}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
