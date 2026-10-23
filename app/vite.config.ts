import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig, lazyPlugins } from 'vite-plus';

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
	plugins: lazyPlugins(() => [
		sveltekit({
			experimental: { remoteFunctions: true },
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),
			compilerOptions: { experimental: { async: true } },
			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter({ runtime: 'nodejs24.x' })
		}),
		tailwindcss(),
		icons({
			compiler: 'svelte'
		})
	])
});
