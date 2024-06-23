// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'purple-dark': '#5B21B6',
        'purple-light': '#E9D5FF',
        'purple-lighter': '#F3E8FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
