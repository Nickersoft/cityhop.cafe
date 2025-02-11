import type { Genre } from '../../types';

export const rnb = {
	name: 'R&B',
	emoji: 'microphone',
	stations: {
		korean: {
			displayName: 'Korean Indie/R&B/Hip-Hop Radio',
			trackID: 'IUT1qAhMY4w',
			name: '24/7 Korean Underground Indie/R&B/Hip-hop Radio',
			live: true
		},
		rnb: {
			displayName: 'R&B/Hip-Hop Radio',
			name: 'r&b / hip-hop radio [ chill live stream - 24/7 rnb ]',
			trackID: '86XzuPmMriw',
			live: true
		}
	}
} satisfies Genre;
