import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "AI Voice Editor has completely transformed my podcast production process. Features are unmatched!",
      author: "Sarah J",
      role: "Podcaster",
      avatarColor: "bg-slate-300",
      featured: true,
    },
    {
      id: 2,
      quote: "The automated transcription feature is a game-changer. It saves me so much time and the accuracy is impressive",
      author: "Emily",
      role: "Content Creator",
      avatarColor: "bg-slate-200",
    },
    {
      id: 3,
      quote: "The clarity and emotional nuance in the generated voices are indistinguishable from professional studio talent.",
      author: "David L",
      role: "Audio Engineer",
      avatarColor: "bg-slate-300",
    },
    {
      id: 4,
      quote: "As a musician, I rely on high-quality audio. This tool has made my editing process so much easier and faster.",
      author: "Mark T",
      role: "Musician",
      avatarColor: "bg-slate-200",
    },
    {
      id: 5,
      quote: "Localized our entire video catalog into 18 languages in just two days. Unbelievable turnaround time!",
      author: "Alex Rivera",
      role: "Video Producer",
      avatarColor: "bg-slate-300",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get previous, active, and next indices
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const activeIndex = currentIndex;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  const prevCard = testimonials[prevIndex];
  const activeCard = testimonials[activeIndex];
  const nextCard = testimonials[nextIndex];

  return (
    <section 
      id="satisfaction" 
      className="relative bg-white text-slate-900 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-slate-100"
    >
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, rgba(255, 92, 40, 0.1) 60%, transparent 80%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
            Our user <br />
            <span className="relative inline-block pb-3 mt-1">
              Satisfaction
              {/* Dual Brand Accent Underline from Image */}
              <span className="absolute bottom-2 inset-x-0 h-[3px] bg-[#0284C7] rounded-full" />
              <span className="absolute bottom-0 inset-x-0 h-[3px] bg-[#FF5C28] rounded-full" />
            </span>
          </h2>
        </div>

        {/* Carousel Slider Row */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          
          {/* Navigation Button: Previous (Left) */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-[20%] sm:left-[23%] lg:left-[25%] -translate-x-1/2 z-30 w-11 h-11 rounded-full bg-white border border-slate-300/80 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Navigation Button: Next (Right) */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-[20%] sm:right-[23%] lg:right-[25%] translate-x-1/2 z-30 w-11 h-11 rounded-full bg-white border border-slate-300/80 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 hover:text-slate-900 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* 3 Cards Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 items-center">
            
            {/* 1. Left Card (Peeking/Dimmed) */}
            <div 
              onClick={prevSlide}
              className="hidden md:flex md:col-span-3 lg:col-span-3 flex-col justify-between p-7 rounded-[26px] bg-white border border-slate-200/70 shadow-sm opacity-60 hover:opacity-85 scale-95 transition-all duration-500 cursor-pointer min-h-[300px]"
            >
              <p className="text-slate-500 text-xs sm:text-[13px] font-medium text-center leading-relaxed my-auto">
                {prevCard.quote}
              </p>
              
              <div className="flex flex-col items-center pt-4">
                <div className={`w-8 h-8 rounded-full ${prevCard.avatarColor} mb-2 shadow-xs`} />
                <h4 className="text-xs font-bold text-slate-800">{prevCard.author}</h4>
                <span className="text-[10px] text-slate-400 font-medium">{prevCard.role}</span>
              </div>
            </div>

            {/* 2. Center Card (Active / Featured with Bold Quotation Marks) */}
            <div className="relative md:col-span-12 lg:col-span-6 z-20 flex justify-center">
              
              {/* Top-Left Large Bold Quotation Mark */}
              <div className="absolute -top-7 -left-3 sm:-left-5 z-20 pointer-events-none select-none">
                <span className="text-[#0A1128] font-serif text-7xl sm:text-8xl leading-none">
                  “
                </span>
              </div>

              {/* Bottom-Right Large Bold Quotation Mark */}
              <div className="absolute -bottom-10 -right-3 sm:-right-5 z-20 pointer-events-none select-none">
                <span className="text-[#0A1128] font-serif text-7xl sm:text-8xl leading-none">
                  ”
                </span>
              </div>

              {/* Main Active Card Body */}
              <div className="relative w-full max-w-[480px] rounded-[30px] bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-8 sm:p-10 flex flex-col justify-between min-h-[330px] sm:min-h-[350px] transition-all duration-500 transform hover:-translate-y-1">
                
                {/* Center Quote */}
                <p className="text-[#0A1128] text-base sm:text-lg lg:text-[20px] font-bold text-center leading-[1.38] tracking-tight my-auto px-2">
                  {activeCard.quote}
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center pt-6">
                  <div className={`w-10 h-10 rounded-full ${activeCard.avatarColor} mb-2.5 shadow-sm ring-4 ring-slate-50`} />
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {activeCard.author}
                  </h4>
                  <span className="text-xs text-slate-400 font-medium mt-0.5">
                    {activeCard.role}
                  </span>
                </div>

              </div>

            </div>

            {/* 3. Right Card (Peeking/Dimmed) */}
            <div 
              onClick={nextSlide}
              className="hidden md:flex md:col-span-3 lg:col-span-3 flex-col justify-between p-7 rounded-[26px] bg-white border border-slate-200/70 shadow-sm opacity-60 hover:opacity-85 scale-95 transition-all duration-500 cursor-pointer min-h-[300px]"
            >
              <p className="text-slate-500 text-xs sm:text-[13px] font-medium text-center leading-relaxed my-auto">
                {nextCard.quote}
              </p>
              
              <div className="flex flex-col items-center pt-4">
                <div className={`w-8 h-8 rounded-full ${nextCard.avatarColor} mb-2 shadow-xs`} />
                <h4 className="text-xs font-bold text-slate-800">{nextCard.author}</h4>
                <span className="text-[10px] text-slate-400 font-medium">{nextCard.role}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-12 sm:mt-14">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'w-7 bg-[#0284C7]' 
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  );
}
