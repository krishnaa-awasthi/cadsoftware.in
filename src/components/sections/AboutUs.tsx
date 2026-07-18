"use client";

export default function AboutUs() {
  return (
    <section id="about" className="bg-emerald-950 text-white py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">About Us</span>
          <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Powered by <br />Zartek IT Solutions
          </h2>
          <p className="text-xl text-emerald-100/70 font-medium leading-relaxed mb-6">
            CADsoftware.in is brought to you by Zartek IT Solutions, an established IT and software solutions company with years of experience serving businesses across engineering, design, and manufacturing sectors. 
          </p>
          <p className="text-xl text-emerald-100/70 font-medium leading-relaxed border-l-2 border-emerald-500 pl-6">
            All sales, licensing, billing, and support for CADsoftware.in are handled directly by Zartek IT Solutions—giving you the reliability and accountability of a registered, established company behind every transaction.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10">
          <h3 className="text-3xl font-bold mb-6">Your Single Point of Contact</h3>
          <p className="text-lg text-emerald-100/70 leading-relaxed mb-6">
            CADsoftware.in is built on one simple idea: businesses need CAD software that works for them, not the other way around. With years of experience helping engineering firms, manufacturers, architects, and design studios select and implement CAD systems, we act as your trusted advisor—not just a vendor.
          </p>
          <p className="text-lg text-emerald-100/70 leading-relaxed mb-6">
            We work across multiple leading CAD platforms. This means our recommendations are based on your needs, your budget, your team's skill level, your industry standards, and your long-term goals—not on pushing a single product.
          </p>
          <p className="text-lg text-white font-bold leading-relaxed">
            Our promise: You tell us what you're trying to design, build, or document. We tell you the best software to do it.
          </p>
        </div>
      </div>
    </section>
  );
}