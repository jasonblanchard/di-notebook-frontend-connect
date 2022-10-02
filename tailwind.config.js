const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Atkinson Hyperlegible"],
    },
    extend: {
      colors: {
        primary: {
          50: colors.indigo[50],
          100: colors.indigo[100],
          200: colors.indigo[200],
          300: colors.indigo[300],
          400: colors.indigo[400],
          500: colors.indigo[500],
          600: colors.indigo[600],
          700: colors.indigo[700],
          800: colors.indigo[800],
          900: colors.indigo[900],
        },
        neutral: {
          50: colors.gray[50],
          100: colors.gray[100],
          200: colors.gray[200],
          300: colors.gray[300],
          400: colors.gray[400],
          500: colors.gray[500],
          600: colors.gray[600],
          700: colors.gray[700],
          800: colors.gray[800],
          900: colors.gray[900],
        },
        "success-green": {
          50: colors.green[50],
          100: colors.green[100],
          200: colors.green[200],
          300: colors.green[300],
          400: colors.green[400],
          500: colors.green[500],
          600: colors.green[600],
          700: colors.green[700],
          800: colors.green[800],
          900: colors.green[900],
        },
        "danger-red": {
          50: colors.red[50],
          100: colors.red[100],
          200: colors.red[200],
          300: colors.red[300],
          400: colors.red[400],
          500: colors.red[500],
          600: colors.red[600],
          700: colors.red[700],
          800: colors.red[800],
          900: colors.red[900],
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
