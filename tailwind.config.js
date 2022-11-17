module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        curvedSpin: {
          "0%": {
            transform: "rotate(0)",
            animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          },
          "50%": {
            transform: "rotate(900deg)",
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "100%": { transform: "rotate(1800deg)" },
        },
      },
      colors: {
        dark: "#00040f",
        light: "#f5f5f5",
        accent: "#00f6ff",
      },
    },
  },
  plugins: [],
};
