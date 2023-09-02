module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {'rotateAndDeform': {

        '0%':{transform: 'scale(1) rotate(0deg)'},
        '50%':{transform: 'scale(1.5) rotate(180deg)'},
        '100%':{transform: 'scale(1) rotate(360deg)'},
      }, 'trans': {
        '0%, 100%': { transform: 'translateX(40px)' },
        '50%': { transform: 'translateX(0)' }
      },
      'transL':{
        '0% ,100%':{transform:'translate(-40px)'},
        '50%':{transform:'translateX(0)'}
      }

     },
      
      animation :{
        'rotate': 'rotateAndDeform 2s linear infinite ' ,
        'trans-right': 'trans 1.5s ease-in-out infinite',
        'trans-left':'transL 1.5s ease-in-out infinite'
      },
      
     
      screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
      },
      backgroundColor: {
        'green-dark': '#0F5132',
        'green-medium': '#344E41',
        'green-light': '#9CAF88',
        'green-pale': '#CBD5C0',
      },
    },
  },
  plugins: [],
}
