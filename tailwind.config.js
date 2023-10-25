/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#19A69C',
        brand_lighter_1: '#00c7ae',
        brand_lighter_2: '#eafaf9',
        light_gray: '#f2f2f2',
      },
      animation: {
        'spin-infinite': 'spin 0.7s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
