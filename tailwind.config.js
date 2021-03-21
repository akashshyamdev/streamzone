module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
			serif: ['Roboto Slab', 'ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Oswald'],
			body: ['Open Sans'],
		},
	},
	variants: {
		extend: {
			padding: ['last', 'first', 'odd', 'even'],
		},
	},
	plugins: [],
};
