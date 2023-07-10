/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mt_thin: ["mrt-thin"],
        mt_mid: ["mrt-mid"],
        mt_semi: ["mrt-semi"],
        mt_bold: ["mrt-bold"],
        mt_xbold: ["mrt-xbold"],
        rb_thin: ["rb-thin"],
        rb_mid: ["rb-mid"],
        rb_semi: ["rb-semi"],
        rb_bold: ["rb-bold"],
        rb_xbold: ["rb-xbold"],
      },
    },
  },
  plugins: [],
};
