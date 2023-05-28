import { objectify } from 'radash';

import { Country, type Scene } from '$lib/types';

import { stations } from './stations';

const walks: Omit<Scene, 'type'>[] = [
	{
		name: 'Chicago',
		videoID: 'KXkkKm4AwBg',
		offset: 10,
		country: Country.us,
		suggestedTrack: stations['Coffee Shop Radio']
	},
	{
		name: 'Singapore',
		videoID: 'aUJl46bEWYo',
		offset: 10,
		country: Country.singapore,
		tags: ['day']
	},
	{
		name: 'Seattle',
		videoID: 'NaWYnMJA5NE',
		offset: 10,
		tags: ['day', 'rain'],
		country: Country.us,
		suggestedTrack: stations['Coffee Shop Radio']
	},
	{
		name: 'New York',
		videoID: 'F8MN0o6RS9o',
		offset: 10,
		tags: ['snow', 'day'],
		country: Country.us,
		suggestedTrack: stations['Relaxing Jazz Radio']
	},
	{
		name: 'Boston',
		videoID: 'JB0A8Me8EKk',
		offset: 10,
		tags: ['rain', 'day'],
		country: Country.us
	},
	{
		name: 'Montreal',
		videoID: 'NagLUEIvwbg',
		offset: 200,
		tags: ['snow', 'day'],
		country: Country.canada
	},
	{
		name: 'Kochi',
		videoID: '4YKjcbVUkP0',
		tags: ['day', 'rain'],
		country: Country.india,
		suggestedTrack: stations['Bollywood Lofi Radio']
	},
	{
		name: 'Dubai',
		videoID: '8uvs5qEBQoE',
		tags: ['night'],
		country: Country.uae
	},
	{
		name: 'Yokohama',
		videoID: 'm6y03y_9ruA',
		tags: ['snow', 'night'],
		country: Country.japan
	},
	{
		name: 'Kyoto',
		videoID: 'qgfd-uWTVwg',
		offset: 50,
		tags: ['rain', 'night'],
		country: Country.japan
	},
	{
		name: 'Shibuya',
		videoID: 'b3yQXprMj3s',
		offset: 45,
		tags: ['day'],
		country: Country.japan
	},
	{
		name: 'Osaka',
		videoID: 'm65NkIAIMSw',
		offset: 10,
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'Bern',
		videoID: 'HG-IIit3ubs',
		offset: 30,
		tags: ['snow', 'day'],
		country: Country.switzerland
	},
	{
		name: 'Zermatt',
		videoID: 'LFOx-vmYrts',
		offset: 30,
		tags: ['day', 'rain'],
		country: Country.switzerland
	},
	{
		name: 'Lauterbrunnen',
		videoID: 'Bq4rmeIvJbs',
		offset: 30,
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'Zürich',
		videoID: 'mEuj3Ye9QDw',
		offset: 60,
		tags: ['day'],
		country: Country.switzerland
	},
	{
		name: 'Tokyo',
		videoID: 'VqS9_CIm64E',
		offset: 100,
		tags: ['night', 'rain'],
		country: Country.japan
	},
	{
		name: 'Oimachi',
		videoID: 'mzVmieBKwKk',
		offset: 30,
		tags: ['night'],
		country: Country.japan
	},
	{
		name: 'London',
		videoID: 'H43glfbQEh4',
		tags: ['day', 'rain'],
		offset: 60,
		country: Country.uk
	},
	{
		name: 'Accra',
		videoID: 'x0rM132jMR8',
		tags: ['day'],
		country: Country.ghana
	},
	{
		name: 'Los Angeles',
		videoID: 'VINOSu5y4ic',
		offset: 60,
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Venice Beach',
		videoID: '8TuFDJDm_18',
		offset: 30,
		tags: ['day'],
		country: Country.us
	},
	{
		name: 'Barcelona',
		videoID: '__civ2E9A4g',
		tags: ['day', 'night'],
		offset: 30,
		country: Country.spain
	},
	{
		name: 'Mexico City',
		videoID: 'UDFaRy9UH4Q',
		tags: ['day'],
		offset: 30,
		country: Country.mexico
	},
	{
		name: 'Madrid',
		videoID: 'TXH5eGF2COk',
		tags: ['day'],
		offset: 30,
		country: Country.spain
	},
	{
		name: 'Paris',
		videoID: '3j-AVL3Pr3w',
		offset: 30,
		suggestedTrack: stations['Paris Cafe Radio: Positive Bossa Nova Jazz Music'],
		tags: ['night', 'evening'],
		country: Country.france
	},
	{
		name: 'Cinque Terre',
		videoID: 'FmNNrCJUhac',
		offset: 10,
		tags: ['rain', 'evening'],
		country: Country.italy
	},
	{
		name: 'Naples',
		videoID: 'Ypq4N3EldBM',
		offset: 5,
		tags: ['day', 'rain'],
		country: Country.italy
	},
	{
		name: 'Venice',
		videoID: 'kccv6YJZ0P4',
		offset: 50,
		tags: ['evening'],
		suggestedTrack: stations['Baroque Classical Radio'],
		country: Country.italy
	},
	{
		name: 'Beijing',
		videoID: '7keLrzMcZRc',
		offset: 2058,
		tags: ['night', 'evening'],
		country: Country.china
	},
	{
		name: 'Ningbo',
		videoID: 'JcxscDzP4Oc',
		offset: 120,
		tags: ['night', 'day'],
		country: Country.china
	},
	{
		name: 'Wuhan',
		videoID: 'wVHgby6hBDA',
		offset: 2058,
		suggestedTrack: stations['Classical Chinese Radio'],
		tags: ['night', 'day'],
		country: Country.china
	},

	{
		name: 'Chongqing',
		videoID: 'tMzCwwvHwN0',
		offset: 86,
		tags: ['night'],
		suggestedTrack: stations['Classical Chinese Radio'],
		country: Country.china
	},
	{
		name: 'Guangzhou',
		videoID: 'oC0PYbNmSrk',
		tags: ['night', 'rain'],
		country: Country.china
	},
	{
		name: 'Shanghai',
		videoID: 'oBu3Mtr6nGs',
		offset: 86,
		tags: ['night', 'rain'],
		country: Country.china
	},
	{
		name: 'Xiangtan',
		videoID: 'MudeUxLjqEY',
		offset: 86,
		tags: ['rain', 'night'],
		country: Country.china
	},
	{
		name: 'Myeongdong',
		videoID: 'nR9dvyAf-DY',
		offset: 30,
		tags: ['evening'],
		country: Country.korea
	},
	{
		name: 'Euljiro',
		videoID: 'g010nClpG2U',
		offset: 60,
		tags: ['morning', 'rain'],
		country: Country.korea
	},
	{
		name: 'Hongdae',
		videoID: 's50yml_9LPA',
		offset: 30,
		tags: ['evening', 'night'],
		country: Country.korea
	},
	{
		name: 'Yeosu City',
		videoID: 'NV-7yREq7DA',
		offset: 60,
		tags: ['evening'],
		country: Country.korea
	},
	{
		name: 'Yongsan Station',
		videoID: 'jxQX5XI766c',
		offset: 235,
		tags: ['night', 'rain'],
		country: Country.korea
	},
	{
		name: 'Bukchon',
		videoID: 'nLx03XgG8AY',
		tags: ['night', 'snow'],
		country: Country.korea
	},
	{
		name: 'Dream Forest',
		videoID: 'zCamdbpzJEs',
		offset: 30,
		tags: ['day'],
		country: Country.korea
	},
	{
		name: 'Gangnam',
		videoID: 'EJJ8rmIWUcQ',
		offset: 60,
		tags: ['day', 'rain'],
		country: Country.korea
	},
	{
		name: 'Portland',
		videoID: 'Ht747Q-PLDY',
		tags: ['rain', 'day'],
		offset: 60,
		country: Country.us
	},
	{
		name: 'Bangkok',
		videoID: 'ol-IOOBs4oY',
		tags: ['night'],
		offset: 80,
		country: Country.thailand
	},
	{
		name: 'Honolulu',
		videoID: 'T3nzPsDfazA',
		tags: ['evening'],
		offset: 30,
		country: Country.us
	},
	{
		name: 'Koh Kut Island',
		videoID: 'RfVZMCCeAzI',
		offset: 300,
		country: Country.thailand,
		tags: ['day']
	},
	{
		name: 'Edinburgh',
		videoID: 'o9aH4xk25yg',
		offset: 30,
		country: Country.scotland,
		tags: ['day', 'night', 'rain']
	},
	{
		name: 'New Orleans',
		videoID: '3BAahFrNRaI',
		offset: 30,
		country: Country.us,
		tags: ['day'],
		suggestedTrack: stations['Work & Jazz Piano Radio']
	},
	{
		name: 'Ho Chi Minh City',
		videoID: 'SmmquqDceus',
		tags: ['night'],
		offset: 120,
		country: Country.vietnam
	},
	{
		name: 'Vancouver',
		videoID: 'jmok5F9RQ_w',
		offset: 120,
		tags: ['day'],
		country: Country.canada
	},
	{
		name: 'Mumbai',
		videoID: '8W4ZTX1z02E',
		offset: 120,
		tags: ['day', 'night'],
		suggestedTrack: stations['Bollywood Lofi Radio'],
		country: Country.india
	},
	{
		name: 'Gwangju',
		videoID: 'pg9cq7QlEYI',
		tags: ['night', 'snow'],
		country: Country.korea
	},
	{
		name: 'Tsawwassen',
		videoID: 'kg2kefbrFn4',
		tags: ['evening'],
		offset: 10,
		country: Country.canada
	},
	{
		name: 'Beirut',
		videoID: 'KMDWEwQDoc0',
		tags: ['evening'],
		offset: 10,
		country: Country.lebanon
	},
	{
		name: 'Lima',
		videoID: 'e4RsX2h2QIc',
		tags: ['day'],
		offset: 60,
		country: Country.peru
	},
	{
		name: 'Nagasaki',
		videoID: 'Wey4zHA4nPg',
		tags: ['night', 'rain'],
		offset: 30,
		country: Country.japan
	},
	{
		name: 'Cusco',
		videoID: 'BqBPCNyK5ZM',
		tags: ['day'],
		offset: 60,
		country: Country.peru
	}
];

const mappedWalks = walks.map((scene) => ({ ...scene, type: 'walk' })) as Scene[];

export default mappedWalks;

export const walkMap = objectify(mappedWalks, (walk) => walk.videoID);
