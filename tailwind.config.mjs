/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
			salmon: 'var(--color-salmon)',
			lavender: 'var(--color-lavender)',
			azure: 'var(--color-azure)',
			indigo: 'var(--color-indigo)',
			blue: 'var(--color-blue)',
			cream: 'var(--color-cream)',
			white: 'white',
			transparent: 'transparent',
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
		  sm: ['22px', '23px'],
		  xs: ['17px', '20px'],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/container-queries")],
}
