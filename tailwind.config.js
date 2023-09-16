/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'white-f5': '#F5F5F5',
        'white-f9': '#F9F9F9',
        'black-35': '#353535',
        'red': '#F22539',
        'red-hover': '#C00E20',
        'gray-bf': '#BFBFBF',
        'gray-5e': '#5E5E5E',
      },
      backgroundImage: {
        'pokemon-bg': 'url("../src/assets/img/fondoPokemon.png")',
      },
      container: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1152px',
        },
      },
    },
  },
  plugins: [],
}

