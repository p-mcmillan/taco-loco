/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        white: "#ffffff",
      },
      fontFamily: {
        Chango: ["Chango", "Gabarito"],
        Roboto: ["Roboto", "sans-serif"],
        Chapillada: ["Chapillada"],
        Helvetica: ["Helvetica"],
      },
      colors: {
        greenTaco: "#3f7118",
        grayTaco: "#E8E8E8",
        orangeTaco: "#eb7513",
      },
    },
  },
  plugins: [],
};
