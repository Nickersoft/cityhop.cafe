import { Genre, type Track } from '$lib/types';
import { draw, listify } from 'radash';

const stations = {
	'Bollywood Lofi Radio': {
		name: 'Hindi Lofi 🎵 | Chill n Relax | 24/7 Bollywood Radio',
		trackID: 'c__Br1xUVK8',
		genre: Genre.lofi
	},
	'Korean Indie/R&B/Hip-Hop Radio': {
		trackID: 'IUT1qAhMY4w',
		name: '24/7 Korean Underground Indie/R&B/Hip-hop Radio',
		genre: Genre.rnb
	},
	'Lofi Girl Radio: Beats to Study/Relax To': {
		name: 'lofi hip hop radio 📚 - beats to relax/study to',
		trackID: 'jfKfPfyJRdk',
		genre: Genre.lofi
	},
	'R&B/Hip-Hop Radio': {
		name: 'r&b / hip-hop radio [ chill live stream - 24/7 rnb ]',
		trackID: '86XzuPmMriw',
		genre: Genre.rnb
	},
	'Japanese City Pop Radio レコード 昭和ポップス': {
		name: '24/7 New J Channel 🇯🇵 Japanese City Pop Radio レコード 昭和ポップス',
		trackID: '7myvWZF2L44',
		genre: Genre.pop
	},
	'Chill Radio': {
		name: 'ＣＨＩＬＬ　ＲＡＤＩＯ ２４／７',
		trackID: 'Su00mfi5QUY',
		genre: Genre.lofi
	},
	'Relaxing Jazz Radio': {
		name: 'Warm Jazz Relaxing Music ☕ Cozy Cabin with Coffee Shop Ambience | Relax Jazz Music for Study, Work',
		trackID: 'L5v9NRuWp8o',
		genre: Genre.jazz
	},
	'Coffee Shop Radio': {
		name: 'Coffee Shop Radio ☕ - 24/7 lofi & jazzy hip-hop beats',
		trackID: 'e3L1PIY1pN8',
		genre: Genre.lofi
	},
	'Classical Chinese Radio': {
		name: 'Relaxing With Chinese Bamboo Flute, Guzheng, Erhu, Pipa || 中國傳統音樂 笛子古箏名曲 放鬆音樂 - 古典音樂 安静純音樂 中國古典長笛音樂',
		trackID: 'dB2KZBsEBwM',
		genre: Genre.classical
	},
	'ChillHop Radio': {
		name: 'Chillhop Radio - jazzy & lofi hip hop beats 🐾',
		trackID: '5yx6BWlEVcY',
		genre: Genre.lofi
	},
	'Medieval Lofi Radio': {
		name: 'Medieval Lofi Music',
		trackID: 'egx5PYBGZAk',
		genre: Genre.lofi
	},
	'The Bootleg Boy: Sad & Sleepy Beats': {
		name: 'lofi hip hop radio 😴 sad & sleepy beats',
		trackID: 'bLlloaA4b4g',
		genre: Genre.pop
	},
	'VaporFunk Station: Vaporwave Radio': {
		name: 'VaporFunk Station 📼 | 24/7 Vaporwave Radio',
		trackID: 'cVibfBy77Yg',
		genre: Genre.electronic
	},
	'Synthwave Radio': {
		name: 'synthwave radio 🌌 - beats to chill/game to',
		trackID: 'MVPTGNGiI-4',
		genre: Genre.electronic
	},
	'Tropical House Radio': {
		name: 'The Good Life Radio • 24/7 Live Radio',
		trackID: '36YnV9STBqc',
		genre: Genre.electronic
	},
	'Top Hits Radio': {
		name: "Hits Radio 1 Live Pop Radio' Top Hits 2023",
		trackID: 'HQtFR3mhzOY',
		genre: Genre.pop
	},
	'Baroque Classical Radio': {
		name: '♫ Baroque Live Music 24/7 - Classical Music from the Baroque Period ♫ クラシック ライブ',
		trackID: '2gO1v2GPMFk',
		genre: Genre.classical
	},
	'Chinese Pop Radio': {
		name: '網路流行音樂電台 | Chinese POP Music 24/7',
		trackID: 'wrYF0HX7Kzc',
		genre: Genre.pop
	},
	'Paris Cafe Radio: Positive Bossa Nova Jazz Music': {
		name: 'Positive Bossa Nova Jazz Music for Relax, Good Mood - Paris Cafe Ambience',
		trackID: 'g6bn6XrhYdc',
		genre: Genre.jazz
	},
	'Spanish Hits Radio': {
		name: 'Lo Mas Nuevo 2023',
		trackID: 'D5bt0BRYrfQ',
		genre: Genre.pop
	}
};

const stationList = listify(stations, (displayName, station) => ({
	...station,
	displayName
}));

const lofiStations = stationList.filter(
	(s) => s.genre === Genre.lofi && s.displayName !== 'Bollywood Lofi Radio'
);

function getRandomLofi() {
	return draw(lofiStations) as Track;
}

export { stations, stationList, getRandomLofi };
