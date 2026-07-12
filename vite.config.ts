import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'*': ['vp check --fix'],
		'app/**/*.svelte': ['vp exec --filter ./app -- svelte-check --tsconfig ./tsconfig.json --tsgo']
	},
	lint: {
		options: {
			typeAware: true,
			typeCheck: false
		},
		plugins: ['typescript', 'unicorn']
	},
	fmt: {
		useTabs: true,
		singleQuote: true,
		trailingComma: 'none',
		printWidth: 100,
		sortTailwindcss: {},
		sortPackageJson: false,
		ignorePatterns: ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock']
	}
});
