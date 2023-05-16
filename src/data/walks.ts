import { objectify } from 'radash';

import { Country, type Scene } from '$lib/types';

import { stations } from './stations';

const walks = [
	{
		name: 'Chicago',
		videoID: 'KXkkKm4AwBg',
		offset: 10,
		country: Country.us,
		suggestedTrack: stations['Coffee Shop Radio']
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
		country: Country.us,
		suggestedTrack: stations['The Bootleg Boy: Sad & Sleepy Beats']
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
		name: 'Tokyo',
		videoID: 'VqS9_CIm64E',
		offset: 100,
		tags: ['night', 'rain'],
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
		name: 'Gangnam',
		videoID: 'EJJ8rmIWUcQ',
		offset: 60,
		tags: ['day', 'rain'],
		country: Country.korea
	},
	{
		name: 'Gwangju',
		videoID: 'pg9cq7QlEYI',
		tags: ['night', 'snow'],
		country: Country.korea
	}
].map((scene) => ({ ...scene, type: 'walk' })) as Scene[];

export default walks;

export const walkMap = objectify(walks, (walk) => walk.videoID);
