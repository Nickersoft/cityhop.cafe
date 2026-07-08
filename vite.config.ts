import { defineConfig } from 'vite-plus';

import { sveltekit } from '@sveltejs/kit/vite';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	staged: {
		'*': ['vp check --fix', 'svelte-check --tsgo']
	},
	fmt: {
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 100,
		sortTailwindcss: {},
		sortPackageJson: false,
		ignorePatterns: ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock']
	},
	plugins: [sveltekit(), tailwindcss()]
});
