import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", 
        surface: "#F7F7F8", // Subtle off-white for cards
        primary: "#000000",
        secondary: "#52525B", // Zinc 600 for secondary text
        border: "#E4E4E7", // Zinc 200
      },
      borderRadius: {
        'magic-sm': '10px',
        'magic-md': '32px', // The signature Magic UI soft corner
        'magic-full': '9999px',
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;