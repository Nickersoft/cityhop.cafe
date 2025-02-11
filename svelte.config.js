import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
    alias: {
      $actions: './src/actions',
      $components: './src/components',
      $consts: './src/consts',
      $data: './src/data',
      $fragments : './src/fragments',
      $icons: './src/icons',
      $enums: './src/enums',
      $lib: './src/lib',
      $state: "./src/state.svelte",
      $modals: './src/modals',
      $styles: './src/styles',
      $types: './src/types',
      $ui: './src/components/ui'
    }
	}
};

export default config;
