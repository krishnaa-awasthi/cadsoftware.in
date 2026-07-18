"use client";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-32 pb-12 px-4 md:px-8 selection:bg-white selection:text-emerald-950">
      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 1: THE CONTACT FORM --- */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20 border-b border-emerald-800/50 pb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Not Sure Which CAD <br/> Software Is Right?
            </h2>
            <p className="text-xl text-emerald-100/70 font-medium mb-10 max-w-md leading-relaxed">
              Tell us about your projects, your team, and your goals - and we'll recommend the CAD solution that fits, with no pressure and no jargon.
            </p>
            
            <div className="space-y-6 text-lg font-medium text-emerald-50">
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Email</span> support@cadsoftware.in</p>
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Phone</span> +91 95823 47229</p>
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Website</span> www.cadsoftware.in</p>
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Location</span> Zartek IT Solutions</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-colors">
                Request a Callback
              </button>
              <button className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-colors">
                Get a Custom Quote
              </button>
            </div>
          </div>

          <div className="bg-emerald-900/50 rounded-[2.5rem] p-10 border border-emerald-800">
            <h4 className="text-2xl font-bold mb-8">Talk to a CAD Expert</h4>
            <form className="space-y-6 flex flex-col">
              <div>
                <label className="block text-sm font-medium text-emerald-200/60 mb-2">Name</label>
                <input type="text" className="w-full bg-emerald-950 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-200/60 mb-2">Work Email</label>
                <input type="email" className="w-full bg-emerald-950 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-200/60 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-emerald-950 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" placeholder="Tell us about your CAD needs..." />
              </div>
              <button type="submit" className="w-full bg-white text-emerald-950 font-bold text-lg py-4 rounded-xl hover:bg-emerald-50 transition-colors mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* --- PART 2: THE MASSIVE FOOTER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-emerald-800/50 pb-20 mb-20 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter mb-6 leading-[0.85]">
              LET'S <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>BUILD.</span>
            </h2>
            <p className="text-2xl text-emerald-100/70 font-medium max-w-xl">
              Tell us about your engineering goals, and we'll engineer the perfect CAD solution.
            </p>
          </div>
          <button className="group bg-white text-emerald-950 px-10 py-6 rounded-full font-bold text-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 flex-shrink-0">
            Start a Conversation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Details & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-emerald-200/60 text-sm font-medium">
          <div className="space-y-4">
            <p className="text-white text-lg font-bold tracking-tight mb-6">Contact</p>
            <p className="hover:text-white transition-colors cursor-pointer">support@cadsoftware.in</p>
            <p className="hover:text-white transition-colors cursor-pointer">+91 95823 47229</p>
            <p>Zartek IT Solutions</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-white text-lg font-bold tracking-tight mb-6">Legal</p>
            <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
            <p className="hover:text-white transition-colors cursor-pointer">Terms of Service</p>
            <p className="hover:text-white transition-colors cursor-pointer">Licensing Agreements</p>
          </div>

          <div className="lg:col-span-2 lg:text-right space-y-4">
            <p className="text-white text-xl font-bold tracking-tight">CADsoftware.in</p>
            <p className="max-w-md lg:ml-auto">
              A division of Zartek IT Solutions. All invoicing, billing, and official transactions are processed securely under Zartek IT Solutions.
            </p>
            <p className="pt-4 text-emerald-500/50">© {new Date().getFullYear()} Zartek IT Solutions. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}