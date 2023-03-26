/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#14172B",
      typography: "#ECF0FF",
      grey: "#5A5F7D",
      "gradient-dark":
        "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(46, 49, 73, 0.1) 107.43%)",
      "gradient-light":
        "linear-gradient(180deg, rgba(236, 240, 255, 0.1) 0%, rgba(46, 49, 73, 0) 107.43%)",
    },
  },
  plugins: [],
};
