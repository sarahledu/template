module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.scss", "./src/**/*.svg"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    boxShadow: {
      0: "none",
      60: "0px 2px 4px rgba(0, 0, 0, 0.12)",
      80: "rgba(19, 45, 74, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
      100: "rgba(19, 45, 74, 0.12) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 2px 4px -2px",
      150: "rgba(19, 45, 74, 0.12) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 3px 6px -2px",
      200: "rgba(19, 45, 74, 0.12) 0px 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 7px 14px -4px",
      300: "rgba(19, 45, 74, 0.12) 0px 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 12px 24px -6px",
      400: "rgba(19, 45, 74, 0.12) 0px 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 22px 30px -8px",
    },

    fontFamily: {
      display: ["Roboto Condensed"],
    },
    extend: {
      colors: {
        palette1: "#b7472a",
        palette2: "#cf583a",
        palette3: "#eb9788",
        palette4: "#ffd5ab",
        palette5: "#fff2e5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
