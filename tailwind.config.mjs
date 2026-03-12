/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060816",
        mist: "#8D9CB8",
        line: "rgba(148, 163, 184, 0.16)",
        panel: "rgba(8, 12, 29, 0.72)",
        cloud: "#78E6FF",
        aurora: "#6EE7B7",
        steel: "#C7D2FE"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(120, 230, 255, 0.08), 0 20px 80px rgba(4, 12, 32, 0.55)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
