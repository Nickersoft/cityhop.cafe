import { defineConfig } from '@playwright/test';

export default defineConfig({
	// webServer: {
	// 	command: 'bun run build && bun run preview',
	// 	port: 4173
	// },
	reporter: 'html',
	retries: 1,
	testDir: 'e2e'
});
