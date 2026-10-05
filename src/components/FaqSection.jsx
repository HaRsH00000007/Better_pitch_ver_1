import React, { useState } from 'react';
import { ChevronUp, ChevronRight, Headphones, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // 0 = first item "What is Taskbet ?" open by default

  // Play pleasant lightweight Web Audio synth tone on interaction
  const playTone = (freq = 480) => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    } catch {
      // Audio context might be restricted before first gesture
    }
  };

  const faqs = [
    {
      id: 'faq-1',
      question: 'What is Taskbet ?',
      answer:
        'Yes! Most AI task tools integrate with popular apps like Slack, Google Workspace, Microsoft Teams, Zoom, Trello, and more, allowing you to centralize all your workflows in one place.organize personal tasks, as well as by teams to manage projects.',
      soundFreq: 523.25,
    },
    {
      id: 'faq-2',
      question: 'How does AI help with task management?',
      answer:
        'AI analyzes deadlines, workload, and project priorities to automatically suggest optimal schedules, detect bottlenecks before they occur, and draft progress summaries effortlessly.',
      soundFreq: 587.33,
    },
    {
      id: 'faq-3',
      question: 'Can this tool integrate with other apps?',
      answer:
        'Taskbet seamlessly connects with over 100+ platforms including Slack, Google Calendar, GitHub, Figma, Notion, and Zapier to ensure seamless continuous sync.',
      soundFreq: 659.25,
    },
    {
      id: 'faq-4',
      question: 'Does it automatically prioritize tasks?',
      answer:
        'Yes! Our intelligent priority engine evaluates project dependencies, urgency levels, and team bandwidth in real time to recommend the next best action.',
      soundFreq: 698.46,
    },
    {
      id: 'faq-5',
      question: 'Can it track progress in real-time?',
      answer:
        'Absolutely. Real-time dashboards, live milestone meters, and smart burndown analytics give you an up-to-the-minute overview across all active streams.',
      soundFreq: 783.99,
    },
    {
      id: 'faq-6',
      question: 'Is it easy to use for beginners?',
      answer:
        'Taskbet is designed with a clean, intuitive drag-and-drop workspace and guided onboarding templates so any team member can get productive within minutes.',
      soundFreq: 880.00,
    },
  ];

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
      playTone(400);
    } else {
      setOpenIndex(index);
      playTone(faqs[index].soundFreq);
    }
  };

  return (
    <section 
      id="faq" 
      className="relative bg-[#FAFAFA] text-[#111827] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-slate-200/60"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Center Pill Badge: • Asked Questions */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm transition-all hover:border-orange-300">
            <span className="w-2 h-2 rounded-full bg-[#FF5C28] animate-pulse" />
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Asked Questions
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] tracking-tight text-center mb-16 sm:mb-20">
          Frequently Asked Questions
        </h2>

        {/* 2-COLUMN LAYOUT: Left Support Card & Right FAQ List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Looking for More Information? Card */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/70 shadow-sm flex flex-col items-center text-center justify-center min-h-[380px] lg:sticky lg:top-24">
            
            {/* Top Orange Circular Badge with Headset Icon */}
            <div className="w-16 h-16 rounded-full bg-[#FF5C28] flex items-center justify-center text-white shadow-lg shadow-orange-500/25 mb-6 transition-transform duration-300 hover:scale-105">
              <Headphones className="w-7 h-7 stroke-[2.2]" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#111827] leading-tight mb-3">
              Looking for More<br />Information?
            </h3>

            {/* Subtitle */}
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[240px] mb-8 font-normal">
              Browse our help center or connect with our support team to get the answer
            </p>

            {/* CTA Button: Get Started > */}
            <button 
              onClick={() => playTone(600)}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/10 transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>Get Started</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#0F172A] flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
            </button>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: FAQ ACCORDION LIST */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/70 shadow-sm overflow-hidden transition-all duration-300"
                >
                  {/* Accordion Header / Question Row */}
                  <div
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between p-5 sm:p-6 cursor-pointer group"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-[#111827] tracking-tight group-hover:text-[#FF5C28] transition-colors pr-4">
                      {faq.question}
                    </h4>

                    {/* Right Toggle Button: Solid Orange square when open, or chevron right when closed */}
                    {isOpen ? (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF5C28] text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300">
                        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-slate-600 flex items-center justify-center flex-shrink-0 group-hover:text-[#FF5C28] transition-colors">
                        <ChevronRight className="w-5 h-5 stroke-[2.2]" />
                      </div>
                    )}
                  </div>

                  {/* Accordion Content / Answer */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-xs sm:text-[13px] leading-relaxed border-t border-slate-100/60 pt-3 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
