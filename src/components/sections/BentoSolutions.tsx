"use client";

import { motion, Variants } from "framer-motion";
import { Layers, Box, Maximize, Image as ImageIcon, ArrowRightLeft, ShieldCheck, ArrowUpRight } from "lucide-react";

// Add the : Variants type to explicitly satisfy TypeScript
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Add the : Variants type here as well
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  }
};

export default function BentoSolutions() {
  return (
    <section id="solutions" className="bg-[#F7F7F8] py-32 px-4 md:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-[10vw] md:text-[6vw] font-bold tracking-tighter text-emerald-900
           leading-[0.9] mb-6">
            OUR CAD SOLUTIONS
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl font-medium">
            Choosing the right CAD software shouldn't be complicated. We work across the full spectrum of CAD technology.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Large Card - 3D Mechanical */}
          <motion.div variants={itemVariants} className="group md:col-span-2 bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 border border-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
              <ArrowUpRight className="w-8 h-8 text-black" />
            </div>
            <div className="h-16 w-16 bg-emerald-400 rounded-3xl mb-8 flex items-center justify-center text-white shadow-xl">
              <Box className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-4 tracking-tight text-black">3D CAD & Mechanical</h3>
            <p className="text-zinc-500 leading-relaxed max-w-md text-lg font-medium">
              Powerful parametric and hybrid 3D modeling platforms for product design, mechanical engineering, and manufacturing.
            </p>
          </motion.div>

          {/* Standard Card - 2D Drafting */}
          <motion.div variants={itemVariants} className="group bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 border border-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
            <div className="h-16 w-16 bg-emerald-400 border border-zinc-200 rounded-3xl mb-8 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-black">2D Drafting</h3>
            <p className="text-zinc-500 leading-relaxed font-medium">
              Fast, accurate, and cost-effective drafting tools for architecture, civil, and mechanical documentation.
            </p>
          </motion.div>

          {/* Standard Card - Sheet Metal */}
          <motion.div variants={itemVariants} className="group bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 border border-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
            <div className="h-16 w-16 bg-emerald-400 border border-zinc-200 rounded-3xl mb-8 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <Maximize className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-black">Sheet Metal & Assembly</h3>
            <p className="text-zinc-500 leading-relaxed font-medium">
              Specialized tools and modules for sheet metal fabrication, weldments, and large assembly management.
            </p>
          </motion.div>

          {/* Standard Card - Rendering */}
          <motion.div variants={itemVariants} className="group bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 border border-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
            <div className="h-16 w-16 bg-emerald-400 border border-zinc-200 rounded-3xl mb-8 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-black">Rendering & Visualization</h3>
            <p className="text-zinc-500 leading-relaxed font-medium">
              Bring your designs to life with photorealistic rendering and visualization tools to present concepts.
            </p>
          </motion.div>

          {/* Standard Card - Licensing & Training */}
          <motion.div variants={itemVariants} className="group bg-white/60 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 border border-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1">
            <div className="h-16 w-16 bg-emerald-400 border border-zinc-200 rounded-3xl mb-8 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-black">Licensing & Training</h3>
            <p className="text-zinc-500 leading-relaxed font-medium">
              We provide licensing guidance, onboarding training, and ongoing technical support to keep teams productive.
            </p>
          </motion.div>

          {/* Wide Dark Card - Migration */}
          <motion.div variants={itemVariants} className="md:col-span-3 bg-emerald-900 text-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="h-16 w-16 bg-white/10 rounded-3xl mb-8 flex items-center justify-center text-white backdrop-blur-md">
              <ArrowRightLeft className="w-8 h-8" />
            </div>
            <h3 className="text-4xl font-bold mb-4 tracking-tight relative z-10">CAD Migration & Upgrades</h3>
            <p className="text-zinc-400 leading-relaxed max-w-2xl text-lg font-medium relative z-10">
              Moving from 2D to 3D? Switching from a legacy system? We help you migrate your existing design data and workflows with minimal disruption.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}