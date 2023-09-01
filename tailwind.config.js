import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
          stone: colors.warmGray,
          sky: colors.lightBlue,
          neutral: colors.trueGray,
          gray: colors.coolGray,
          slate: colors.blueGray,
      },
  },
  },
  plugins: [],
}

