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
      animation: {
        "drop-in-above": "drop-in-above 400ms ease-in-out 1 forwards",
        "drop-out-above": "drop-out-above 400ms ease-in-out 1 forwards",
        "drop-in-below": "drop-in-below 400ms ease-in-out 1 forwards",
        "drop-out-below": "drop-out-below 400ms ease-in-out 1 forwards",
      },
      keyframes: {
        "drop-in-above": {
          "0%": { opacity: "0", transform: "translate(-50%, -20px)" },
          "100%": { opacity: "1", transform: "translate(-50%, 0)" },
        },
        "drop-out-above": {
          "100%": { opacity: "0", transform: "translate(-50%, -20px)" },
          "0%": { opacity: "1", transform: "translate(-50%, 0)" },
        },
        "drop-in-below": {
          "0%": { opacity: "0", transform: "translate(-50%, 20px)" },
          "100%": { opacity: "1", transform: "translate(-50%, 0)" },
        },
        "drop-out-below": {
          "100%": { opacity: "0", transform: "translate(-50%, 20px)" },
          "0%": { opacity: "1", transform: "translate(-50%, 0)" },
        },
      },
    },
  },
  plugins: [],
};
