/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        AndadaPro: ['"andada pro"', "serif"],
        JosefinSlab: ['"Josefin Slab"', "serif"],
      },
      colors: {
        MyRoyalGreen: "#113e21",
        MyGold: "#b38b59",
        MyLightGray: "#f0f0f0",
        MyLightGold: "#f5f5f5",
        MyAlmostWhite: "#fefefe",
        MyLightgreen: "#b3cf99",
        Mygray: "#909090",
      },
    },
  },
  plugins: [],
};
