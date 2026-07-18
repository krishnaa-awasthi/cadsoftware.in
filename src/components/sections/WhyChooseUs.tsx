"use client";
import { ShieldCheck, Tags, Settings, Headphones, TrendingUp } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { title: "Unbiased Recommendations", desc: "We're not locked into one platform—we recommend what actually fits your workflow and budget.", icon: <ShieldCheck /> },
    { title: "Competitive & Transparent Pricing", desc: "Multiple licensing options to match your team size, from single-seat to enterprise deployments.", icon: <Tags /> },
    { title: "Full Implementation Support", desc: "Installation, configuration, data migration, and training—we don't just sell software, we make sure it works for you.", icon: <Settings /> },
    { title: "Ongoing Technical Support", desc: "Real support from people who understand CAD workflows, not just call-center scripts.", icon: <Headphones /> },
    { title: "Room to Grow", desc: "Start with what you need today, and scale up to more advanced 3D and design tools as your business grows—without switching vendors.", icon: <TrendingUp /> }
  ];

  return (
    <section id="why-us" className="py-32 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <div className="sticky top-32">
            <h2 className="text-5xl font-bold tracking-tighter text-black mb-6 leading-tight">
              WHY CHOOSE <br/>CADSOFTWARE.IN
            </h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              We act as your trusted engineering advisor—not just another software vendor.
            </p>
          </div>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="h-16 w-16 rounded-[1.5rem] bg-[#F7F7F8] border border-zinc-200 flex items-center justify-center text-black flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 font-medium text-lg leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}