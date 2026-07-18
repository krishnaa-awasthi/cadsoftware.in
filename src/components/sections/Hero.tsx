"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Hexagon } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20, restDelta: 0.001 });

  const yTextMain = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacityFade = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scaleGlow = useTransform(smoothProgress, [0, 1], [1, 1.8]);
  const yCard = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#F7F7F8] overflow-hidden font-sans flex flex-col items-center justify-start pt-32">
      <motion.div style={{ scale: scaleGlow }} className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-gradient-to-tr from-zinc-200/50 via-blue-100/40 to-transparent blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <motion.div style={{ y: yTextMain, opacity: opacityFade }} className="relative z-10 w-full flex flex-col items-center text-center px-4 mt-12 pointer-events-none">
        <h1 className="text-[12vw] md:text-[9vw] font-bold tracking-tighter leading-[0.9] text-black">
          WHATEVER CAD
        </h1>
        <h1 className="text-[12vw] md:text-[9vw] font-bold tracking-tighter leading-[0.9] text-transparent" style={{ WebkitTextStroke: "2px rgba(0,0,0,0.9)" }}>
          YOU NEED.
        </h1>
        <p className="text-lg md:text-2xl text-zinc-600 font-medium tracking-tight mt-8 max-w-3xl">
          From 2D drafting to advanced 3D modeling, CADsoftware.in helps you find, license, and implement the right CAD software for your business—no guesswork, no vendor confusion.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 pointer-events-auto">
          {/* Wired CTAs */}
          <a href="#contact" className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:scale-105 transition-transform">
            Talk to a CAD Expert <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#solutions" className="bg-white text-black border border-zinc-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-zinc-50 transition-colors">
            Compare CAD Solutions
          </a>
        </div>
      </motion.div>

      <motion.div style={{ y: yCard }} className="absolute bottom-40 md:bottom-32 z-20 w-[90%] max-w-4xl bg-white/40 backdrop-blur-3xl border border-white/80 p-2 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
        <div className="bg-white/90 rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-white">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg"><Hexagon className="w-8 h-8" /></div>
            <div>
              <h3 className="text-2xl font-bold text-black tracking-tight">We're the Solution.</h3>
              <p className="text-zinc-500 font-medium max-w-md">We tell you the best software to do it—and we make sure you're set up for success from day one.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}