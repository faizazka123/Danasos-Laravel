/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/**.vue",
    "./danasos-react/index.html",
    "./danasos-react/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      pink: {
        500: "#ec4899",
      },
      yellow: {
        300: "#fde047",
        500: "#eab308",
      },
      orange: {
        300: "#fdba74",
        600: "#ea580c",
      },
      black: {
        1000: "#000000",
        800: "#252525",
      },
      white: "#ffffff",
      blueGray: "#263238",
      gray: {
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
      },
      lime: {
        500: "#84cc16",
      },
      red: {
        300: "#fca5a5",
        500: "#ef4444",
        600: "#dc2626",
      },
      slate: {
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        700: "#334155",
      },
      green: {
        300: "#86efac",
        600: "#16a34a",
      },
    },
  },
  plugins: [],
}

