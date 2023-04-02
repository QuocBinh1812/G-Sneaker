/** @type {import('tailwindcss').Config} */
const gradients = {
  primary_300_400: "linear-gradient(180deg, #FFCC21 0%, #FF963C 100%)",
};
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },

      colors: {
        white: "#FFFFFF",
        black: "#303841",
        yellow: "#F6C90E",
        gray: "#777777",
        // ---------------------
      },
      height: {
        128: "32rem",
        header: "64px",
      },
    },
    screens: {
      laptop: "770px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
