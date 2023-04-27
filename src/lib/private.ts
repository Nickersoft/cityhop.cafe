import { Country, type Background } from './types';

export const _tracks = {
	hindiLofi: {
		name: 'Hindi Lofi🎵| Chill n Relax | 24/7 Bollywood Radio',
		trackID: 'c__Br1xUVK8'
	},
	koreanRB: {
		trackID: 'IUT1qAhMY4w',
		name: '24/7 Korean Underground Indie/R&B/Hip-hop Radio'
	},
	chillBeats: {
		name: 'lofi hip hop radio 📚 - beats to relax/study to',
		trackID: 'jfKfPfyJRdk'
	},
	cityPop: {
		name: 'warm nights in tokyo [ city pop シティ・ポップ ]',
		trackID: 'uUGJpJuwCY4'
	},
	jazz: {
		name: 'Relaxing Jazz Piano Radio - Slow Jazz Music - 24/7 Live Stream - Music For Work & Study',
		trackID: 'Dx5qFachd3A'
	},
	coffeeShopLofi: {
		name: 'Coffee Shop Radio ☕ - 24/7 lofi & jazzy hip-hop beats',
		trackID: 'e3L1PIY1pN8'
	},
	chineseClassical: {
		name: 'Breath of the Night 🌑 Asian Inspired Lofi Beats',
		trackID: 'lL6rDj40NZk'
	},
	vaporwave: {
		name: 'VaporFunk Station 📼 | 24/7 Vaporwave Radio',
		trackID: 'cVibfBy77Yg'
	},
	synthHop: {
		name: 'synthwave radio 🌌 - beats to chill/game to',
		trackID: 'MVPTGNGiI-4'
	},
	house: {
		name: 'The Good Life Radio • 24/7 Live Radio',
		trackID: '36YnV9STBqc'
	},
	pop: {
		name: "Hits Radio 1 Live Pop Radio' Top Hits 2023",
		trackID: 'HQtFR3mhzOY'
	},
	baroqueMusic: {
		name: '🔴 ♫ Baroque Live Music 24/7 - Classical Music from the Baroque Period ♫ クラシック ライブ',
		trackID: '2gO1v2GPMFk'
	},
	frenchCafe: {
		name: 'French Cafe - Accordion Romantic French Music, Jazz & Bossa Nova',
		trackID: 'yvhPcuqyIig'
	}
};

