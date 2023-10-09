/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        '<md':{'max':'768px'},
        '<lg':{'max':'1246px'}
      },
      width:{
        '75':'300px'
      },
      spacing:{
        '3.75':'15px'
      },
      colors:{
        'bright-orange': '#E38826',
        'dark-cyan': '#006970',
        'very-dark-cyan':'#004241',
        'very-light-gray':'#F2F2F2',
        'transparent-white':'hsla(0, 0%, 100%, 0.75)'
      },
      fontFamily:{
        'font-family-1':['Big Shoulders Display','cursive'],
        'font-family-2':['Lexend Deca','sans-serif']
      }
    },
  },
  plugins: [],
}

