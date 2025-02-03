/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'Hhenum': ['Hhenum', 'Helvetica', 'Arial', 'sans-serif']
      },
      keyframes: {
        'fade-out': {
          '0%': { opacity: '1' },
          '75%': { opacity: '1' },
          '100%': { opacity: '0' }
        }
      },
      animation: {
        'fade-out': 'fade-out 2s ease-out forwards'
      }
    },
  },
  plugins: [],
};