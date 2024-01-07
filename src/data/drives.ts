import { objectify } from 'radash';

import { Country, type Scene } from '$lib/types';

import { stations } from './stations';
import { SceneTypes } from './types';

const drives = [
	{
		name: 'Chicago',
		type: SceneTypes.drive,
		videoID: '9Prtp_eNUiI',
		offset: { start: 10 },
		tags: ['night'],
		suggestedTrack: stations['R&B/Hip-Hop Radio'],
		country: Country.us
	},
	{
		name: 'Rome',
		type: SceneTypes.drive,
		videoID: 'ytiM1nMv_xU',
		offset: { start: 30 },
		suggestedTrack: stations['Work & Jazz Piano Radio'],
		country: Country.italy
	},
	{
		name: 'Montreal',
		type: SceneTypes.drive,
		videoID: 'tpPPjtRzX2Q',
		offset: { start: 30 },
		suggestedTrack: stations['Coffee Jazz Music Radio'],
		country: Country.canada
	},
	{
		name: 'Milan',
		type: SceneTypes.drive,
		videoID: '9IoroeGhXtg',
		offset: { start: 60 },
		tags: ['day'],
		suggestedTrack: stations['Work & Jazz Piano Radio'],
		country: Country.italy
	},
	{
		name: 'Bangkok',
		type: SceneTypes.drive,
		videoID: 'GuyazY5xtuI',
		offset: { start: 60 },
		tags: ['day'],
		country: Country.thailand
	},
	{
		name: 'Zurich',
		type: SceneTypes.drive,
		videoID: '_H03CjepcJc',
		offset: { start: 120 },
		tags: ['evening'],
		country: Country.switzerland
	},
	{
		name: 'New Orleans',
		type: SceneTypes.drive,
		videoID: 'GZUEaZHd_uI',
		offset: { start: 30 },
		tags: ['evening'],
		country: Country.us
	},
	{
		name: 'Tirano',
		type: SceneTypes.drive,
		videoID: 'Mw9qiV7XlFs',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.italy
	},
	{
		name: 'St. Moritz',
		type: SceneTypes.drive,
		videoID: 'nKOe2PuERD0',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'St. Petersburg',
		type: SceneTypes.drive,
		videoID: 'vKD8_m88tuk',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.russia
	},
	{
		name: 'Lauterbrunnen',
		type: SceneTypes.drive,
		videoID: 'b-WViLMs_4c',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'Shanghai',
		type: SceneTypes.drive,
		videoID: '8T044v8EG5E',
		offset: { start: 30 },
		tags: ['night'],
		country: Country.china
	},
	{
		name: 'Chengdu ➡️ Shangxi',
		type: SceneTypes.drive,
		videoID: 'Jf6DJZ63JDU',
		offset: { start: 30 },
		tags: ['day', 'rain'],
		country: Country.china
	},
	{
		name: 'Las Vegas',
		type: SceneTypes.drive,
		videoID: 'HZaLvgP-R8E',
		offset: { start: 30 },
		tags: ['night'],
		suggestedTrack: stations['Synthwave Radio'],
		country: Country.us
	},
	{
		name: 'Boston',
		type: SceneTypes.drive,
		videoID: 'aVaQkKBEvzE',
		offset: { start: 30 },
		suggestedTrack: stations['Work & Jazz Piano Radio'],
		country: Country.us
	},
	{
		name: 'San Francisco',
		type: SceneTypes.drive,
		videoID: 'PGMu_Z89Ao8',
		offset: { start: 30 },
		suggestedTrack: stations['Relaxing Jazz Radio'],
		country: Country.us
	},
	{
		name: 'Los Angeles',
		type: SceneTypes.drive,
		videoID: '_gJe9JPgwLM',
		offset: { start: 30 },
		suggestedTrack: stations['Top Hits Radio'],
		country: Country.us
	},
	{
		name: 'Honolulu',
		type: SceneTypes.drive,
		videoID: '-GSHhsSPcdo',
		offset: { start: 40 },
		suggestedTrack: stations['Tropical House Radio'],
		country: Country.us
	},
	{
		name: 'New York',
		type: SceneTypes.drive,
		videoID: 'UPrPATfWJ2g',
		offset: { start: 50 },
		tags: ['night'],
		suggestedTrack: stations['VaporFunk Station: Vaporwave Radio'],
		country: Country.us
	},
	{
		name: 'Seattle',
		type: SceneTypes.drive,
		videoID: 'fkps18H3SXY',
		offset: { start: 50 },
		tags: ['day'],
		suggestedTrack: stations['Relaxing Jazz Radio'],
		country: Country.us
	},
	{
		name: 'Miami',
		type: SceneTypes.drive,
		videoID: 'Cod_ggrs69U',
		offset: { start: 48 },
		tags: ['night'],
		suggestedTrack: stations['Synthwave Radio'],
		country: Country.us
	},
	{
		name: 'Qinghai Lake',
		type: SceneTypes.drive,
		videoID: 'WIj6sElG0kw',
		offset: { start: 60 },
		tags: ['day'],
		country: Country.china
	},
	{
		name: "Ya'an ➡️ Xichang",
		type: SceneTypes.drive,
		videoID: 'nwvQ6ox6H2g',
		offset: { start: 120 },
		tags: ['day', 'night'],
		country: Country.china
	},
	{
		name: 'Jeju Island',
		type: SceneTypes.drive,
		videoID: '57-34iNmzww',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.korea
	},
	{
		name: 'Yeongdong Expressway',
		type: SceneTypes.drive,
		videoID: '4l6VpHmEgoo',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.korea
	},
	{
		name: 'Huanggualiang',
		type: SceneTypes.drive,
		videoID: 'zj8AjUrIJUs',
		offset: { start: 120 },
		tags: ['day'],
		country: Country.china
	},
	{
		name: 'Nanning',
		type: SceneTypes.drive,
		videoID: 'rSqSgrCGwRA',
		offset: { start: 200 },
		tags: ['day'],
		country: Country.china
	},
	{
		name: 'Mount Fuji',
		type: SceneTypes.drive,
		videoID: 'naz_RVh48vg',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.japan
	},
	{
		name: 'Mumbai',
		type: SceneTypes.drive,
		videoID: '0o8PlX0JUn0',
		offset: { start: 28 },
		tags: ['night'],
		suggestedTrack: stations['Bollywood Lofi Radio'],
		country: Country.india
	},
	{
		name: 'Venice',
		type: SceneTypes.drive,
		videoID: 'TJLjnp39GBg',
		offset: { start: 80 },
		tags: ['evening'],
		country: Country.italy
	},
	{
		name: 'Yuzixi',
		type: SceneTypes.drive,
		videoID: 'X3-jML2EMIc',
		offset: { start: 120 },
		tags: ['day'],
		country: Country.china
	},
	{
		name: 'Tibet',
		type: SceneTypes.drive,
		videoID: 'nNvqy_uVJVE',
		offset: { start: 120 },
		tags: ['day'],
		country: Country.china
	},
	{
		name: 'Chengdu',
		type: SceneTypes.drive,
		videoID: 'VP6OCMG6eEw',
		offset: { start: 120 },
		tags: ['day', 'rain'],
		country: Country.china
	},
	{
		name: 'Arches National Park',
		type: SceneTypes.drive,
		videoID: 'l-xaEoKGIxY',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Great Smoky Mountains',
		type: SceneTypes.drive,
		videoID: 'Of5pGj6Obzo',
		offset: { start: 30 },
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Singapore',
		type: SceneTypes.drive,
		videoID: 'AEgrx3Uxfts',
		tags: ['evening'],
		offset: { start: 30 },
		country: Country.singapore
	},
	{
		name: 'Dubai',
		type: SceneTypes.drive,
		videoID: 'TE2tfavIo3E',
		offset: { start: 30 },
		tags: ['evening', 'night'],
		suggestedTrack: stations['Synthwave Radio'],
		country: Country.uae
	},
	{
		name: 'Akita',
		type: SceneTypes.drive,
		videoID: 'CIRlmM8wI1g',
		offset: { start: 200 },
		tags: ['day'],
		country: Country.japan
	},
	{
		name: 'Delhi',
		type: SceneTypes.drive,
		videoID: 'g-c3K8plBxo',
		offset: { start: 28 },
		tags: ['night'],
		suggestedTrack: stations['Bollywood Lofi Radio'],
		country: Country.india
	},
	{
		name: 'Mexico City',
		type: SceneTypes.drive,
		videoID: 'JCXH_WyC8A4',
		suggestedTrack: stations['Spanish Hits Radio'],
		tags: ['evening', 'night'],
		country: Country.mexico
	},
	{
		name: 'Osaka',
		type: SceneTypes.drive,
		videoID: 'GgOTV7VrlPw',
		offset: { start: 15 },
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'Tokyo',
		type: SceneTypes.drive,
		videoID: 'lSgTVt60M6U',
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'Malibu',
		type: SceneTypes.drive,
		videoID: 'p_dYvmis0uo',
		offset: { start: 30 },
		tags: ['day'],
		suggestedTrack: stations['Tropical House Radio'],
		country: Country.us
	},
	{
		name: 'Okutama Lake',
		type: SceneTypes.drive,
		videoID: '7a-GBnXz3i8',
		tags: ['day'],
		offset: { start: 60 },
		suggestedTrack: stations['Japanese City Pop Mix'],
		country: Country.japan
	},
	{
		name: 'Lima',
		type: SceneTypes.drive,
		videoID: 'trKeUE41KVY',
		offset: { start: 120 },
		tags: ['day'],
		country: Country.peru
	},
	{
		name: 'Paris',
		type: SceneTypes.drive,
		videoID: 'lN43inpI2lk',
		offset: { start: 30 },
		suggestedTrack: stations['Paris Cafe Radio: Positive Bossa Nova Jazz Music'],
		tags: ['day'],
		country: Country.france
	},
	{
		name: 'Chongqing',
		type: SceneTypes.drive,
		videoID: 'Boh66Pjjiq0',
		tags: ['day'],
		country: Country.china
	},
	{
		name: 'Hangzhou',
		type: SceneTypes.drive,
		videoID: 'jAe290vn-gk',
		offset: { start: 200 },
		tags: ['day', 'rain'],
		country: Country.china
	},
	{
		name: 'Taipei',
		type: SceneTypes.drive,
		videoID: 'P8Uh9f0EaU8',
		offset: { start: 60 },
		tags: ['day'],
		suggestedTrack: stations['Chinese Pop Radio'],
		country: Country.taiwan
	},
	{
		name: 'Cape Town',
		type: SceneTypes.drive,
		videoID: 'Fvt6rD9tt1c',
		tags: ['day'],
		offset: { start: 60 },
		country: Country.southAfrica
	},
	{
		name: 'Kolkata',
		type: SceneTypes.drive,
		videoID: '6iG9PpV20_U',
		tags: ['day'],
		country: Country.india,
		suggestedTrack: stations['Bollywood Lofi Radio']
	},
	{
		name: 'Seoul',
		type: SceneTypes.drive,
		videoID: 'KGAIumGxQeY',
		tags: ['evening'],
		offset: { start: 30 },
		country: Country.korea
	},
	{
		name: 'Bengaluru',
		type: SceneTypes.drive,
		videoID: 'Guu6shSEbp8',
		tags: ['day'],
		country: Country.india,
		suggestedTrack: stations['Bollywood Lofi Radio']
	},
	{
		name: 'Busan',
		type: SceneTypes.drive,
		videoID: 'XPRqAkL7Kfk',
		tags: ['night'],
		suggestedTrack: stations['Korean Indie/R&B/Hip-Hop Radio'],
		country: Country.korea
	}
].map((scene) => ({ ...scene, type: 'drive' })) as Scene[];

export default drives;

export const driveMap = objectify(drives, (drive) => drive.videoID);
