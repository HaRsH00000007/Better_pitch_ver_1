import React, { useState, useEffect, useRef } from 'react';

export default function IntegrationsSection() {
  const [activeTool, setActiveTool] = useState(null);
  const [cyclingIndex, setCyclingIndex] = useState(0);
  const wheelRef = useRef(null);
  const badgeRefs = useRef([]);
  const rotationRef = useRef(0);
  const isHoveredRef = useRef(false);
  const lastScrollYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  const dynamicStatements = [
    {
      badge: 'Two-Way Sync',
      text: 'Real-time bi-directional data flow across your entire cloud stack',
    },
    {
      badge: 'Zero-Code AI Triggers',
      text: 'Trigger intelligent automation flows directly from Slack, Jira & Figma',
    },
    {
      badge: 'Unified Collaboration',
      text: 'Eliminate context switching and consolidate team tasks into one view',
    },
    {
      badge: 'Enterprise Security',
      text: 'SOC-2 compliant end-to-end encrypted pipelines with instant audit trails',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCyclingIndex((prev) => (prev + 1) % dynamicStatements.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [dynamicStatements.length]);

  // Play pleasant lightweight Web Audio synth tone on interaction
  const playTone = (freq = 440) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // Audio context might be restricted before first gesture
    }
  };

  // Continuous wheel rotation from left to right (clockwise)
  // Coupled with scroll acceleration and pause on hover
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const updateWheel = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Base cruising speed: ~8.5 degrees/second (continuous smooth motion from left to right)
      const baseSpeed = isHoveredRef.current ? 0 : 8.5;
      rotationRef.current = (rotationRef.current + baseSpeed * dt) % 360;

      // Direct GPU transform update for buttery 60fps/120fps performance
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }
      badgeRefs.current.forEach((badge) => {
        if (badge) {
          badge.style.transform = `rotate(${-rotationRef.current}deg)`;
        }
      });

      animId = requestAnimationFrame(updateWheel);
    };

    animId = requestAnimationFrame(updateWheel);

    // Scroll listener: scrolling down boosts rotation forward from left to right
    const handleScroll = () => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollYRef.current;
      lastScrollYRef.current = currentY;

      // Add scroll momentum to continuous rotation
      rotationRef.current = (rotationRef.current + deltaY * 0.08) % 360;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 24 Tools distributed evenly every 15° around the full 360° circle (360 / 24 = 15°)
  // Center Apex (index 0) starts at 90° so Taskbet Core is at the very top!
  const tools = [
    {
      id: 'tool-core',
      name: 'Taskbet Core',
      category: 'AI Orchestration',
      freq: 783.99,
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-[#FF5C28]">
          <path d="M8.5 7A4.5 4.5 0 004 11.5c0 2.49 2.01 4.5 4.5 4.5 1.83 0 3.42-1.1 4.12-2.69.7 1.59 2.29 2.69 4.12 2.69 2.49 0 4.5-2.01 4.5-4.5S19.23 7 16.74 7c-1.83 0-3.42 1.1-4.12 2.69A4.52 4.52 0 008.5 7zm-.5 6.5a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z"/>
        </svg>
      ),
    },
    {
      id: 'tool-google',
      name: 'Google Workspace',
      category: 'Cloud Suite',
      freq: 770.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 2a1.5 1.5 0 011.5 1.5V6a1.5 1.5 0 01-3 0V3.5A1.5 1.5 0 0112 2zm0 14a1.5 1.5 0 011.5 1.5v2.5a1.5 1.5 0 01-3 0v-2.5A1.5 1.5 0 0112 16zm-7-5.5A1.5 1.5 0 016.5 9H9a1.5 1.5 0 010 3H6.5A1.5 1.5 0 015 10.5zm11 0a1.5 1.5 0 011.5-1.5h2.5a1.5 1.5 0 010 3h-2.5A1.5 1.5 0 0116 10.5z"/>
        </svg>
      ),
    },
    {
      id: 'tool-miro',
      name: 'Miro',
      category: 'Whiteboarding',
      freq: 740.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 2.5L20 12l-8 9.5L4 12 12 2.5zm0 4.2L7.5 12l4.5 5.3 4.5-5.3L12 6.7z"/>
        </svg>
      ),
    },
    {
      id: 'tool-jira',
      name: 'Jira',
      category: 'Issue Tracking',
      freq: 698.46,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <circle cx="7" cy="7" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="17" cy="7" r="2"/>
          <circle cx="7" cy="12" r="2"/><circle cx="12" cy="12" r="2.5"/><circle cx="17" cy="12" r="2"/>
          <circle cx="7" cy="17" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
        </svg>
      ),
    },
    {
      id: 'tool-trello',
      name: 'Trello',
      category: 'Kanban Boards',
      freq: 659.25,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M4 18V6l10 6-10 6zm6-6l8-4.8v9.6L10 12z"/>
        </svg>
      ),
    },
    {
      id: 'tool-discord',
      name: 'Discord',
      category: 'Community',
      freq: 587.33,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 3a9 9 0 00-6.36 15.36l1.42-1.42A7 7 0 1119 12h2a9 9 0 00-9-9zm-1 5v4.59l3.71 3.7 1.42-1.42L13 11.41V8h-2z"/>
        </svg>
      ),
    },
    {
      id: 'tool-intercom',
      name: 'Intercom',
      category: 'Customer Chat',
      freq: 523.25,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M8 8a4 4 0 100 8 4 4 0 000-8zm8 0a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
      ),
    },
    {
      id: 'tool-dropbox',
      name: 'Dropbox',
      category: 'Cloud Storage',
      freq: 493.88,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <polygon points="6,3 12,7 6,11 0,7" /><polygon points="18,3 24,7 18,11 12,7" />
          <polygon points="6,11 12,15 6,19 0,15" /><polygon points="18,11 24,15 18,19 12,15" />
          <polygon points="6,20 12,16 18,20 12,24" />
        </svg>
      ),
    },
    {
      id: 'tool-airtable',
      name: 'Airtable',
      category: 'Databases',
      freq: 440.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <polygon points="12,2 2,7 12,12 22,7" /><polygon points="2,10 12,15 12,22 2,17" />
          <polygon points="14,15 22,11 22,17 14,22" />
        </svg>
      ),
    },
    {
      id: 'tool-shopify',
      name: 'Shopify',
      category: 'E-Commerce',
      freq: 392.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M15.8 4.2c-.1-.7-.6-1.2-1.3-1.2h-.5c-.3-1.6-1.5-3-3.2-3-2.1 0-3.6 1.7-4 3.7l-2.1.7c-.5.2-.8.7-.7 1.3l2.8 17.1c.1.6.6 1.1 1.2 1.1h9.6c.6 0 1.1-.4 1.2-1l2.8-17.4c.1-.6-.2-1.1-.7-1.3l-5.1-1z" />
        </svg>
      ),
    },
    {
      id: 'tool-hubspot',
      name: 'HubSpot',
      category: 'CRM & Growth',
      freq: 349.23,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <circle cx="12" cy="12" r="3" /><path d="M12 4v5M12 15v5M4 12h5M15 12h5" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      id: 'tool-zoom',
      name: 'Zoom',
      category: 'Video Conferencing',
      freq: 370.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M4 6.5A2.5 2.5 0 016.5 4h8A2.5 2.5 0 0117 6.5v11a2.5 2.5 0 01-2.5 2.5h-8A2.5 2.5 0 014 17.5v-11zm14 3.5l4-2.5v9l-4-2.5v-4z" />
        </svg>
      ),
    },
    {
      id: 'tool-openai',
      name: 'OpenAI',
      category: 'Intelligence API',
      freq: 392.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
      ),
    },
    {
      id: 'tool-webflow',
      name: 'Webflow',
      category: 'Visual CMS',
      freq: 415.30,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 3L2 21h4.5l2.5-5 2.5 5h4.5l2.5-5 2.5 5H22L12 3z"/>
        </svg>
      ),
    },
    {
      id: 'tool-github',
      name: 'GitHub',
      category: 'Code & CI/CD',
      freq: 440.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M8 8a4 4 0 100 8 4 4 0 000-8zm8 0a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
      ),
    },
    {
      id: 'tool-stripe',
      name: 'Stripe',
      category: 'Billing & Invoicing',
      freq: 466.16,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.977 15.617.5 12.392.5 6.84.5 2.923 3.483 2.923 8.358c0 5.493 5.493 6.945 9.176 8.318 2.378.89 3.194 1.611 3.194 2.584 0 .973-.917 1.488-2.28 1.488-2.616 0-5.328-1.127-7.228-2.247l-.922 5.567C7.305 25.138 10.375 26 13.393 26c5.82 0 9.878-2.88 9.878-8.083 0-5.362-5.187-7.062-9.295-8.767z" />
        </svg>
      ),
    },
    {
      id: 'tool-clickup',
      name: 'ClickUp',
      category: 'Productivity',
      freq: 493.88,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M7 14l5-11 1 6h4l-5 11-1-6H7z"/>
        </svg>
      ),
    },
    {
      id: 'tool-loom',
      name: 'Loom',
      category: 'Video Messaging',
      freq: 523.25,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <polygon points="10,8 16,12 10,16" />
        </svg>
      ),
    },
    {
      id: 'tool-zapier',
      name: 'Zapier',
      category: 'Automation',
      freq: 554.37,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 3a9 9 0 00-6.36 15.36l1.42-1.42A7 7 0 1119 12h2a9 9 0 00-9-9zm-1 5v4.59l3.71 3.7 1.42-1.42L13 11.41V8h-2z"/>
        </svg>
      ),
    },
    {
      id: 'tool-asana',
      name: 'Asana',
      category: 'Team Management',
      freq: 587.33,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M4 18V6l10 6-10 6zm6-6l8-4.8v9.6L10 12z"/>
        </svg>
      ),
    },
    {
      id: 'tool-linear',
      name: 'Linear',
      category: 'Project Tracking',
      freq: 622.25,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <circle cx="7" cy="7" r="2"/><circle cx="12" cy="7" r="2"/><circle cx="17" cy="7" r="2"/>
          <circle cx="7" cy="12" r="2"/><circle cx="12" cy="12" r="2.5"/><circle cx="17" cy="12" r="2"/>
          <circle cx="7" cy="17" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
        </svg>
      ),
    },
    {
      id: 'tool-figma',
      name: 'Figma',
      category: 'Design Systems',
      freq: 659.25,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 2.5L20 12l-8 9.5L4 12 12 2.5zm0 4.2L7.5 12l4.5 5.3 4.5-5.3L12 6.7z"/>
        </svg>
      ),
    },
    {
      id: 'tool-slack',
      name: 'Slack',
      category: 'Communication',
      freq: 698.46,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M12 2a1.5 1.5 0 011.5 1.5V6a1.5 1.5 0 01-3 0V3.5A1.5 1.5 0 0112 2zm0 14a1.5 1.5 0 011.5 1.5v2.5a1.5 1.5 0 01-3 0v-2.5A1.5 1.5 0 0112 16zm-7-5.5A1.5 1.5 0 016.5 9H9a1.5 1.5 0 010 3H6.5A1.5 1.5 0 015 10.5zm11 0a1.5 1.5 0 011.5-1.5h2.5a1.5 1.5 0 010 3h-2.5A1.5 1.5 0 0116 10.5z"/>
        </svg>
      ),
    },
    {
      id: 'tool-notion',
      name: 'Notion',
      category: 'Documentation',
      freq: 740.00,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#FF5C28]">
          <path d="M4 6.5C4 5.12 5.12 4 6.5 4h11C18.88 4 20 5.12 20 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 20 4 18.88 4 17.5v-11zm3 1.5v8l3.5-4.5v4.5h2v-8L9 12.5V8H7z"/>
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="integrations" 
      className="relative bg-white text-[#111827] pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-slate-100"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        {/* Top Pill Badge: • Integration */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-sm transition-all hover:border-orange-300">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28] animate-pulse" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Integration
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#111827] tracking-tight leading-[1.18] max-w-2xl mx-auto mb-16 sm:mb-20">
          Seamless Integrations<br />
          With Your Favorite Tools
        </h2>

        {/* THE CELESTIAL ROTATING ARCH CONTAINER */}
        <div className="relative w-full max-w-[1100px] mx-auto h-[380px] sm:h-[480px] md:h-[560px] lg:h-[620px] overflow-hidden flex items-end justify-center">
          
          {/* ROTATING WHEEL ASSEMBLY (Rotates around center base: 50% 100%) */}
          <div 
            ref={wheelRef}
            style={{
              transformOrigin: '50% 100%',
              willChange: 'transform',
            }}
            className="absolute inset-0 flex items-end justify-center"
          >
            {/* 1. Concentric SVG Circles: Soft Peach Ribbon & Crisp Orange Arc Stroke */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              <svg 
                viewBox="0 0 1100 620" 
                className="w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMax meet"
              >
                <defs>
                  {/* Subtle Grid Pattern for inside the dome */}
                  <pattern id="archGrid" width="22" height="22" patternUnits="userSpaceOnUse">
                    <path d="M 22 0 L 0 0 0 22" fill="none" stroke="#FF5C28" strokeWidth="0.75" strokeOpacity="0.16" />
                  </pattern>

                  {/* Inner Area Peach Soft Gradient */}
                  <radialGradient id="innerDomeGrad" cx="50%" cy="100%" r="90%">
                    <stop offset="0%" stopColor="#FFF2E7" stopOpacity="0.85" />
                    <stop offset="70%" stopColor="#FFF9F5" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                  </radialGradient>

                  {/* Semicircle Peach Ribbon Gradient */}
                  <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFF2E7" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#FFE8D6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FFF2E7" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {/* Inner Grid Area (radius 430px) */}
                <circle cx="550" cy="620" r="430" fill="url(#innerDomeGrad)" />
                <circle cx="550" cy="620" r="430" fill="url(#archGrid)" />

                {/* Wide Peach Curved Ribbon Track (Radius 490px, stroke width 110px) */}
                <circle 
                  cx="550" 
                  cy="620" 
                  r="490" 
                  fill="none" 
                  stroke="url(#ribbonGrad)" 
                  strokeWidth="110" 
                />

                {/* Crisp Outer Orange Arc Line */}
                <circle 
                  cx="550" 
                  cy="620" 
                  r="490" 
                  fill="none" 
                  stroke="#FF5C28" 
                  strokeWidth="1.75" 
                  className="opacity-95"
                />

                {/* Faint Inner Boundary Line */}
                <circle 
                  cx="550" 
                  cy="620" 
                  r="380" 
                  fill="none" 
                  stroke="#FF5C28" 
                  strokeWidth="1" 
                  strokeOpacity="0.15" 
                />
              </svg>
            </div>

            {/* 2. 24 Circular Icon Badges Orbiting the 360° Wheel Arc */}
            <div className="absolute inset-0 pointer-events-none">
              {tools.map((tool, idx) => {
                // Angle for each badge: index 0 is at 90° (Apex), decrementing by 15° clockwise
                const angleDeg = 90 - (idx * 15);
                const angleRad = (angleDeg * Math.PI) / 180;

                // Center is (50%, 100%), Radius is rx=44.5%, ry=79% (490px radius in 1100x620 viewbox)
                const xPercent = 50 + 44.5 * Math.cos(angleRad);
                const yPercent = 100 - 79 * Math.sin(angleRad);

                const isActive = activeTool?.id === tool.id;

                return (
                  <div
                    key={tool.id}
                    style={{
                      left: `${xPercent}%`,
                      top: `${yPercent}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="absolute pointer-events-auto z-20"
                  >
                    {/* The Badge with Dynamic Counter-Rotation via ref */}
                    <div
                      ref={(el) => (badgeRefs.current[idx] = el)}
                      onMouseEnter={() => {
                        isHoveredRef.current = true;
                        setActiveTool(tool);
                        playTone(tool.freq);
                      }}
                      onMouseLeave={() => {
                        isHoveredRef.current = false;
                        setActiveTool(null);
                      }}
                      onClick={() => playTone(tool.freq * 1.2)}
                      className="relative group cursor-pointer"
                    >
                      {/* The Crisp White Circular Badge */}
                      <div 
                        className={`w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] border border-slate-100 ${
                          isActive 
                            ? 'scale-125 border-orange-400 shadow-[0_12px_32px_rgba(255,92,40,0.3)] ring-4 ring-orange-500/15 -translate-y-1' 
                            : 'group-hover:scale-115 group-hover:border-orange-300 group-hover:shadow-[0_12px_28px_rgba(255,92,40,0.2)]'
                        }`}
                      >
                        {tool.icon}
                      </div>

                      {/* Tooltip on Hover */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-30 whitespace-nowrap">
                        <div className="px-2.5 py-1 rounded-md bg-[#0F172A] text-white text-[11px] font-semibold shadow-lg">
                          {tool.name}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. STATIC TEXT CONTENT INSIDE THE DOME (Fixed / non-spinning, perfectly framed inside inner grid) */}
          <div className="absolute top-[50%] sm:top-[47%] md:top-[45%] inset-x-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-auto max-w-xl mx-auto animate-dome-rise">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/95 border border-orange-200/90 shadow-sm mb-1 sm:mb-1.5 transition-all">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C28] animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#FF5C28] uppercase">
                {activeTool ? `${activeTool.name} Ecosystem` : dynamicStatements[cyclingIndex].badge}
              </span>
            </div>

            {/* Main Heading */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-[1.18] max-w-md mx-auto mb-1.5 drop-shadow-xs">
              {activeTool ? (
                <span>Power Up With <span className="text-[#FF5C28]">{activeTool.name}</span></span>
              ) : (
                <span>Connect Everything.<br className="hidden sm:inline" /> Automate Everywhere.</span>
              )}
            </h3>

            {/* Dynamic Animated Text Coming from Below */}
            <div className="relative h-9 sm:h-11 flex items-center justify-center overflow-hidden w-full max-w-md my-0.5">
              <div 
                key={activeTool ? activeTool.id : cyclingIndex} 
                className="animate-text-cycle-up flex flex-col items-center text-center"
              >
                <p className="text-xs sm:text-sm md:text-[14px] text-slate-600 font-medium leading-snug px-4">
                  {activeTool 
                    ? `Bi-directional live bridge for ${activeTool.name} with automated AI triggers, background sync, and smart alerts.`
                    : dynamicStatements[cyclingIndex].text
                  }
                </p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 border border-orange-200/70 text-[10px] sm:text-[11px] font-semibold text-slate-700 shadow-xs hover:border-orange-400 transition-colors">
                <span className="text-[#FF5C28]">⚡</span>
                <span>Instant 2-Way Sync</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 border border-orange-200/70 text-[10px] sm:text-[11px] font-semibold text-slate-700 shadow-xs hover:border-orange-400 transition-colors">
                <span className="text-[#FF5C28]">🤖</span>
                <span>Zero-Code Triggers</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 border border-orange-200/70 text-[10px] sm:text-[11px] font-semibold text-slate-700 shadow-xs hover:border-orange-400 transition-colors">
                <span className="text-[#FF5C28]">🔒</span>
                <span>SOC-2 Certified</span>
              </span>
            </div>
          </div>

          {/* 4. Center Active Tool Highlight / Ambient Info Pill */}
          <div className="relative z-10 mb-2 sm:mb-4 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-orange-200/60 shadow-lg transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-[#FF5C28]" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                {activeTool ? `${activeTool.name} — ${activeTool.category}` : 'Explore 100+ integrations with Taskbet'}
              </span>
            </div>
          </div>

          {/* 4. Bottom Misty Gradient Fog Horizon */}
          <div 
            className="absolute bottom-0 inset-x-0 h-28 sm:h-36 pointer-events-none z-30"
            style={{
              background: 'linear-gradient(to top, #FFFFFF 20%, rgba(255, 255, 255, 0.85) 60%, transparent 100%)'
            }}
          />
        </div>

      </div>
    </section>
  );
}
