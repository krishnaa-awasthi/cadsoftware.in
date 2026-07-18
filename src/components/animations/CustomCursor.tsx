"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Framer motion values for position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for that luxurious "lag" effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12); // Offset by half the width to center it
      cursorY.set(e.clientY - 12);
      if (!isVisible) setIsVisible(true);
    };

    // Track when hovering over elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // 1. Cursor Dot Scaling (for buttons/links)
      if (target.closest('a, button, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // 2. Text Area Magnification & Yellowish Fade
      // Target headings, paragraphs, list items, and form textareas
      const validTextTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'TEXTAREA'];
      if (validTextTags.includes(target.tagName)) {
        target.classList.add('text-hover-magnify', 'active');
      }
    };

    // Remove the effect when the mouse leaves the text
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('active');
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.body.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.body.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.body.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.body.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        * {
          cursor: none !important;
        }

        /* The base transition for text elements */
        .text-hover-magnify {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), color 0.4s ease, border-color 0.4s ease !important;
          transform-origin: center left;
        }

        /* The active state applied via JS when hovered */
        .text-hover-magnify.active {
          transform: scale(1.02) !important;
          color: #fde047 !important; /* Beautiful yellowish fade (Tailwind yellow-300) */
          z-index: 40;
          position: relative;
        }

        /* Special handling specifically for the Contact Form <textarea> */
        textarea.text-hover-magnify.active {
          transform-origin: center center;
          border-color: #fde047 !important;
          background-color: rgba(253, 224, 71, 0.05) !important; 
        }
      `}} />
      
      {/* The Custom Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          mixBlendMode: "difference", 
        }}
        animate={{
          scale: isHovering ? 2.5 : 1, 
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
}