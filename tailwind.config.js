module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green2d: "#2dcb48",
      },
      backgroundImage: {
        linearGreen: "linear-gradient(to right bottom, rgb(29, 192, 113), rgb(164, 217, 108))",
      },
      aspectRatio: {
        "2/3": "2/3",
        2: "2",
      },
      screens: {
        mobile380: "380px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
