module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	plugins: [require('daisyui')],

	theme: {
		screens: {
			sm: '640px',

			md: '768px',

			lg: '1024px',

			xl: '1440px',

			'2xl': '1536px'
		},
		// container: {
		// 	center: true,
		// 	padding: {
		// 		DEFAULT: '0px',
		// 		sm: '0px',
		// 		lg: '0px',
		// 		xl: '0px',
		// 		'2xl': '0px'
		// 	}
		// },
		extend: {
			animation: {
				spin: 'spin 20s linear infinite',
				bounce: 'bounce 4s alternate infinite'
			},
			keyframes: {
				bounce: {
					'0%, 100%': {
						transform: 'translateY(-25%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
					},
					'50%': {
						transform: 'translateY(20%)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
					}
				}
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#000',
					secondary: '#f9f3e9',
					accent: '#edc693',
					neutral: '#555',
					'base-100': '#fff',
					'base-200': '#333',
					'--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
					'--rounded-btn': '0', // border radius rounded-btn utility class, used in buttons and similar element
					'--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
					'--animation-btn': '0.25s', // duration of animation when you click on button
					'--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
					'--btn-text-case': 'uppercase', // set default text transform for buttons
					'--btn-focus-scale': '.95', // scale transform of button when you focus/click it
					'--border-btn': '0px', // border width of buttons
					'--tab-border': '1px', // border width of tabs
					'--tab-radius': '0.5rem' // border radius of tabs
				}
			}
		]
	}
};
