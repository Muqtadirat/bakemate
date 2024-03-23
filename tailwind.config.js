/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#FCEEE9",
        "primary-200": "#F6C1AE",
        "primary-300": "#F28B50",
        "primary-400": "#BF6A38",
        "primary-500": "#8C4C26",
        "primary-600": "#5C3016",
        "primary-700": "#301607",
        "primary-800": "#59150E"
      },
    },
  },
  plugins: [],
};
