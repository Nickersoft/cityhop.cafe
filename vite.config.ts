import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'WhatSend',
				short_name: 'WhatSend',
				lang: 'en',
				scope: '/',
				start_url: '.',
				display: 'standalone',
				theme_color: '#0c5a51',
				background_color: '#0c5a51',
				dir: 'ltr',
				categories: ['lifestyle', 'productivity', 'utilities'],
				orientation: 'portrait',
				display_override: ['window-controls-overlay', 'standalone', 'browser'],
				description:
					'WhatSend lets you send WhatsApp message to a number without saving it in your contacts.',
				icons: [
					{
						src: 'assets/favicon/icon-192x192.png',
						sizes: '192x192',
						purpose: 'any',
						type: 'image/png'
					},
					{
						src: 'assets/favicon/maskable_icon.png',
						sizes: '1024x1024',
						purpose: 'maskable',
						type: 'image/png'
					},
					{
						src: 'assets/favicon/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'assets/favicon/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				],
				screenshots: [
					{
						src: 'assets/screenshots/1.png',
						sizes: '1440x2880',
						type: 'image/png',
						platform: 'narrow',
						label: 'Home screen of WhatSend'
					},
					{
						src: 'assets/screenshots/2.png',
						sizes: '1440x2880',
						type: 'image/png',
						platform: 'narrow',
						label: 'Dark Mode feature of WhatSend'
					},
					{
						src: 'assets/screenshots/3.png',
						sizes: '1440x2880',
						type: 'image/png',
						platform: 'narrow',
						label: 'Broadcast of WhatSend'
					}
				]
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
