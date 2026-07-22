import Navbar from "../src/components/layout/Navbar";
import Hero from "../src/components/sections/Hero";
import IntroStrip from "../src/components/sections/IntroStrip";
import AboutUs from "../src/components/sections/AboutUs";
import BentoSolutions from "../src/components/sections/BentoSolutions";
import WhoWeServe from "../src/components/sections/WhoWeServe";
import WhyChooseUs from "../src/components/sections/WhyChooseUs";
import Contact from "../src/components/sections/ContactForm";
import Footer from "../src/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <IntroStrip />
      <AboutUs />
      <BentoSolutions />
      <WhoWeServe />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}