import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'Russia',
	emoji: '🇷🇺',
	scenes: [
		{
			name: 'Moscow',
			type: SceneTypes.walk,
			videoID: 'e5HZevxkQbs',
			offset: { start: 30 },
			tags: [Tags.day, Tags.snow]
		},
		{
			name: 'St. Petersburg',
			type: SceneTypes.drive,
			videoID: 'vKD8_m88tuk',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'St. Petersburg',
			type: SceneTypes.walk,
			videoID: 'KBeCMiUPuic',
			offset: { start: 45 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
