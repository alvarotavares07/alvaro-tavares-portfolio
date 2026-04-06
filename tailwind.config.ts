import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        ink: {
          950: "#050508",
          900: "#0a0a12",
          800: "#10101e",
          700: "#1a1a2e",
        },
        gold: {
          300: "#ffd97d",
          400: "#f5c842",
          500: "#e8b000",
          600: "#c99200",
        },
        electric: {
          400: "#4fffb0",
          500: "#00e87a",
          600: "#00c466",
        },
        silver: {
          100: "#f0f0f6",
          200: "#d8d8e8",
          400: "#9898b0",
          600: "#606078",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
        "line-draw": "lineDraw 1.5s ease forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(78, 255, 176, 0.15)" },
          "50%": { boxShadow: "0 0 60px rgba(78, 255, 176, 0.4), 0 0 100px rgba(78, 255, 176, 0.2)" },
        },
        lineDraw: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
