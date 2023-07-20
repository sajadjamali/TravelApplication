/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        'veryExtraLargeMobile': '1170px',
        'largeMobile': '460px',
        'mediumMobile': '440px',
        'smallMobile': '400px',
      }
    },
  },
  plugins: [],
}

