const plugin = require("tailwindcss/plugin");
const defaultTheme = require('tailwindcss/defaultTheme')

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
	// Storyblok safelist
	safelist: [
		"w-full", "max-w-md", "max-w-sm",
		"flex", "flex-row", "flex-col", "md:flex",
		"items-center", "sm:items-start", "items-start", "items-end", "items-stretch",
		"justify-center", "justify-start", "justify-between", "justify-evenly", "justify-around",
		"w-full", "sm:w-auto", "w-auto", "w-1/2", "w-1/3", "w-1/4", "w-1/5", "w-1/6", "w-1/12",
		"w-2/3", "w-2/4", "w-2/5", "w-2/6", "w-2/12", "w-3/4", "w-3/5", "w-3/6", "w-3/12", "w-4/5", "w-4/6", "w-4/12", "w-5/6", "w-5/12",
		"gap-8",
		"hidden", "md:hidden",
		"w-5/6", "sm:w-full", 
		"mx-auto",
		"text-title-2xl", "font-bold", 
		"text-surface-900", "dark:text-white",
		"bg-surface-300", "dark:bg-surface-700", 
      "checked:bg-surface-300", "checked:dark:bg-surface-700", 
      "aria-checked:bg-surface-300", "aria-checked:dark:bg-surface-700",
      "border-2", "border-transparent", "rounded-lg",
      "placeholder:!text-transparent", "focus:placeholder:text-surface-600", "dark:focus:placeholder:text-surface-400", "placeholder:italic",
      "text-bold", "!text-surface-900", "dark:!text-surface-50", "autofill:!text-primary-900", "dark:autofill:!text-primary-100",
		"input", "peer"
	],

	// Style main container
	container: {
      center: true,
      padding: "2rem",
    },

	// Define theme
	theme: {
		// Define breakpoints (min-width)
		screens: {
			'xs':  '320px',
			'sm':  '480px',
			'md':  '768px',
			'lg':  '992px',
			'xl':  '1200px',
			'2xl': '1440px',
			'3xl': '1920px',
		},
		fontSize: {
         xs: ['10px', '14px'],
         sm: ['12px', '14px'],
         base: ['14px', '18px'],
         lg: ['16px', '18px'],
         xl: ['18px', '24px'],
         '2xl': ['20px', '24px'],
         '3xl': ['24px', '28px'],
         '4xl': ['28px', '32px'],
         '5xl': ['32px', '36px'],
         '6xl': ['40px', '44px'],
         '7xl': ['48px', '56px'],
         '8xl': ['56px', '60px'],
         '9xl': ['64px', '68px'],
      },

		extend: {
			// Extend Font Family
         fontFamily: {
            'body': ['quasimoda', ...defaultTheme.fontFamily.sans],
            'title': ['Josefin Sans', ...defaultTheme.fontFamily.sans],
            'titlemono': ['attribute-mono', ...defaultTheme.fontFamily.mono],
         },
         // Extend Font Size
         fontSize: {
            '2xs': ['8px', '10px'],
            '10xl': ['72px', '76px'],
            '11xl': ['80px', '84px'],
				'title-5xl': "clamp(4.6rem,	3.5rem 	 + 10vw,  	 10rem)",
				'title-4xl': "clamp(4rem,		3rem   	 + 8vw,   	 9rem)",
				'title-3xl': "clamp(3.5rem,	2.5rem 	 + 7vw,   	 8rem)",
				'title-2xl': "clamp(3rem,		2rem 		 + 5vw,   	 7rem)",
				'title-xl':  "clamp(2.5rem,	1.5rem 	 + 4.5vw, 	 6rem)",
				'title-lg':  "clamp(2rem,		1.2rem 	 + 4vw,   	 5rem)",
				'title-md':  "clamp(1.5rem,	1rem 		 + 3.5vw, 	 4rem)",
				'title-sm':  "clamp(1.25rem,	0.875rem  + 2.5vw, 	 3rem)",
				'title-xs':  "clamp(1rem, 	 	0.75rem 	 + 1.5vw, 	 1.8rem)",
				'title-2xs': "clamp(0.875rem, 0.625rem  + 1.25vw, 	 1.5rem)",
				'title-3xs': "clamp(0.75rem,  0.5rem 	 + 1vw, 		 1rem)",
				'title-4xs': "clamp(0.5rem, 	0.375rem  + 0.8vw, 	 0.875rem)",
				// might delete these
				'clamp-xs': "clamp(0.5rem, 	0.4375rem + 0.3333vw, 0.6875rem)",
				'clamp-sm': "clamp(0.5625rem, 0.5rem 	 + 0.3333vw, 0.75rem)",
				'clamp-md': "clamp(0.625rem, 	0.5417rem + 0.4444vw, 0.875rem)",
				'clamp-lg': "clamp(0.75rem, 	0.625rem  + 0.6667vw, 1.125rem)",
				'clamp-xl': "clamp(0.875rem, 	0.7917rem + 0.4444vw, 1.125rem)",
				'clamp-2xl': "clamp(1rem, 		0.875rem  + 0.6667vw, 1.375rem)",
				'clamp-3xl': "clamp(1.25rem, 	1.0833rem + 0.8889vw, 1.75rem)",
         },
			// Define theme colors
			colors: {
				primary: {
					DEFAULT: '#14b8a6',
					50: '#dcf4f2',
					100: '#d0f1ed',
					200: '#c4ede9',
					300: '#a1e3db',
					400: '#5bcdc1',
					500: '#14b8a6',
					600: '#12a695',
					700: '#0f8a7d',
					800: '#0c6e64',
					900: '#0a5a51',
				},
				secondary: {
					DEFAULT: '#F34213',
					50: '#fde3dc',
					100: '#fdd9d0',
					200: '#fcd0c4',
					300: '#fab3a1',
					400: '#f77b5a',
					500: '#F34213',
					600: '#db3b11',
					700: '#b6320e',
					800: '#92280b',
					900: '#772009',
				},
				tertiary: {
					DEFAULT: '#0891b2',
					50: '#daeff3',
					100: '#cee9f0',
					200: '#c1e4ec',
					300: '#9cd3e0',
					400: '#52b2c9',
					500: '#0891b2',
					600: '#0783a0',
					700: '#066d86',
					800: '#05576b',
					900: '#044757',
				},
				success: {
					DEFAULT: '#65a30d',
					50: '#e8f1db',
					100: '#e0edcf',
					200: '#d9e8c3',
					300: '#c1da9e',
					400: '#93bf56',
					500: '#65a30d',
					600: '#5b930c',
					700: '#4c7a0a',
					800: '#3d6208',
					900: '#315006',
				},
				warning: {
					DEFAULT: '#fbbf24',
					50: '#fef5de',
					100: '#fef2d3',
					200: '#feefc8',
					300: '#fde5a7',
					400: '#fcd266',
					500: '#fbbf24',
					600: '#e2ac20',
					700: '#bc8f1b',
					800: '#977316',
					900: '#7b5e12',
				},
				error: {
					DEFAULT: '#dc2626',
					50: '#fadede',
					100: '#f8d4d4',
					200: '#f6c9c9',
					300: '#f1a8a8',
					400: '#e76767',
					500: '#dc2626',
					600: '#c62222',
					700: '#a51d1d',
					800: '#841717',
					900: '#6c1313',
				},
				surface: {
					DEFAULT: '#: ',
					50: '#e2e4e5',
					100: '#d8dadd',
					200: '#ced1d4',
					300: '#b1b6bb',
					400: '#777f87',
					500: '#3C4854',
					600: '#36414c',
					700: '#2d363f',
					800: '#242b32',
					900: '#1d2329',
				},
			},
			// Extend Opacity
         opacity: {
            1: '.01', 1.5: '.015', 2: '.02', 2.5: '.025', 3: '.03', 3.5: '.035', 4: '.04', 
            4.5: '.045', 15: '.15', 35: '.35', 45: '.45', 55: '.55', 65: '.65', 
            80: '.8', 85: '.85', 96: '.96', 97: '.97', 98: '.98', 99: '.99',
         },
         // Extend Z-index
         zIndex: {
            2: 2,
            3: 3,
            99: 99,
				999: 999,
         },
			// Extend Spacing
         spacing: {
            13: '3.25rem',
            15: '3.75rem',
            17: '4.25rem',
            18: '4.5rem',
            19: '4.75rem',
            21: '5.25rem',
            22: '5.5rem',
            23: '5.75rem',
            25: '6.25rem',
            26: '6.5rem',
            27: '6.75rem',
            50: '12.5rem',
            54: '13.5rem',
            58: '14.5rem',
            62: '15.5rem',
            66: '16.5rem',
            68: '17rem',
            70: '17.5rem',
            74: '18.5rem',
            76: '19rem',
            78: '19.5rem',
            84: '21rem',
            88: '22rem',
            92: '23rem',
            100: '25rem',
            104: '26rem',
            108: '27rem',
            112: '28rem',
            116: '29rem',
            120: '30rem',
            124: '31rem',
            128: '32rem',
            132: '33rem',
            136: '34rem',
            140: '35rem',
            144: '36rem',
            148: '37rem',
            152: '38rem',
            156: '39rem',
            160: '40rem',
            180: '45rem',
            200: '50rem',
            220: '55rem',
            240: '60rem',
            260: '65rem',
            280: '70rem',
            300: '75rem',
         },
			// Extend Shadows
			boxShadow: {
				'inner-xs-noblur':      'inset 1px  -1px  0 0 #00000040',
				'inner-sm-noblur':      'inset 2px  -2px  0 0 #00000040',
				'inner-md-noblur':      'inset 4px  -4px  0 0 #00000040',
				'inner-md-noblur-grow': 'inset 5px  -5px  0 0 #00000040',
				'inner-lg-noblur':      'inset 6px  -6px  0 0 #00000040',
				'inner-xl-noblur':      'inset 8px  -8px  0 0 #00000040',
				'inner-xxl-noblur':     'inset 10px -10px 0 0 #00000040',
				'xs-noblur':      '-1px  1px  0 0 #00000040',
				'sm-noblur':      '-2px  2px  0 0 #00000040',
				'md-noblur':      '-4px  4px  0 0 #00000040',
				'md-noblur-grow': '-5px  5px  0 0 #00000040',
				'lg-noblur':      '-6px  6px  0 0 #00000040',
				'xl-noblur':      '-8px  8px  0 0 #00000040',
				'xxl-noblur':     '-10px 10px 0 0 #00000040',
			},
			dropShadow: {
				'invis':          '-1px 1px   0px #00000000',
				'xs-noblur':      '-1px 1px   0px #00000040',
				'sm-noblur':      '-2px 2px   0px #00000040',
				'md-noblur':      '-4px 4px   0px #00000040',
				'md-noblur-grow': '-5px 5px   0px #00000040',
				'lg-noblur':      '-6px 6px   0px #00000040',
				'xl-noblur':      '-8px 8px   0px #00000040',
				'xxl-noblur':     '-10px 10px 0px #00000040',
			},
			// Extended Transition Timings
			transitionTimingFunction: {
				'xsmall': 'cubic-bezier(0.18, 0.89, 0.32, 1.23)',
				'small':  'cubic-bezier(0.00, 0.86, 0.62, 1.11)',
				'medium': 'cubic-bezier(0.00, 0.86, 0.67, 1.59)',
				'large':  'cubic-bezier(0.00, 1.89, 0.67, 1.59)',
				'xlarge': 'cubic-bezier(0.00, 1.89, 0.52, 2.25)',
			},
			// Extended Keyframes
			keyframes: {
				zoomInOut: {
					'0%, 100%': { transform: 'scale(100%)'},
					'50%': { transform: 'scale(110%)'},
				},
				zoomOutIn: {
					'0%, 100%': { transform: 'scale(100%)'},
					'50%': { transform: 'scale(90%)'},
				},
				bounceReverse: {
					'0%, 100%': { transform: 'translate(0, 0%)'},
					'50%': { transform: 'translate(0, 7%)'},
				},
				waving: {
					'0%, 100%': { transform: 'translate(0%, 0%) rotate(0) skew(0)'},
					'50%': { transform: 'translate(0%, 5%) rotate(2deg) skew(0, 12deg)'},
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'33%': { transform: 'rotate(3deg)' },
					'66%': { transform: 'rotate(-3deg)' },
				 },
				slideInRight: {
					'0%': { transform: 'translate(-100%, 0)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInLeft: {
					'0%': { transform: 'translate(100%, 0)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInDown: {
					'0%': { transform: 'translate(0%, -100%)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				slideInUp: {
					'0%': { transform: 'translate(0%, 100%)' },
					'100%': { transform: 'translate(0, 0)' },
				 },
				spinReverse: {
					'to': { transform: 'rotate(-360deg)' }
				}
			},
			// Extended Animation
			animation: {
				bounceReverse: 'bounceReverse 1s ease-in-out infinite',
				waving: 'waving 1s ease-in-out infinite',
				wiggle: 'wiggle 1s ease-in-out infinite',
				spinReverse: 'spin 1s linear infinite',
			},
		},
	},

	// Define plugins
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(), 
		plugin(({ matchVariant }) => {
			matchVariant(
			  "nth",
			  (value) => {
				 return `&:nth-child(${value})`;
			  },
			  {
				 values: {
					DEFAULT: 'n', // Default value for `nth:`
					'2n': '2n', // `nth-2n:utility` will generate `:nth-child(2n)` CSS selector
					'3n': '3n',
					'4n': '4n',
					'5n': '5n',
					'6n': '6n',
				 }
			  }
			)
		 }),
	],
}
