/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        'custom-green': '#70C156',
        'custom-yellow': '#F9B209',
        'custom-grey': '#D9D9D9',
      }
    },
  },
  plugins: [],
}

