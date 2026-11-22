import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: {
          cream: "#F5F3EF",
          card: "#ECE9E2",
          border: "rgba(18, 19, 22, 0.08)",
        },
        obsidian: {
          black: "#0B0D11",
          card: "#151921",
          border: "rgba(255, 255, 255, 0.08)",
        },
        blueprint: {
          slate: "#1E242F",
          muted: "#4B5563",
        },
        carbon: {
          text: "#121316",
          muted: "#4A4D57",
        },
        cloud: {
          blue: "#1D4ED8",
          electric: "#3B82F6",
          dark: "#172554",
        },
        safety: {
          amber: "#EA580C",
          glow: "#F97316",
        },
        telemetry: {
          green: "#10B981",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "Cabinet Grotesk", "Bebas Neue", "sans-serif"],
        body: ["var(--font-jakarta)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};

export default config;
