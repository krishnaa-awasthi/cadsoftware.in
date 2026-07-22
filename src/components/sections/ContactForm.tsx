"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-emerald-950 text-white pt-32 px-4 md:px-8 selection:bg-white selection:text-emerald-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-20 border-b border-emerald-800/50 pb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1]">
              Not Sure Which CAD <br/> Software Is Right?
            </h2>
            <p className="text-xl text-emerald-100/70 font-medium mb-10 max-w-md leading-relaxed">
              Tell us about your projects, your team, and your goals - and we'll recommend the CAD solution that fits, with no pressure and no jargon.
            </p>
            
            <div className="space-y-6 text-lg font-medium text-emerald-50">
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Email</span> sayed@zartekitsolutions.com</p>
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Phone</span> +91 97738 21029</p>
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Website</span> www.cadsoftware.in</p>
              <p><span className="text-emerald-500 block text-sm uppercase tracking-widest mb-1">Location</span>C 196 Sector 63, Noida, UP 201301, India</p>
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
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
              <div>
                <label className="block text-sm font-medium text-emerald-200/60 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-emerald-950 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-200/60 mb-2">Work Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-emerald-950 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" 
                  placeholder="john@company.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-200/60 mb-2">How can we help?</label>
                <textarea 
                  rows={4} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-emerald-950 border border-emerald-800/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500" 
                  placeholder="Tell us about your CAD needs..." 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full bg-white text-emerald-950 font-bold text-lg py-4 rounded-xl hover:bg-emerald-50 transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-emerald-400 text-center text-sm font-medium mt-2">
                  Message sent successfully! We'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center text-sm font-medium mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}