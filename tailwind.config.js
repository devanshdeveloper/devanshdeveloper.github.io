/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        brand: {
          dark: "#00beb0",
          default: "#1fe",
        },
        dark: {
          50: "#f1f1f1",
          100: "#909090",
          200: "#808080",
          300: "#707070",
          400: "#606060",
          500: "#505050",
          600: "#404040",
          700: "#303030",
          800: "#202020",
          900: "#101010",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
