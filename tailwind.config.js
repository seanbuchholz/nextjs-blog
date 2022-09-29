const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./**/*.{html,php}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.neutral,
      blue: {
        50: '#e9f2fd',
        100: '#d3e5fa',
        200: '#a7cbf6',
        300: '#7bb1f1',
        400: '#4f97ed',
        500: '#2071d1',
        600: '#1c64ba',
        700: '#154b8b',
        800: '#0e325d'
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      'sans': '"Noto Sans", -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
      'serif': '"Noto Serif", Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    },
    fontSize: {
      '2xs': '.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.0625rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '2.5rem',
      '7xl': '2.75rem',
      '8xl': '3rem',
    },
    lineHeight: {
      'leading-tight': '1.25em',
      'leading-normal': '1.5em',
      'leading-relaxed': '1.75em',
      'leading-loose': '2em',
    },
    extend: {
      colors: {
        ocred: {
          50: '#ebd6d3',
          100: '#d7ada7',
          200: '#c2857c',
          300: '#ae5c50',
          400: '#9a3324',
          500: '#7b291d',
          600: '#5c1f16',
          700: '#3e140e',
          800: '#1f0a07',
        },
        navy: {
          50: '#e6e8ec',
          100: '#cdd1d8',
          200: '#b4b9c5',
          300: '#9ba2b2',
          400: '#828b9f',
          500: '#69748b',
          600: '#505d78',
          700: '#374565',
          800: '#05173e'
        },
        tan: {
          50: '#f1f1eb',
          100: '#eeeee6',
          200: '#e7e7dc',
          300: '#e4e4d7',
          400: '#e0e0d2',
          500: '#ddddcd',
          600: '#c7c7b9',
          700: '#b1b1a4',
          800: '#9b9b90'
        },
      }
    },
  },
  plugins: [],
}
