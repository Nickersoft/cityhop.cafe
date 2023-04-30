import { Country, type Background, type Track, Genre } from './types';

export const _tracks: Record<string, Track> = {
	hindiLofi: {
		name: 'Hindi Lofi 🎵 | Chill n Relax | 24/7 Bollywood Radio',
		trackID: 'c__Br1xUVK8',
		genre: Genre.lofi
	},
	koreanRB: {
		trackID: 'IUT1qAhMY4w',
		name: '24/7 Korean Underground Indie/R&B/Hip-hop Radio',
		genre: Genre.rnb
	},
	chillBeats: {
		name: 'lofi hip hop radio 📚 - beats to relax/study to',
		trackID: 'jfKfPfyJRdk',
		genre: Genre.lofi
	},
	englishRNB: {
		name: 'r&b / hip-hop radio [ chill live stream - 24/7 rnb ]',
		trackID: '86XzuPmMriw',
		genre: Genre.rnb
	},
	cityPop: {
		name: 'warm nights in tokyo [ city pop シティ・ポップ ]',
		trackID: 'uUGJpJuwCY4',
		genre: Genre.pop
	},
	cityPopLive: {
		name: '24/7 New J Channel 🇯🇵 Japanese City Pop Radio レコード 昭和ポップス',
		trackID: '7myvWZF2L44',
		genre: Genre.pop
	},
	chillRadio: {
		name: 'ＣＨＩＬＬ　ＲＡＤＩＯ ２４／７',
		trackID: 'Su00mfi5QUY',
		genre: Genre.lofi
	},
	jazz: {
		name: 'Warm Jazz Relaxing Music ☕ Cozy Cabin with Coffee Shop Ambience | Relax Jazz Music for Study, Work',
		trackID: 'L5v9NRuWp8o',
		genre: Genre.jazz
	},
	coffeeShopLofi: {
		name: 'Coffee Shop Radio ☕ - 24/7 lofi & jazzy hip-hop beats',
		trackID: 'e3L1PIY1pN8',
		genre: Genre.lofi
	},
	asianLofi: {
		name: 'Breath of the Night 🌑 Asian Inspired Lofi Beats',
		trackID: 'lL6rDj40NZk',
		genre: Genre.lofi
	},
	vaporwave: {
		name: 'VaporFunk Station 📼 | 24/7 Vaporwave Radio',
		trackID: 'cVibfBy77Yg',
		genre: Genre.electronic
	},
	synthHop: {
		name: 'synthwave radio 🌌 - beats to chill/game to',
		trackID: 'MVPTGNGiI-4',
		genre: Genre.electronic
	},
	house: {
		name: 'The Good Life Radio • 24/7 Live Radio',
		trackID: '36YnV9STBqc',
		genre: Genre.electronic
	},
	pop: {
		name: "Hits Radio 1 Live Pop Radio' Top Hits 2023",
		trackID: 'HQtFR3mhzOY',
		genre: Genre.pop
	},
	baroqueMusic: {
		name: '♫ Baroque Live Music 24/7 - Classical Music from the Baroque Period ♫ クラシック ライブ',
		trackID: '2gO1v2GPMFk',
		genre: Genre.classical
	},
	chinesePop: {
		name: '網路流行音樂電台 | Chinese POP Music 24/7',
		trackID: 'wrYF0HX7Kzc',
		genre: Genre.pop
	},
	frenchCafe: {
		name: 'Positive Bossa Nova Jazz Music for Relax, Good Mood - Paris Cafe Ambience',
		trackID: 'g6bn6XrhYdc',
		genre: Genre.jazz
	},
	spanishPop: {
		name: 'Lo Mas Nuevo 2023',
		trackID: 'D5bt0BRYrfQ',
		genre: Genre.pop
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
			name: 'Chicago',
			videoID: '9Prtp_eNUiI',
			type: 'drive',
			offset: 10,
			tags: ['night'],
			suggestedTrack: _tracks.englishRNB
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
			tags: ['night'],
			suggestedTrack: _tracks.vaporwave
		},
		{
			name: 'Seattle',
			videoID: 'fkps18H3SXY',
			type: 'drive',
			offset: 50,
			tags: ['day'],
			suggestedTrack: _tracks.jazz
		},
		{
			name: 'Seattle',
			videoID: 'NaWYnMJA5NE',
			type: 'walk',
			offset: 10,
			tags: ['day', 'rain'],
			suggestedTrack: _tracks.coffeeShopLofi
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
			name: 'Mumbai',
			videoID: '0o8PlX0JUn0',
			offset: 28,
			type: 'drive',
			tags: ['night'],
			suggestedTrack: _tracks.hindiLofi
		},
		{
			name: 'Kochi',
			videoID: '4YKjcbVUkP0',
			type: 'walk',
			tags: ['day', 'rain'],
			suggestedTrack: _tracks.hindiLofi
		}
	],
	[Country.mexico]: [
		{
			name: 'Mexico City',
			videoID: 'JCXH_WyC8A4',
			type: 'drive',
			suggestedTrack: _tracks.spanishPop,
			tags: ['evening', 'night']
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
			name: 'Osaka',
			videoID: 'GgOTV7VrlPw',
			offset: 15,
			type: 'drive',
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
			suggestedTrack: _tracks.cityPopLive
		}
	],
	[Country.france]: [
		{
			name: 'Paris',
			videoID: '3j-AVL3Pr3w',
			type: 'walk',
			offset: 30,
			suggestedTrack: _tracks.frenchCafe,
			tags: ['night', 'evening']
		},
		{
			name: 'Paris',
			videoID: 'lN43inpI2lk',
			type: 'drive',
			offset: 30,
			suggestedTrack: _tracks.frenchCafe,
			tags: ['day']
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
			suggestedTrack: _tracks.asianLofi,
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
			suggestedTrack: _tracks.asianLofi
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
			type: 'walk'
		},
		{
			name: 'Seoul',
			videoID: 'KGAIumGxQeY',
			tags: ['evening'],
			type: 'drive'
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
			name: 'Busan',
			videoID: 'XPRqAkL7Kfk',
			type: 'drive',
			tags: ['night'],
			suggestedTrack: _tracks.koreanRB
		},
		{
			name: 'Gangnam',
			videoID: 'EJJ8rmIWUcQ',
			type: 'walk',
			tags: ['day', 'rain']
		},
		{
			name: 'Gwangju',
			videoID: 'pg9cq7QlEYI',
			type: 'walk',
			tags: ['night', 'snow']
		}
	]
};
