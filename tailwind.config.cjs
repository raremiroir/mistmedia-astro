const colors = require('./tailwind/colors.ts')
const font = require('./tailwind/font.ts')

/** @type {import('tailwindcss').Config} */
module.exports = {
	
	// Define content
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	// Style main container
	container: {
      center: true,
      padding: "2rem",
    },

	// Define theme
	theme: {
		extend: {
			// Extended Colors
			colors: colors,
			// Extended font
			fontFamily: font.family,
			fontSize: font.size
		},
	},
	// Define plugins
	plugins: [],
}
