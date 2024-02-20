import type { Genre } from '$lib/types';

export const jazz = {
	name: 'Jazz',
	emoji: 'saxophone',
	stations: {
		relaxing: {
			displayName: 'Relaxing Jazz Radio',
			name: 'Warm Jazz Relaxing Music ☕ Cozy Cabin with Coffee Shop Ambience | Relax Jazz Music for Study, Work',
			trackID: 'L5v9NRuWp8o',
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
			name: 'Positive Bossa Nova Jazz Music for Relax, Good Mood - Paris Cafe Ambience',
			trackID: 'g6bn6XrhYdc',
			live: true
		},
		christmas1: {
			name: 'Relaxing Christmas Jazz',
			trackID: 'lJlEQim-yMo',
			hidden: true,
			live: false
		},
		christmas2: {
			name: 'Instrumental Christmas Jazz',
			trackID: '4KYZO6eEugY',
			hidden: true,
			live: false
		}
	}
} satisfies Genre;
