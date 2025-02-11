import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Netherlands',
	emoji: 'flag',
	scenes: [
		{
			name: 'Amsterdam',
			type: SceneTypes.walk,
			videoID: 'U40bMk7G2zY',
			offset: { start: 120 },
			tags: [Tags.night]
		}
	]
} satisfies Country;
