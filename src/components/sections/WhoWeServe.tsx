"use client";
import React from 'react';

export default function WhoWeServe() {
  const industries = [
    "Manufacturing & Mechanical Engineering",
    "Architecture, Engineering & Construction (AEC)",
    "Fabrication & Sheet Metal Industries",
    "Product Design Studios",
    "Educational Institutions"
  ];

  return (
    <section className="w-full bg-[#F7F7F8] py-24 flex flex-col items-center justify-center font-sans overflow-hidden border-t border-zinc-200">
      
      {/* 1. Self-contained animation keyframes */}
      <style>{`
        @keyframes marquee-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter text-emerald-400 leading-[0.9] mb-12">
        WHO WE SERVE
      </h2>
      
      <div className="w-[95%] max-w-7xl bg-white/60 backdrop-blur-2xl rounded-full border border-white shadow-md py-6 relative overflow-hidden flex items-center">
        
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none rounded-l-full" />
        
        {/* 2. The Scrolling Container */}
        <div 
          className="flex w-max whitespace-nowrap items-center hover:[animation-play-state:paused] transition-all"
          // We apply the animation directly here. Translating by -50% with two duplicated arrays creates a perfect infinite loop.
          style={{ animation: 'marquee-text 40s linear infinite' }}
        >
          {/* We map the array TWICE to create a seamless infinite loop */}
          {[...industries, ...industries].map((industry, index) => (
            <div key={index} className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-zinc-400 tracking-tight uppercase px-8">
                {industry}
              </span>
              <span className="text-blue-500 text-2xl font-bold px-4">•</span>
            </div>
          ))}
        </div>

        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none rounded-r-full" />
      </div>
    </section>
  );
}