import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-32 pb-12 px-4 md:px-8 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Massive CTA Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-20 mb-20 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter mb-6 leading-[0.85]">
              LET'S <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.8)" }}>BUILD.</span>
            </h2>
            <p className="text-2xl text-zinc-400 font-medium max-w-xl">
              Tell us about your engineering goals, and we'll engineer the perfect CAD solution.
            </p>
          </div>
          <button className="group bg-white text-black px-10 py-6 rounded-full font-bold text-xl flex items-center gap-4 hover:scale-105 transition-transform duration-300 flex-shrink-0">
            Start a Conversation
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Details & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-zinc-500 text-sm font-medium">
          <div className="space-y-4">
            <p className="text-white text-lg font-bold tracking-tight mb-6">Contact</p>
            <p className="hover:text-white transition-colors cursor-pointer">hello@cadsoftware.in</p>
            <p className="hover:text-white transition-colors cursor-pointer">+91 (Insert Number)</p>
            <p>Kanpur, Uttar Pradesh, India</p>
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
            <p className="pt-4 text-zinc-600">© 2026 Zartek IT Solutions. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}