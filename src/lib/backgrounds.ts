export type Tag = 'snow' | 'rain' | 'night' | 'day' | 'drive' | 'evening';

export interface Background {
	name: string;
	videoId: string;
	tags?: Tag[];
	suggestedTrack?: string;
	offset?: number;
}

export enum Country {
	korea = 'South Korea',
	us = 'United States',
	china = 'China',
	japan = 'Japan',
	india = 'India',
	italy = 'Italy'
}

const backgrounds: Record<Country, Background[]> = {
	[Country.us]: [
		{
			name: 'Chicago',
			videoId: 'KXkkKm4AwBg',
			offset: 10,
			suggestedTrack: 'Dx5qFachd3A'
		}
	],
	[Country.india]: [
		{
			name: 'New Delhi',
			videoId: 'bF43jowdps',
			offset: 28,
			tags: ['night']
		}
	],
	[Country.japan]: [
		{
			name: 'Yokohama',
			videoId: 'm6y03y_9ruA',
			tags: ['snow', 'night']
		},
		{
			name: 'Osaka',
			videoId: 'm65NkIAIMSw',
			offset: 10,
			tags: ['night']
		},
		{
			name: 'Tokyo',
			videoId: 'VqS9_CIm64E',
			tags: ['night', 'rain']
		}
	],
	[Country.italy]: [
		{
			name: 'Cinque Terre',
			videoId: 'FmNNrCJUhac',
			offset: 10,
			tags: ['rain', 'evening']
		}
	],
	[Country.china]: [
		{
			name: 'Beijing',
			videoId: '7keLrzMcZRc',
			offset: 2058,
			tags: ['night', 'evening']
		},
		{
			name: 'Hangzhou',
			videoId: 'jAe290vn-gk',
			offset: 200,
			tags: ['day', 'rain', 'drive']
		},
		{
			name: 'Chongqing',
			videoId: 'tMzCwwvHwN0',
			offset: 86,
			tags: ['night'],
			suggestedTrack: 'XmBji07OtwA'
		},
		{
			name: 'Shanghai',
			videoId: 'v5S3YGXQ85Q',
			offset: 86,
			tags: ['night']
		},
		{
			name: 'Xiangtan',
			videoId: 'MudeUxLjqEY',
			offset: 86,
			tags: ['rain', 'night']
		}
	],
	[Country.korea]: [
		{
			name: 'Myeongdong',
			videoId: 'i1KRgqkr3fU',
			tags: ['evening'],
			suggestedTrack: 'krH0cwpV5Cs'
		},
		{
			name: 'Yongsan Station',
			videoId: 'jxQX5XI766c',
			offset: 235,
			tags: ['night', 'rain']
		},
		{
			name: 'Bukchon',
			videoId: 'nLx03XgG8AY', //ok
			tags: ['night', 'snow']
		},
		{
			name: 'Gwangju',
			videoId: 'pg9cq7QlEYI', //ok
			tags: ['night', 'snow']
		}
	]
};

export default backgrounds;
