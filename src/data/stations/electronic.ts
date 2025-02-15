import { createGenre } from '$schema';
import { Tags } from '../../enums';

export const electronic = createGenre({
	name: 'Electronic',
	emoji: 'musical-keyboard',
	stations: {
		halloween1: {
			tags: [Tags.halloween],
			name: '4'.repeat(24),
			trackID: 'Z6ylGHfLrdI',
			live: false,
			hidden: true
		},
		halloween2: {
			tags: [Tags.halloween],
			name: '▋ '.repeat(18),
			trackID: 'Jabkm8f2tYQ',
			live: false,
			hidden: true
		},
		halloween3: {
			tags: [Tags.halloween],
			name: 'รɭץllคฬש שคຊคtץ ןเรгאק ๓ค๏кคг รเг๔๏ ค๏',
			trackID: 'tmlZeYnfw7g',
			live: false,
			hidden: true
		},
		vaporfunk: {
			displayName: 'VaporFunk Station: Vaporwave Radio',
			name: 'VaporFunk Station 📼 | 24/7 Vaporwave Radio',
			trackID: 'cVibfBy77Yg',
			live: true
		},
		chillsynth: {
			displayName: 'ChillSynth FM',
			name: 'ChillSynth FM - lofi synthwave radio for retro dreaming',
			trackID: 'UedTcufyrHc',
			live: true
		},
		synthwave: {
			displayName: 'Synthwave Radio',
			name: 'synthwave radio 🌌 - beats to chill/game to',
			trackID: '4xDzrJKXOOY',
			live: true
		},
		tropicalHouse: {
			displayName: 'Tropical House Radio',
			name: 'The Good Life Radio • 24/7 Live Radio',
			trackID: '36YnV9STBqc',
			live: true
		}
	}
});
