import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Russia',
	emoji: 'flag',
	scenes: [
		{
			name: 'Moscow',
			scenes: [
				{
					name: 'Moscow',
					type: SceneTypes.walk,
					videoID: 'e5HZevxkQbs',
					offset: { start: 30 },
					tags: [Tags.christmas, Tags.day, Tags.snow]
				},
				{
					name: 'Moscow',
					videoID: 'vDAmd0hTnbs',
					type: SceneTypes.walk,
					offset: { start: 30 },
					tags: [Tags.day, Tags.snow]
				}
			]
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
