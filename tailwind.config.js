/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screens:{
        'wideScreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tailScreen':{'raw':'(min-scpect-ratio:1/2)'},
      },
      keyframes:{
        'menueAnimatation':{
          '0%':{transform:'scaleY(0)'},
          '70%':{transform:'scaleY(1.5)'},
          '100%':{transform:'scaleY(1)'}
        }
      },
      animation:{
        'menueAnimatation':'menueAnimatation 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

