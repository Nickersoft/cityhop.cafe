import { defineConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';

import icons from 'unplugin-icons/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		icons({
			compiler: 'svelte'
		})
	]
});
