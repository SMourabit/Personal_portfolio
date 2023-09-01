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
      backgroundColor: {
        'green-dark': '#0F5132',
        'green-medium': '#344E41',
        'green-light': '#9CAF88',
        'green-pale': '#C6EDC3',
      },
    },
  },
  plugins: [],
}
