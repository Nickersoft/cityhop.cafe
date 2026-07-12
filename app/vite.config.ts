import { defineConfig } from 'vite-plus';

import { sveltekit } from '@sveltejs/kit/vite';

import tailwindcss from '@tailwindcss/vite';
import icons from 'unplugin-icons/vite';

export default defineConfig({
	staged: {
		'*': 'vp check --fix'
	},
	server: {
		fs: {
			allow: ['..']
		}
	},
	plugins: [
		sveltekit(),
		tailwindcss(),
		icons({
			compiler: 'svelte'
		})
	]
});
