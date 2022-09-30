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
      dark: '#26262f',
      snow: '#f8f9fd',
      primary: '#edbe11',
      blue: '#474875',
      lightblue: '#797bc9',
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
