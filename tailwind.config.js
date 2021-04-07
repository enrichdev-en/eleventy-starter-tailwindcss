module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["_site/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
