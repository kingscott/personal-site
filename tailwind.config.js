const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {      
      'xs': '574px',
      ...defaultTheme.screens,      
      '3xl': '1792px',
      '4xl': '2048px',
    },
  },
  plugins: [],
}
