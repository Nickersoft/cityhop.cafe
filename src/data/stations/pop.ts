import type { Genre } from '../../types';

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
			name: 'MIX CANCIONES DE MODA 2023 PARA ENTRENAR LO MAS NUEVO 2023 🌞 LAS MEJORES CANCIONES ACTUALES 2023',
			trackID: 'nESeL2fFQAI',
			live: true
		},
		oldies: {
			displayName: '70s & 80s Hits Radio',
			name: 'Radio 70s 80s Mix [ 24 /7 Live ] Listen 70s Hits with Best of 80s Songs ● Oldies Songs',
			trackID: 'gpsqz2kseiY',
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
