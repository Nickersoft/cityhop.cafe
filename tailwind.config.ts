import daisyui from 'daisyui';
import themes from 'daisyui/src/colors/themes';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['DM Sans']
		},
		extend: {}
	},
	daisyui: {
		themes: [
			{
				dark: {
					...themes['[data-theme=dark]'],
					primary: '#EAB308'
				}
			}
		]
	},
	plugins: [daisyui]
};
