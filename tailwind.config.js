const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: "#FB262A",
        brown: "#32090D",
        "dark-blue": "#05031B",
      },
      backgroundImage: (theme) => ({
        "hero-bg": "url('/hero-bg.jpg')",
      }),
      gradientColorStops: (theme) => ({
        ...theme("colors"),
        primary: "#190d3a",
        secondary: "#04011D",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
