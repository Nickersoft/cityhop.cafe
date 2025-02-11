import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Scotland',
	emoji: 'flag',
	scenes: [
		{
			name: 'Edinburgh',
			type: SceneTypes.walk,
			videoID: 'o9aH4xk25yg',
			offset: { start: 30 },
			tags: [Tags.day, Tags.night, Tags.rain]
		}
	]
} satisfies Country;
