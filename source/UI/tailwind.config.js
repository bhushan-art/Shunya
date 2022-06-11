module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
    },
    // colors: {
    //   "neutrals/7": "#9FB3C8",
    // },
    // colors: {
    //   "gray-primary": "#9FB3C8",
    // },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
