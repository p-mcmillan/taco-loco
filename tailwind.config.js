/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        white: "#ffffff", // Define the placeholder color you want to use
      },
      fontFamily: {
        Chango: ["Chango", "Gabarito"],
        Roboto: ["Roboto", "sans-serif"],
        Chapillada: ["Chapillada"],
        Helvetica: ["Helvetica"],
      },
    },
  },
  plugins: [],
};
