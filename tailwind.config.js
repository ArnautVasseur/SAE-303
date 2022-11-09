/** @type {import('tailwindcss').Config} */
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow:{
          'simple_green': '0 0 0 4px #222, 0 0 0 6px #89ec5b',
          'simple_red': '0 0 0 4px #222, 0 0 0 6px #eb5a5a',
          'simple_blue': '0 0 0 4px #222, 0 0 0 6px #5b89eb',
          'simple_pink': '0 0 0 4px #222, 0 0 0 6px #DF40F9',
        },
      },
    },
  plugins: [],
}
);