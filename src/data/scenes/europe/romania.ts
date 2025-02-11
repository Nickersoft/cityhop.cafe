import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Romania',
	emoji: 'flag',
	scenes: [
		{
			name: 'Cluj-Napoca',
			type: SceneTypes.walk,
			videoID: 'oHBR5eRkIbY',
			offset: { start: 30, end: 300 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
