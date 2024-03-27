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
        "primary-800": "#59150E",
        "grey-100": "#F1F0F0",
        "grey-200": "#D0CCCA",
        "grey-300": "#ACA4A1",
        "grey-400": "#857F7D",
        "grey-500": "#615C5A",
        "grey-600": "#3E3B3A",
        "grey-700": "#1F1D1C",
        "peach-100": "#FBF8F8",
      },
    },
  },
  plugins: [],
};
