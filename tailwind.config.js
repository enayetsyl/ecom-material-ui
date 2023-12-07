/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],

  theme: {
    extend: {
      colors:{
        'one': '#444444',
        "two": '#f8f8f8'
      },
      fontFamily:{
        main:['Jost', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

