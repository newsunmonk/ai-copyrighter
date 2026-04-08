import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(__dirname, "index.html"),
    path.join(__dirname, "src/**/*.{js,jsx}"),
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0f0f13",
        panel: "#171822",
        panelSoft: "#1d1f2b",
        borderSoft: "rgba(255, 255, 255, 0.08)",
        accent: "#8b5cf6",
        accentSoft: "#a78bfa",
        accentDeep: "#6d28d9",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139, 92, 246, 0.24), 0 12px 40px rgba(76, 29, 149, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(139, 92, 246, 0.18), transparent 40%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        "hero-grid": "auto, 32px 32px, 32px 32px",
      },
      fontFamily: {
        display: ["Pretendard", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 1.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.45 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
