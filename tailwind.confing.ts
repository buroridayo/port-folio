import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        "deep-green": "#0f2f1f",
        neon: "#00ff88",
      },
      boxShadow: {
        "neon-glow":
          "0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3)",
        "glass-inset":
          "inset 0 0 6px rgba(255, 255, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)",
        "glass-cursor":
          "0 8px 32px rgba(0,0,0,0.3), inset 0 0 8px rgba(255,255,255,0.4)",
        "neon-inner": "inset 0 0 15px rgba(57, 255, 20, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
