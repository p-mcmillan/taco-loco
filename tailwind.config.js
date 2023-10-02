/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        white: "#ffffff", // Define the placeholder color you want to use
      },
    },
  },
  plugins: [],
};
