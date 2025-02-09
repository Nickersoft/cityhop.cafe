import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Spain',
	emoji: 'flag',
	scenes: [
		{
			name: 'Barcelona',
			type: SceneTypes.walk,
			videoID: '__civ2E9A4g',
			tags: [Tags.day, Tags.night],
			offset: { start: 30 }
		},
		{
			name: 'Madrid',
			type: SceneTypes.walk,
			videoID: 'TXH5eGF2COk',
			tags: [Tags.day],
			offset: { start: 30 }
		},
		{
			name: 'Valencia',
			type: SceneTypes.walk,
			videoID: 'msUFfnDHVA0',
			tags: [Tags.day],
			offset: { start: 30 }
		}
	]
} satisfies Country;