export const _backgrounds: Record<Country, Background[]> = {
	[Country.us]: [
		{
			name: 'Chicago',
			videoID: 'KXkkKm4AwBg',
			type: 'walk',
			offset: 10,
			suggestedTrack: _tracks.coffeeShopLofi
		},
		{
			name: 'Los Angeles',
			videoID: '_gJe9JPgwLM',
			type: 'drive',
			offset: 30,
			suggestedTrack: _tracks.pop
		},
		{
			name: 'Honolulu',
			videoID: '-GSHhsSPcdo',
			offset: 40,
			type: 'drive',
			suggestedTrack: _tracks.house
		},
		{
			name: 'New York',
			videoID: 'UPrPATfWJ2g',
			type: 'drive',
			offset: 50,
			suggestedTrack: _tracks.vaporwave
		},
		{
			name: 'New York',
			videoID: 'F8MN0o6RS9o',
			type: 'walk',
			offset: 10,
			suggestedTrack: _tracks.jazz
		},
		{
			name: 'Miami',
			videoID: 'Cod_ggrs69U',
			offset: 48,
			type: 'drive',
			tags: ['night'],
			suggestedTrack: _tracks.synthHop
		}
	],
	[Country.india]: [
		{
			name: 'New Delhi',
			videoID: '-bF43jowdps',
			offset: 28,
			type: 'walk',
			tags: ['night'],
			suggestedTrack: _tracks.hindiLofi
		},
		{
			name: 'Mumbai',
			videoID: '0UWkt9BgkXQ',
			type: 'walk',
			tags: ['night'],
			suggestedTrack: _tracks.hindiLofi
		}
	],
	[Country.japan]: [
		{
			name: 'Yokohama',
			videoID: 'm6y03y_9ruA',
			type: 'walk',
			tags: ['snow', 'night']
		},
		{
			name: 'Kyoto',
			videoID: 'qgfd-uWTVwg',
			type: 'walk',
			offset: 50,
			tags: ['rain', 'night']
		},
		{
			name: 'Shibuya',
			videoID: 'b3yQXprMj3s',
			type: 'walk',
			offset: 45,
			tags: ['day']
		},
		{
			name: 'Osaka',
			videoID: 'm65NkIAIMSw',
			offset: 10,
			type: 'walk',
			tags: ['night']
		},
		{
			name: 'Tokyo',
			videoID: 'VqS9_CIm64E',
			offset: 100,
			type: 'walk',
			tags: ['night', 'rain']
		},
		{
			name: 'Tokyo',
			videoID: 'GPbBZCrQbzI',
			type: 'drive',
			tags: ['day'],
			suggestedTrack: _tracks.cityPop
		}
	],
	[Country.france]: [
		{
			name: 'Paris',
			videoID: '0OnX6znBj_I',
			type: 'walk',
			offset: 30,
			suggestedTrack: _tracks.frenchCafe,
			tags: ['night']
		}
	],
	[Country.italy]: [
		{
			name: 'Cinque Terre',
			videoID: 'FmNNrCJUhac',
			offset: 10,
			type: 'walk',
			tags: ['rain', 'evening']
		},
		{
			name: 'Venice',
			videoID: 'kccv6YJZ0P4',
			offset: 50,
			type: 'walk',
			tags: ['evening'],
			suggestedTrack: _tracks.baroqueMusic
		}
	],
	[Country.china]: [
		{
			name: 'Beijing',
			videoID: '7keLrzMcZRc',
			offset: 2058,
			type: 'walk',
			tags: ['night', 'evening']
		},
		{
			name: 'Wuhan',
			videoID: 'wVHgby6hBDA',
			offset: 2058,
			type: 'walk',
			suggestedTrack: _tracks.chineseClassical,
			tags: ['night', 'day']
		},
		{
			name: 'Hangzhou',
			videoID: 'jAe290vn-gk',
			offset: 200,
			type: 'drive',
			tags: ['day', 'rain']
		},
		{
			name: 'Chongqing',
			videoID: 'tMzCwwvHwN0',
			offset: 86,
			tags: ['night'],
			type: 'walk',
			suggestedTrack: _tracks.chineseClassical
		},
		{
			name: 'Guangzhou',
			videoID: 'oC0PYbNmSrk',
			tags: ['night', 'rain'],
			type: 'walk'
		},
		{
			name: 'Shanghai',
			videoID: 'oBu3Mtr6nGs',
			offset: 86,
			type: 'walk',
			tags: ['night', 'rain']
		},
		{
			name: 'Xiangtan',
			videoID: 'MudeUxLjqEY',
			offset: 86,
			type: 'walk',
			tags: ['rain', 'night']
		}
	],
	[Country.korea]: [
		{
			name: 'Myeongdong',
			videoID: 'i1KRgqkr3fU',
			tags: ['evening'],
			type: 'walk',
			suggestedTrack: _tracks.koreanRB
		},
		{
			name: 'Seoul',
			videoID: 'KGAIumGxQeY',
			tags: ['evening'],
			type: 'drive',
			suggestedTrack: _tracks.koreanRB
		},
		{
			name: 'Yongsan Station',
			videoID: 'jxQX5XI766c',
			offset: 235,
			type: 'walk',
			tags: ['night', 'rain']
		},
		{
			name: 'Bukchon',
			videoID: 'nLx03XgG8AY',
			type: 'walk',
			tags: ['night', 'snow']
		},
		{
			name: 'Gwangju',
			videoID: 'pg9cq7QlEYI',
			type: 'walk',
			tags: ['night', 'snow']
		}
	]
};
