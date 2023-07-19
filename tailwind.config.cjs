/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor:{
				'primary': '#222',
				'secondary': '#252629',
			},
			fontSize:{
				'sl': '3.25rem', // super long
				'subtitle': '2.25rem', // Subtitulos
			},
		},
	},
	plugins: [],
}
