import { createGenre } from '$server/schema';
import { Tags } from '$lib/enums';

export const jazz = createGenre({
	name: 'Jazz',
	icon: 'PianoKeys',
	stations: {
		relaxing: {
			displayName: 'Relaxing Jazz Radio',
			name: 'Warm Relaxing Jazz Music with Cozy Coffee Shop for Working, Studying, Sleeping',
			trackID: 'fTb6yJ7AlT8',
			live: true
		},
		coffee: {
			displayName: 'Coffee Jazz Music Radio',
			name: 'Coffee Jazz Music - Chill Out Lounge Jazz Music Radio - 24/7 Live Stream - Slow Jazz',
			trackID: 'fEvM-OUbaKs',
			live: true
		},
		work: {
			displayName: 'Work & Jazz Piano Radio',
			name: 'Relaxing Jazz Piano Radio - Slow Jazz Music - 24/7 Live Stream - Music For Work & Study',
			trackID: 'Dx5qFachd3A',
			live: true
		},
		paris: {
			displayName: 'Paris Cafe Radio: Positive Bossa Nova Jazz Music',
			name: 'Cheerful Bossa Nova Jazz Tunes ☕ Relax and Unwind with Paris Café Atmosphere',
			trackID: 'gR_x-cdD9Po',
			live: true
		},
		christmas1: {
			name: 'Relaxing Christmas Jazz',
			trackID: 'lJlEQim-yMo',
			hidden: true,
			tags: [Tags.christmas],
			live: false
		},
		christmas2: {
			name: 'Christmas Starbucks 🎄 Merry Christmas 2025 🎄 24 Hours of Happy Starbucks Jazz Music For Work, Study',
			trackID: 'BFmzf34s9ec',
			hidden: true,
			tags: [Tags.christmas],
			live: false
		}
	}
});
