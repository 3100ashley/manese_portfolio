/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      brown: "#3B2B27",
      pink: "#E8E1E5",
      purple: {
        300: "#7A6F9B",
        400: "#332A51",
      },
    },
    extend: {
      fontFamily: {
        paytone: ["Paytone One"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
