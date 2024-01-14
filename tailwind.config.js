/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors:{
          primary: "#292321",
          secondary: "#402b24",
          tertiary: "#e3dacf",
          quaternary: "#f2ede6"
        },
        fontFamily:{
          primary: ['Lobster', 'sans-serif'],
          secondary: ['Roboto', 'sans-serif']
        }
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1500px"
      },
      rotate: {
        '20': '20deg',
      },
  },
  plugins: [],
}

