import { createGenre } from '$schema';

export const pop = createGenre({
	name: 'Pop',
	emoji: 'guitar',
	stations: {
		spanish: {
			displayName: 'Spanish Hits Radio',
			name: 'Fiesta Latina Mix 2024 - Maluma, Shakira, Daddy Yankee, Wisin, Nicky Jam - Pop Latino Reggaeton',
			trackID: 'dE4xDQbS-9c',
			live: true
		},
		oldies: {
			displayName: '70s & 80s Hits Radio',
			name: 'Radio 70s 80s Mix [ 24 /7 Live ] Listen 70s Hits with Best of 80s Songs ● Oldies Songs',
			trackID: '_kDdKzJ6gLg',
			live: true
		},
		cityPop: {
			displayName: 'Japanese City Pop Mix',
			name: 'warm nights in tokyo [ city pop シティ・ポップ ]',
			trackID: 'TYwQtMGIjF8',
			live: false
		},
		hits: {
			displayName: 'Top Hits Radio',
			name: "Hits Radio 1 Live Pop Radio' Top Hits 2023",
			trackID: '8M0AvPvPg0A',
			live: true
		}
	}
});
