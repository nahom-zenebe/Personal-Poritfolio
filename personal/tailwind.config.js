/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#00C8FF',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

