/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        cloud: "rgb(var(--color-cloud) / <alpha-value>)",
        aurora: "rgb(var(--color-aurora) / <alpha-value>)",
        steel: "rgb(var(--color-steel) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        glow: "var(--shadow-glow)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgb(var(--color-grid) / 0.07) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-grid) / 0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
