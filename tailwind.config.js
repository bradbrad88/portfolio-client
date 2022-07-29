/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#7ba54d",
        purple: "#8153c0",
      },
      fontSize: {
        dynamicTitle: "clamp(3.2rem, 10vw, 10rem)",
        dynamicSubtitle: "clamp(2rem, 6vw, 6rem)",
      },
    },
  },
  plugins: [],
};
