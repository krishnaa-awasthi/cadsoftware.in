"use client";
import { CheckCircle2 } from "lucide-react";

export default function IntroStrip() {
  const points = [
    "Affordable, powerful 2D drafting and documentation",
    "Full-featured 3D mechanical design and modeling",
    "Assembly design, sheet metal, or surfacing tools",
    "A smooth upgrade path from 2D to 3D",
    "Software that works with your existing file formats and workflows"
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-emerald-900 mb-8 leading-tight">
          Choosing the right CAD software shouldn't be complicated.
        </h2>
        <p className="text-xl text-zinc-500 font-medium leading-relaxed mb-12">
          Every industry, team, and workflow is different—and so is the software that fits it best. That's why CADsoftware.in works across the full spectrum of CAD technology, so you get unbiased guidance and the right tool for the job, not a one-size-fits-all pitch.
        </p>
        
        <div className="bg-[#F7F7F8] rounded-[2rem] p-8 md:p-12 text-left border border-zinc-100 shadow-sm">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6">Whether you need:</h3>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-lg text-zinc-700 font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl text-emerald-900 font-bold border-t border-zinc-200 pt-6">
            We help you get there—with the right software, right licensing, and right support.
          </p>
        </div>
      </div>
    </section>
  );
}