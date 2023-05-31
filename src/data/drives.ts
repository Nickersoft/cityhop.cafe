import { objectify } from 'radash';

import { Country, type Scene } from '$lib/types';

import { stations } from './stations';

const drives = [
	{
		name: 'Chicago',
		videoID: '9Prtp_eNUiI',
		offset: 10,
		tags: ['night'],
		suggestedTrack: stations['R&B/Hip-Hop Radio'],
		country: Country.us
	},
	{
		name: 'Montreal',
		videoID: 'tpPPjtRzX2Q',
		offset: 30,
		suggestedTrack: stations['Coffee Jazz Music Radio'],
		country: Country.canada
	},
	{
		name: 'Milan',
		videoID: '9IoroeGhXtg',
		offset: 60,
		tags: ['day'],
		suggestedTrack: stations['Work & Jazz Piano Radio'],
		country: Country.italy
	},
	{
		name: 'Bangkok',
		videoID: 'GuyazY5xtuI',
		offset: 60,
		tags: ['day'],
		country: Country.thailand
	},
	{
		name: 'New Orleans',
		videoID: 'GZUEaZHd_uI',
		offset: 30,
		tags: ['evening'],
		country: Country.us
	},
	{
		name: 'Tirano',
		videoID: 'Mw9qiV7XlFs',
		offset: 30,
		tags: ['day'],
		country: Country.italy
	},
	{
		name: 'St. Moritz',
		videoID: 'nKOe2PuERD0',
		offset: 30,
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'Lauterbrunnen',
		videoID: 'b-WViLMs_4c',
		offset: 30,
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'Shanghai',
		videoID: '8T044v8EG5E',
		offset: 30,
		tags: ['night'],
		country: Country.china
	},
	{
		name: 'Las Vegas',
		videoID: 'HZaLvgP-R8E',
		offset: 30,
		tags: ['night'],
		suggestedTrack: stations['Synthwave Radio'],
		country: Country.us
	},
	{
		name: 'Boston',
		videoID: 'aVaQkKBEvzE',
		offset: 30,
		suggestedTrack: stations['Work & Jazz Piano Radio'],
		country: Country.us
	},
	{
		name: 'San Francisco',
		videoID: 'PGMu_Z89Ao8',
		offset: 30,
		suggestedTrack: stations['Relaxing Jazz Radio'],
		country: Country.us
	},
	{
		name: 'Los Angeles',
		videoID: '_gJe9JPgwLM',
		offset: 30,
		suggestedTrack: stations['Top Hits Radio'],
		country: Country.us
	},
	{
		name: 'Honolulu',
		videoID: '-GSHhsSPcdo',
		offset: 40,
		suggestedTrack: stations['Tropical House Radio'],
		country: Country.us
	},
	{
		name: 'New York',
		videoID: 'UPrPATfWJ2g',
		offset: 50,
		tags: ['night'],
		suggestedTrack: stations['VaporFunk Station: Vaporwave Radio'],
		country: Country.us
	},
	{
		name: 'Seattle',
		videoID: 'fkps18H3SXY',
		offset: 50,
		tags: ['day'],
		suggestedTrack: stations['Relaxing Jazz Radio'],
		country: Country.us
	},

	{
		name: 'Miami',
		videoID: 'Cod_ggrs69U',
		offset: 48,
		tags: ['night'],
		suggestedTrack: stations['Synthwave Radio'],
		country: Country.us
	},
	{
		name: 'Mumbai',
		videoID: '0o8PlX0JUn0',
		offset: 28,
		tags: ['night'],
		suggestedTrack: stations['Bollywood Lofi Radio'],
		country: Country.india
	},
	{
		name: 'Arches National Park',
		videoID: 'l-xaEoKGIxY',
		offset: 30,
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Great Smoky Mountains',
		videoID: 'Of5pGj6Obzo',
		offset: 30,
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Singapore',
		videoID: 'AEgrx3Uxfts',
		tags: ['evening'],
		offset: 30,
		country: Country.singapore
	},
	{
		name: 'Dubai',
		videoID: 'TE2tfavIo3E',
		offset: 30,
		tags: ['evening', 'night'],
		suggestedTrack: stations['Synthwave Radio'],
		country: Country.uae
	},
	{
		name: 'Akita',
		videoID: 'CIRlmM8wI1g',
		offset: 200,
		tags: ['day'],
		country: Country.japan
	},
	{
		name: 'Delhi',
		videoID: 'g-c3K8plBxo',
		offset: 28,
		tags: ['night'],
		suggestedTrack: stations['Bollywood Lofi Radio'],
		country: Country.india
	},
	{
		name: 'Mexico City',
		videoID: 'JCXH_WyC8A4',
		suggestedTrack: stations['Spanish Hits Radio'],
		tags: ['evening', 'night'],
		country: Country.mexico
	},
	{
		name: 'Osaka',
		videoID: 'GgOTV7VrlPw',
		offset: 15,
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'Tokyo',
		videoID: 'lSgTVt60M6U',
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'Okutama Lake',
		videoID: '7a-GBnXz3i8',
		tags: ['day'],
		offset: 60,
		suggestedTrack: stations['Japanese City Pop Mix'],
		country: Country.japan
	},
	{
		name: 'Lima',
		videoID: 'trKeUE41KVY',
		offset: 120,
		tags: ['day'],
		country: Country.peru
	},
	{
		name: 'Paris',
		videoID: 'lN43inpI2lk',
		offset: 30,
		suggestedTrack: stations['Paris Cafe Radio: Positive Bossa Nova Jazz Music'],
		tags: ['day'],
		country: Country.france
	},
	{
		name: 'Chongqing',
		videoID: 'Boh66Pjjiq0',
		tags: ['day'],
		country: Country.china
	},
	{
		name: 'Hangzhou',
		videoID: 'jAe290vn-gk',
		offset: 200,
		tags: ['day', 'rain'],
		country: Country.china
	},
	{
		name: 'Taipei',
		videoID: 'P8Uh9f0EaU8',
		offset: 60,
		tags: ['day'],
		suggestedTrack: stations['Chinese Pop Radio'],
		country: Country.taiwan
	},
	{
		name: 'Seoul',
		videoID: 'KGAIumGxQeY',
		tags: ['evening'],
    offset: 30,
		country: Country.korea
	},
	{
		name: 'Busan',
		videoID: 'XPRqAkL7Kfk',
		tags: ['night'],
		suggestedTrack: stations['Korean Indie/R&B/Hip-Hop Radio'],
		country: Country.korea
	}
].map((scene) => ({ ...scene, type: 'drive' })) as Scene[];

export default drives;

export const driveMap = objectify(drives, (drive) => drive.videoID);
