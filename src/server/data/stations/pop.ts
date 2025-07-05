import { createGenre } from '$server/schema';

export const pop = createGenre({
	name: 'Pop',
	icon: 'MicrophoneStage',
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
			trackID: 'WnCfvAMM9eY',
			live: true
		},
		cityPop: {
			displayName: 'Japanese City Pop Mix',
			name: 'warm nights in tokyo [ city pop シティ・ポップ ]',
			trackID: 'UaIjnejqfJg',
			live: false
		},
		hits: {
			displayName: 'Top Hits Radio',
			name: 'Best Radio 1 POP Hits [ 24/7 Live ] Best of POP 2025 Songs',
			trackID: 'b-bK2Vn3D38',
			live: true
		}
	}
});
