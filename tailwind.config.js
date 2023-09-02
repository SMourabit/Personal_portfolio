module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
      },
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
      },
      'transR':{
        '0% ,100%':{transform:'translate(-10px)'},
        '50%':{transform:'translateX(0)'}
      },
      'showUp':{
        '0%': { transform: 'translateY(20px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },

      }

     },
      
      animation :{
        'rotate': 'rotateAndDeform 2s linear infinite ' ,
        'trans-right': 'trans 1.5s ease-in-out infinite',
        'transR': 'trans 1.8s ease-in-out infinite',
        'trans-left':'transL 1.5s ease-in-out infinite',
        'showUp': 'showUp 0.5s ease-in-out', // Durée de l'animation et l'interpolation

      },
      
     
      screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra-large screens
      },
      backgroundColor: {
        'green-dark': '#3A5A40',
        'green-medium': '#344E41',
        'green-light': '#819171',
        'green-pale': '#CBD5C0',
      },
      colors:{
        'green-dark': '#3A5A40',
        'green-medium': '#344E41',
        'green-light': '#819171',
        'green-pale': '#CBD5C0',
      }
    },
  },
  plugins: [],
}
