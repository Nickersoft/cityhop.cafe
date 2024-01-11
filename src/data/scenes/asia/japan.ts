import { SceneTypes } from '$data/scene-types';
import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Japan',
	emoji: '🇯🇵',
	scenes: [
		{
			name: 'Shibuya',
			type: SceneTypes.walk,
			videoID: 'b3yQXprMj3s',
			offset: { start: 45 },
			tags: [Tags.day]
		},
		{
			name: 'Yokohama',
			type: SceneTypes.walk,
			videoID: 'm6y03y_9ruA',
			tags: [Tags.snow, Tags.night]
		},
		{
			name: 'Kyoto',
			type: SceneTypes.walk,
			videoID: 'qgfd-uWTVwg',
			offset: { start: 50 },
			tags: [Tags.rain, Tags.night]
		},
		{
			name: 'Okutama Lake',
			type: SceneTypes.drive,
			videoID: '7a-GBnXz3i8',
			tags: [Tags.day],
			offset: { start: 60 },
			suggestedTrack: stations['Japanese City Pop Mix']
		},
		{
			name: 'Tokyo',
			type: SceneTypes.drive,
			videoID: 'lSgTVt60M6U',
			tags: [Tags.night]
		},
		{
			name: 'Osaka',
			type: SceneTypes.drive,
			videoID: 'GgOTV7VrlPw',
			offset: { start: 15 },
			tags: [Tags.night]
		},
		{
			name: 'Akita',
			type: SceneTypes.drive,
			videoID: 'CIRlmM8wI1g',
			offset: { start: 200 },
			tags: [Tags.day]
		},
		{
			name: 'Mount Fuji',
			type: SceneTypes.drive,
			videoID: 'naz_RVh48vg',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Nagasaki',
			type: SceneTypes.walk,
			videoID: 'Wey4zHA4nPg',
			tags: [Tags.night, Tags.rain],
			offset: { start: 30 }
		},
		{
			name: 'Tokyo',
			type: SceneTypes.walk,
			videoID: 'VqS9_CIm64E',
			offset: { start: 100 },
			tags: [Tags.night, Tags.rain]
		},
		{
			name: 'Oimachi',
			type: SceneTypes.walk,
			videoID: 'mzVmieBKwKk',
			offset: { start: 30 },
			tags: [Tags.night]
		},
		{
			name: 'Osaka',
			type: SceneTypes.walk,
			videoID: 'm65NkIAIMSw',
			offset: { start: 10 },
			tags: [Tags.night]
		}
	]
} satisfies Country;
