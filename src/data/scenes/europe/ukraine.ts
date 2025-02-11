import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Ukraine',
	emoji: 'flag',
	scenes: [
		{
			name: 'Kyiv',
			type: SceneTypes.walk,
			videoID: 'TiMgfb9v-Yg',
			tags: [Tags.day],
			offset: { start: 30 }
		},
		{
			name: 'Kryvyi Rih',
			type: SceneTypes.walk,
			videoID: '8LKjoo6FRkg',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Lviv',
			type: SceneTypes.walk,
			videoID: 'DDWAobR8U0c',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Pripyat',
			type: SceneTypes.walk,
			videoID: '941dAGlpgbA',
			tags: [Tags.day],
			offset: { start: 30 }
		}
	]
} satisfies Country;
