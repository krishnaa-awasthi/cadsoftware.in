"use client";

import Image from "next/image";

// Local fallback for ContainerScroll to avoid missing-module errors.
type ContainerScrollProps = {
  titleComponent?: React.ReactNode;
  children?: React.ReactNode;
};
function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  return (
    <div className="container mx-auto px-6">
      {titleComponent}
      <div>{children}</div>
    </div>
  );
}

export default function PlatformShowcase() {
  return (
    <section className="bg-background overflow-hidden pt-24 pb-32">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-[40px] md:text-[60px] lg:text-[80px] font-medium text-primary leading-[1.05] tracking-tighter mb-8">
              Everything you need in <br />
              <span className="text-zinc-400">one seamless view.</span>
            </h2>
          </>
        }
      >
        {/* The Image Container */}
        <div className="w-full h-full bg-white relative flex flex-col items-center justify-center p-8">
          
          <Image
            src="/cad-hero.jpg" 
            alt="3D CAD Modelling Workspace"
            fill
            className="object-cover rounded-[24px] pointer-events-none"
            priority
          />
          
          {/* Optional: Add a subtle inner shadow overlay to blend the image perfectly with the device bezel */}
          <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] pointer-events-none" />
        </div>
      </ContainerScroll>
    </section>
  );
}