/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx}",
    ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#0b6e4f",
          dark: "#084d37",
          light: "#13a070",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e8c048",
        },
        cream: "#fdf8f0",
      },
      fontFamily: {
        amiri: ["Amiri", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease both",
        fadeIn: "fadeIn 0.6s ease both",
        float: "float 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(32px)" },
          to:   { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to:   { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%,100%": { opacity: 1 },
          "50%":     { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
};