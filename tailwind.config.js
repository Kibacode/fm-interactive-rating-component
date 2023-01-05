/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "767px" },
        xl: { min: "768px", max: "1440px" },
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
