/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        100: "25rem",
        200: "50rem",
        18: "4.5rem",
        17: "4.25rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    colors: {
      customRed: "#A01717",
      text: "#111111",
      dividers: "#D9D9D9",
      dividers2: "#F9F9F9",
      white: "#ffff",
    },
  },
  plugins: [],
};
