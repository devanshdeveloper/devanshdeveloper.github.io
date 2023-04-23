/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-slow-reserve': 'spin 5s linear infinite reverse',
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        poppins: "Poppins",
        bruno: "Bruno Ace SC",
      },
      colors: {
        brand: {
          dark: "#00beb0",
          default: "#1fe",
        },
        dark: {
          50: "#f1f1f1",
          100: "#f2f4fb",
          200: "#c6c8d7",
          300: "#9195ab",
          400: "#656a83",
          500: "#505050",
          600: "#272934",
          700: "#272934",
          800: "#1f2129",
          900: "#17181e",
          // 100: "#909090",
          // 200: "#808080",
          // 300: "#707070",
          // 400: "#606060",
          // 500: "#505050",
          // 600: "#404040",
          // 700: "#303030",
          // 800: "#202020",
          // 900: "#101010",
        },
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
