import { createGenre } from '../../schema';
import { Tags } from '$lib/enums';

export const lofi = createGenre({
	name: 'Lofi',
	icon: 'CassetteTape',
	stations: {
		bollywood: {
			displayName: 'Bollywood Lofi Radio',
			name: 'Best of Bollywood Hindi lofi / chill mix playlist | 1 hour non-stop to relax, drive, study, sleep 💙🎵',
			trackID: 'KRA26LhuTP4',
			live: false
		},
		sleep: {
			displayName: 'Lofi Sleep & Rain Radio',
			name: 'lofi sleep, lo-fi rain 💤 8 hours mix 😴 beats to sleep/chill/relax to - music for insomnia & anxiety',
			trackID: 'gWp8xxB2PxM',
			live: false
		},
		coffeeShop: {
			displayName: 'Coffee Shop Radio',
			name: 'Coffee Shop Radio ☕ - 24/7 lofi & jazzy hip-hop beats',
			trackID: 'blAFxjhg62k',
			live: true
		},
		chillHop: {
			displayName: 'ChillHop Radio',
			name: 'Chillhop Radio - jazzy & lofi hip hop beats 🐾',
			trackID: '5yx6BWlEVcY',
			live: true
		},
		girl: {
			name: 'Lofi Girl Radio: Beats to Study/Relax To',
			displayName: 'Lofi Girl Radio: Beats to Study/Relax To',
			trackID: 'jfKfPfyJRdk',
			live: true
		},
		christmas: {
			name: 'Lofi Christmas Radio',
			tags: [Tags.christmas],
			trackID: 'Ru8DQ5f5A6U',
			live: false,
			hidden: true
		}
	}
});
