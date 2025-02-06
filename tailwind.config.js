/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#5273e8",
        secondary: "#fbf9f9",
        success:"#fbfaf9"
      },
      container:{
        center:true,
       padding: {
         DEFAULT: '1rem',
         sm: '2rem',
         md: '3rem',
         lg: '4rem',
         xl: '5rem',
         '2xl':'6rem',
       }
      }
    },
  },
  plugins: [],
}