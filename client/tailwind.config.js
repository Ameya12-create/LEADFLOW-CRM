/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#8B5CF6",
        dark: "#0F172A",
        card: "#111827",
      },

      boxShadow: {
        glow: "0 0 25px rgba(99,102,241,0.35)",
      },
    },
  },

  plugins: [],
}