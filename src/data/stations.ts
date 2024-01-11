import { type Station } from '$lib/types';
import { objectify } from 'radash';

import { Genres } from './genres';

const stations: Record<string, Station> = {
	bollywoodLofi: {
		displayName: 'Bollywood Lofi Radio',
		name: 'Hindi Lofi 🎵 | Chill n Relax | 24/7 Bollywood Radio',
		trackID: 'RRb5XV993W0',
		genre: Genres.lofi,
		live: true
	},
	koreanIndie: {
		displayName: 'Korean Indie/R&B/Hip-Hop Radio',
		trackID: 'IUT1qAhMY4w',
		name: '24/7 Korean Underground Indie/R&B/Hip-hop Radio',
		genre: Genres.rnb,
		live: true
	},
	lofiGirl: {
		displayName: 'Lofi Girl Radio: Beats to Study/Relax To',
		name: 'lofi hip hop radio 📚 - beats to relax/study to',
		trackID: 'jfKfPfyJRdk',
		genre: Genres.lofi,
		live: true
	},
	rb: {
		displayName: 'R&B/Hip-Hop Radio',
		name: 'r&b / hip-hop radio [ chill live stream - 24/7 rnb ]',
		trackID: '86XzuPmMriw',
		genre: Genres.rnb,
		live: true
	},
	cityPop: {
		displayName: 'Japanese City Pop Mix',
		name: 'warm nights in tokyo [ city pop シティ・ポップ ]',
		trackID: 'uUGJpJuwCY4',
		genre: Genres.pop,
		live: false
	},
	relaxingJazz: {
		displayName: 'Relaxing Jazz Radio',
		name: 'Warm Jazz Relaxing Music ☕ Cozy Cabin with Coffee Shop Ambience | Relax Jazz Music for Study, Work',
		trackID: 'L5v9NRuWp8o',
		genre: Genres.jazz,
		live: true
	},
	coffeeShop: {
		displayName: 'Coffee Shop Radio',
		name: 'Coffee Shop Radio ☕ - 24/7 lofi & jazzy hip-hop beats',
		trackID: 'lP26UCnoH9s',
		genre: Genres.lofi,
		live: true
	},
	classicalChinese: {
		displayName: 'Classical Chinese Radio',
		name: 'Relaxing With Chinese Bamboo Flute, Guzheng, Erhu, Pipa || 中國傳統音樂 笛子古箏名曲 放鬆音樂 - 古典音樂 安静純音樂 中國古典長笛音樂',
		trackID: 'dB2KZBsEBwM',
		genre: Genres.classical,
		live: true
	},
	chillHop: {
		displayName: 'ChillHop Radio',
		name: 'Chillhop Radio - jazzy & lofi hip hop beats 🐾',
		trackID: '5yx6BWlEVcY',
		genre: Genres.lofi,
		live: true
	},
	coffeeJazz: {
		displayName: 'Coffee Jazz Music Radio',
		name: 'Coffee Jazz Music - Chill Out Lounge Jazz Music Radio - 24/7 Live Stream - Slow Jazz',
		trackID: 'fEvM-OUbaKs',
		genre: Genres.jazz,
		live: true
	},
	workJazz: {
		displayName: 'Work & Jazz Piano Radio',
		name: 'Relaxing Jazz Piano Radio - Slow Jazz Music - 24/7 Live Stream - Music For Work & Study',
		trackID: 'Dx5qFachd3A',
		genre: Genres.jazz,
		live: true
	},
	vaporfunk: {
		displayName: 'VaporFunk Station: Vaporwave Radio',
		name: 'VaporFunk Station 📼 | 24/7 Vaporwave Radio',
		trackID: 'cVibfBy77Yg',
		genre: Genres.electronic,
		live: true
	},
	chillsynth: {
		displayName: 'ChillSynth FM',
		name: 'ChillSynth FM - lofi synthwave radio for retro dreaming',
		trackID: 'UedTcufyrHc',
		genre: Genres.electronic,
		live: true
	},
	synthwave: {
		displayName: 'Synthwave Radio',
		name: 'synthwave radio 🌌 - beats to chill/game to',
		trackID: '4xDzrJKXOOY',
		genre: Genres.electronic,
		live: true
	},
	tropicalHouse: {
		displayName: 'Tropical House Radio',
		name: 'The Good Life Radio • 24/7 Live Radio',
		trackID: '36YnV9STBqc',
		genre: Genres.electronic,
		live: true
	},
	topHits: {
		displayName: 'Top Hits Radio',
		name: "Hits Radio 1 Live Pop Radio' Top Hits 2023",
		trackID: 'HQtFR3mhzOY',
		genre: Genres.pop,
		live: true
	},
	baroque: {
		displayName: 'Baroque Classical Radio',
		name: '♫ Baroque Live Music 24/7 - Classical Music from the Baroque Period ♫ クラシック ライブ',
		trackID: '2gO1v2GPMFk',
		genre: Genres.classical,
		live: true
	},
	chinesePop: {
		displayName: 'Chinese Pop Radio',
		name: '網路流行音樂電台 | Chinese POP Music 24/7',
		trackID: 'IfNMuFqKBWs',
		genre: Genres.pop,
		live: true
	},
	parisCafe: {
		displayName: 'Paris Cafe Radio: Positive Bossa Nova Jazz Music',
		name: 'Positive Bossa Nova Jazz Music for Relax, Good Mood - Paris Cafe Ambience',
		trackID: 'g6bn6XrhYdc',
		genre: Genres.jazz,
		live: true
	},
	spanishHits: {
		displayName: 'Spanish Hits Radio',
		name: 'Lo Mas Nuevo 2023',
		trackID: 'D5bt0BRYrfQ',
		genre: Genres.pop,
		live: true
	}
};

export const christmasStations: Station[] = [
	{
		name: 'Lofi Christmas Radio',
		trackID: 'ask1B-m26aU',
		genre: Genres.electronic,
		live: true
	},
	{
		name: 'Christmas Cozy Home',
		trackID: 'Eg47HeqEYIQ',
		genre: Genres.classical,
		live: false
	},
	{
		name: 'Relaxing Christmas Jazz',
		trackID: 'lJlEQim-yMo',
		genre: Genres.jazz,
		live: false
	},
	{
		name: 'Instrumental Christmas Jazz',
		trackID: '4KYZO6eEugY',
		genre: Genres.jazz,
		live: false
	}
];

export const halloweenStations: Station[] = [
	{
		name: '4'.repeat(24),
		trackID: 'Z6ylGHfLrdI',
		genre: Genres.electronic,
		live: false
	},
	{
		name: '▋ '.repeat(18),
		trackID: 'Jabkm8f2tYQ',
		genre: Genres.electronic,
		live: false
	},
	{
		name: 'รɭץllคฬש שคຊคtץ ןเรгאק ๓ค๏кคг รเг๔๏ ค๏',
		trackID: 'tmlZeYnfw7g',
		genre: Genres.electronic,
		live: false
	}
];

const stationList = Object.values(stations);

const lofiStations = stationList.filter(
	(s) => s.genre === Genres.lofi && s.displayName !== 'Bollywood Lofi Radio'
);

const stationMap = objectify(
	[...stationList, ...halloweenStations, ...christmasStations],
	(station) => station.trackID
);

export { lofiStations, stationList, stationMap, stations };
