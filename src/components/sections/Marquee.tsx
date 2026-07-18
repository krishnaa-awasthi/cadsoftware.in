"use client";

import React from 'react';

// --- Types ---
export interface Logo {
  src: string;
  alt: string;
  gradient: {
    from: string;
    via: string;
    to: string;
  };
}

export interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  logos: Logo[];
  speed?: 'normal' | 'slow' | 'fast';
}

// --- The Marquee Component ---
const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = 'normal', className, ...props }, ref) => {
    
    const durationMap = {
      normal: '40s',
      slow: '80s',
      fast: '15s',
    };
    const animationDuration = durationMap[speed];

    return (
      <>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        
        <section
          ref={ref}
          aria-label={title}
          // Fixed: Removed 'cn' utility and used standard template literal
          className={`w-full bg-[#F7F7F8] py-24 flex justify-center font-sans overflow-hidden ${className || ''}`}
          {...props}
        >
          <div className="w-[95%] max-w-7xl bg-white/60 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-zinc-200/50 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[0.9] max-w-xl">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-zinc-500 font-medium max-w-md leading-relaxed text-balance">
                {description}
              </p>
            </div>

            <div
              className="w-full overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              }}
            >
              <div 
                className="flex w-max items-center gap-6 py-4 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out" 
                style={{ animation: `marquee ${animationDuration} linear infinite` }}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="group relative h-32 w-52 shrink-0 flex items-center justify-center rounded-[1.5rem] bg-white border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 ease-out overflow-hidden hover:-translate-y-1"
                  >
                    <div
                      style={{
                        '--from': logo.gradient.from,
                        '--via': logo.gradient.via,
                        '--to': logo.gradient.to,
                      } as React.CSSProperties}
                      className="absolute inset-0 scale-125 opacity-0 transition-all duration-700 ease-out group-hover:opacity-10 group-hover:scale-100 bg-gradient-to-br from-[var(--from)] via-[var(--via)] to-[var(--to)] z-0"
                    />
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none z-10" />
                    
                    {/* Fallback text if image doesn't load/exist */}
                    <span className="absolute z-10 font-bold text-zinc-300 group-hover:opacity-0 transition-opacity">
                      {logo.alt}
                    </span>

                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="relative z-20 h-12 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

// --- Default Export for page.tsx ---
export default function Marquee() {
  // Dummy data to populate the scroller
  const sampleLogos: Logo[] = [
    { src: "/logos/autocad.png", alt: "AutoCAD", gradient: { from: "#ef4444", via: "#f87171", to: "#fca5a5" } },
    { src: "/logos/solidworks.png", alt: "SolidWorks", gradient: { from: "#3b82f6", via: "#60a5fa", to: "#93c5fd" } },
    { src: "/logos/revit.png", alt: "Revit", gradient: { from: "#0ea5e9", via: "#38bdf8", to: "#7dd3fc" } },
    { src: "/logos/sketchup.png", alt: "SketchUp", gradient: { from: "#22c55e", via: "#4ade80", to: "#86efac" } },
    { src: "/logos/fusion360.png", alt: "Fusion 360", gradient: { from: "#f97316", via: "#fb923c", to: "#fdba74" } },
  ];

  return (
    <MarqueeLogoScroller 
      title="Trusted CAD Platforms"
      description="We authorize, implement, and support the industry's leading software ecosystems."
      logos={sampleLogos}
      speed="normal"
    />
  );
}