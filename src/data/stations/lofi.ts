import type { Genre } from '$lib/types';

export const lofi = {
	name: 'Lofi',
	emoji: 'hot-beverage',
	stations: {
		bollywood: {
			displayName: 'Bollywood Lofi Radio',
			name: 'Hindi Lofi 🎵 | Chill n Relax | 24/7 Bollywood Radio',
			trackID: 'RRb5XV993W0',
			live: true
		},
		coffeeShop: {
			displayName: 'Coffee Shop Radio',
			name: 'Coffee Shop Radio ☕ - 24/7 lofi & jazzy hip-hop beats',
			trackID: 'lP26UCnoH9s',
			live: true
		},
		chillHop: {
			displayName: 'ChillHop Radio',
			name: 'Chillhop Radio - jazzy & lofi hip hop beats 🐾',
			trackID: '5yx6BWlEVcY',
			live: true
		},
		girl: {
			displayName: 'Lofi Girl Radio: Beats to Study/Relax To',
			name: 'lofi hip hop radio 📚 - beats to relax/study to',
			trackID: 'jfKfPfyJRdk',
			live: true
		},
		christmas: {
			name: 'Lofi Christmas Radio',
			trackID: 'ask1B-m26aU',
			live: true,
			hidden: true
		}
	}
} satisfies Genre;
