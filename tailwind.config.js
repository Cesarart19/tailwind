/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {

    extend: {

      fontFamily: {
        "principal": ['"Be Vietnam Pro"', 'sans-serif']
      },

      colors: {

        "bright-red": "hsl(12, 88%, 59%)",
        "Dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "vary-light-gray": "hsl(0, 0%, 98%)",
      },

      backgroundImage: {
        "close-menu":  "url('file:///C:/Users/LUNA/Desktop/tailwind-primera-vez/src/manage-landing-page-master/images/icon-close.svg')",
        "open-menu": "url('file:///C:/Users/LUNA/Desktop/tailwind-primera-vez/src/manage-landing-page-master/images/icon-hamburger.svg')"

      }
    },
  },
  plugins: [],
}

