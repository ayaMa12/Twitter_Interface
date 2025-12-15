/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',  
  theme: {
    extend: {
     
      gridTemplateColumns: {
        'auto-fit': "0.2fr 4fr 2fr",
         'auto': "0.5fr 4fr",
      },
      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
      },
      colors: {
        jok: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202",
        },

      },
      plugins: [],
    }
  }
}
