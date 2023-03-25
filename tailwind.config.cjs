/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	
	// Define content
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
		)
	],

	// Style main container
	container: {
      center: true,
      padding: "2rem",
    },

	// Define theme
	theme: {
		extend: {},
	},
	// Define plugins
	plugins: [...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
