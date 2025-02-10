import { Tags } from '$lib/enums';
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
		sleep: {
			displayName: 'Lofi Sleep & Rain Radio',
			name: '24/7 - lofi sleep, lofi rain💤 beats to relax at night - music for insomnia, anxiety, peaceful dreams',
			trackID: 'yOKVwLGSBYE',
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
			tags: [Tags.christmas],
			trackID: 'ask1B-m26aU',
			live: true,
			hidden: true
		}
	}
} satisfies Genre;
