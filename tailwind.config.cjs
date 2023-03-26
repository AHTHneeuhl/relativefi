/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#14172B",
      typography: "#ECF0FF",
      grey: "#5A5F7D",
      loss: "#FF4D4D",
      profit: "#00FFA3",
      asset: "#737BAE",
    },
  },
  plugins: [],
};
