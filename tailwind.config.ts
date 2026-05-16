import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core S3 fresh-sage palette
        parchment: "#FBF8F3",
        "sage-mist": "#EBEFE4",
        blush: "#F5E9E0",
        cocoa: "#2C2925",
        ink: "#2D2418",
        sage: "#7C9070",
        "sage-deep": "#5F7253",
        terracotta: "#C57B5C",
        // Aliases consumed by copied booking templates
        cream: "#F5E9E0",
        stone: "#2C2925",
        bark: "#443F38",
        flax: "#7C9070",
        bg: "#2C2925",
        primary: "#7C9070",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
