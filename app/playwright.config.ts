import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	reporter: 'html',
	retries: 1,
	workers: process.env.CI ? 2 : undefined,
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		}
	],
	testDir: 'e2e',
	use: {
		baseURL: 'http://127.0.0.1:4173'
	},
	webServer: {
		command: 'vp dev --host 127.0.0.1 --port 4173 --strictPort',
		reuseExistingServer: !process.env.CI,
		url: 'http://127.0.0.1:4173'
	}
});
