module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        280: "280px",
        130: "30rem",
        "1/3": "30%",
      },
      height: {
        98: "23rem",
        180: "180px",
      },
      margin: {
        18: "4.4rem",
      },
      colors: {
        dark1: "#2B3743",
        dark2: "#202D36",
      },
    },
    screens: {
      sn: "500px",
      // => @media (min-width: 500px) { ... }

      so: "555px",
      // => @media (min-width: 500px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      sl: "674px",
      // => @media (min-width: 674px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mc: "950px",
      // => @media (min-width: 950px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      le: "1100px",
      // => @media (min-width: 1100px) { ... }

      lf: "1191px",
      // => @media (min-width: 1191px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
