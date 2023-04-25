import { Country, type Background } from './types';

export const _tracks = {
	hindiLofi: {
		name: 'Indian Lofi',
		trackID: 'c__Br1xUVK8'
	},
	koreanRB: {
		trackID: 'IUT1qAhMY4w',
		name: 'Korean R&B'
	},
	chillBeats: {
		name: 'Chill Beats to Study/Relax To',
		trackID: 'jfKfPfyJRdk'
	},
	jazz: {
		name: 'Rainy Jazz',
		trackID: 'Dx5qFachd3A'
	},
	chineseClassical: {
		name: 'Chinese Classical',
		trackID: 'XmBji07OtwA'
	}
};

export const _backgrounds: Record<Country, Background[]> = {
	[Country.us]: [
		{
			name: 'Chicago',
			videoID: 'KXkkKm4AwBg',
			offset: 10,
			suggestedTrack: _tracks.jazz
		}
	],
	[Country.india]: [
		{
			name: 'New Delhi',
			videoID: '-bF43jowdps',
			offset: 28,
			tags: ['night'],
			suggestedTrack: _tracks.hindiLofi
		}
	],
	[Country.japan]: [
		{
			name: 'Yokohama',
			videoID: 'm6y03y_9ruA',
			tags: ['snow', 'night']
		},
		{
			name: 'Osaka',
			videoID: 'm65NkIAIMSw',
			offset: 10,
			tags: ['night']
		},
		{
			name: 'Tokyo',
			videoID: 'VqS9_CIm64E',
			tags: ['night', 'rain']
		}
	],
	[Country.italy]: [
		{
			name: 'Cinque Terre',
			videoID: 'FmNNrCJUhac',
			offset: 10,
			tags: ['rain', 'evening']
		}
	],
	[Country.china]: [
		{
			name: 'Beijing',
			videoID: '7keLrzMcZRc',
			offset: 2058,
			tags: ['night', 'evening']
		},
		{
			name: 'Hangzhou',
			videoID: 'jAe290vn-gk',
			offset: 200,
			tags: ['day', 'rain', 'drive']
		},
		{
			name: 'Chongqing',
			videoID: 'tMzCwwvHwN0',
			offset: 86,
			tags: ['night'],
			suggestedTrack: _tracks.chineseClassical
		},
		{
			name: 'Shanghai',
			videoID: 'v5S3YGXQ85Q',
			offset: 86,
			tags: ['night']
		},
		{
			name: 'Xiangtan',
			videoID: 'MudeUxLjqEY',
			offset: 86,
			tags: ['rain', 'night']
		}
	],
	[Country.korea]: [
		{
			name: 'Myeongdong',
			videoID: 'i1KRgqkr3fU',
			tags: ['evening'],
			suggestedTrack: _tracks.koreanRB
		},
		{
			name: 'Yongsan Station',
			videoID: 'jxQX5XI766c',
			offset: 235,
			tags: ['night', 'rain']
		},
		{
			name: 'Bukchon',
			videoID: 'nLx03XgG8AY', //ok
			tags: ['night', 'snow']
		},
		{
			name: 'Gwangju',
			videoID: 'pg9cq7QlEYI', //ok
			tags: ['night', 'snow']
		}
	]
};
