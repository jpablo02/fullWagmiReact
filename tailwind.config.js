/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        yellow: '#FFFF00',
        greenPastel: '#77DD77',
        bluePastel: '#AEC6CF',
        purplePastel: '#CFCFCF',
      },
    },
  },
  plugins: [],
};
