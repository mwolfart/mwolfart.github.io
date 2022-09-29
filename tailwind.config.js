/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#000000',
    },
    fontFamily: {
      opensans: ['OpenSans', 'Arial', 'serif'],
    },
    fontSize: {
      xxl: ['46px', '50px'],
      xl: ['36px', '38px'],
      lg: ['30px', '36px'],
      md: ['24px', '32px'],
      sm: ['17px', '23px'],
    },
    extend: {},
  },
  plugins: [],
}
