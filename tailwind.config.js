/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: ["burtons", "sans-serif"],
        // poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
