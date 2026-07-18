"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "Solutions", href: "#solutions" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Expand on scroll (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        setExpanded(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 font-sans"
    >
      <motion.div
        onMouseEnter={() => !isMobile && setExpanded(true)}
        onMouseLeave={() =>
          !isMobile && window.scrollY < 50 && setExpanded(false)
        }
        animate={{
          width: isMobile
            ? "92vw"
            : expanded
            ? "min(90vw, 850px)"
            : "240px", // Just wide enough for the logo when collapsed at the top
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformOrigin: "center" }}
        className="flex items-center justify-between py-3 px-5 bg-white/60 backdrop-blur-2xl border border-zinc-200/80 rounded-full shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]"
      >
        {/* LOGO */}
        <div
          className={`text-black font-bold tracking-tighter text-lg transition-all ${
            expanded || isMobile ? "text-left" : "mx-auto"
          }`}
        >
          <Link href="/" className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1">
            cadsoftware<span className="text-zinc-400 font-medium">.in</span>
          </Link>
        </div>

        {/* DESKTOP LINKS */}
        {!isMobile && expanded && (
          <motion.div 
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex gap-8 text-sm font-medium text-zinc-600"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group cursor-pointer hover:text-black transition-colors"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </motion.div>
        )}

        {/* RIGHT SIDE (CTA & MOBILE MENU) */}
        <div className="flex items-center gap-3">
          
          {/* DESKTOP CTA BUTTON */}
          {!isMobile && expanded && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-zinc-800 transition shadow-md"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="text-black md:hidden p-1 bg-zinc-100 rounded-full hover:bg-zinc-200 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* MOBILE MENU DROPDOWN */}
      {open && isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mt-3 w-[92vw] rounded-3xl backdrop-blur-2xl bg-white/90 border border-zinc-200 shadow-2xl p-6 flex flex-col gap-6 md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-600 hover:text-black text-lg font-medium border-b border-zinc-100 pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="w-full bg-black text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 mt-2">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}