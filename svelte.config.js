import adapter from '@sveltejs/adapter-auto';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
 
/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({ script: true })],
	kit: {
		alias: {
			$lib: './src/lib',
			$components: './src/components',
			$data: './src/data',
			$images: './src/images'
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
