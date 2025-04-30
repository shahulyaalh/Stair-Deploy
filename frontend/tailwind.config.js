/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 8s infinite",
      },
      keyframes: {
        blob: {
          "0%": { borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" },
          "50%": { borderRadius: "60% 40% 40% 60% / 50% 60% 40% 50%" },
          "100%": { borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%" },
        },
      },
    },
    extend: {
      animation: {
        scaleFade: "scaleFade 2s ease-in-out infinite",
        "spin-slow": "spin 10s linear infinite",
      },
      keyframes: {
        scaleFade: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
