/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1180px',
      '2xl': '1440px',
      '3xl': '1680px',
    },
    colors: {
      dark: '#26262f',
      snow: '#f8f9fd',
      primary: '#edbe11',
      blue: '#474875',
      lightblue: '#797bc9',
      transparent: '#00000000'
    },
    fontFamily: {
      opensans: ['OpenSans', 'Arial', 'serif'],
    },
    fontSize: {
      '3xl': ['64px', '68px'],
      '2xl': ['46px', '50px'],
      xl: ['36px', '38px'],
      lg: ['30px', '36px'],
      md: ['24px', '32px'],
      sm: ['17px', '23px'],
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    extend: {
      width: {
        'half-gap-8': 'calc(50% - 32px)',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
        addVariant('child-last', '& > *:last-child');
    }
],
}
