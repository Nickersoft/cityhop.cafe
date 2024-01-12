import type { Genre } from '$lib/types';

export const pop = {
	name: 'Pop',
	emoji: 'guitar',
	stations: {
		chinese: {
			displayName: 'Chinese Pop Radio',
			name: '網路流行音樂電台 | Chinese POP Music 24/7',
			trackID: 'IfNMuFqKBWs',
			live: true
		},
		spanish: {
			displayName: 'Spanish Hits Radio',
			name: 'Lo Mas Nuevo 2023',
			trackID: 'D5bt0BRYrfQ',
			live: true
		},
		cityPop: {
			displayName: 'Japanese City Pop Mix',
			name: 'warm nights in tokyo [ city pop シティ・ポップ ]',
			trackID: 'uUGJpJuwCY4',
			live: false
		},
		hits: {
			displayName: 'Top Hits Radio',
			name: "Hits Radio 1 Live Pop Radio' Top Hits 2023",
			trackID: 'HQtFR3mhzOY',
			live: true
		}
	}
} satisfies Genre;
