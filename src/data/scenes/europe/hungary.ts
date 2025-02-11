import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Hungary',
	emoji: 'flag',
	scenes: [
		{
			name: 'Budapest',
			videoID: 'vKmeQj-d1kE',
			type: SceneTypes.walk,
			offset: { start: 120 },
			tags: [Tags.christmas, Tags.snow]
		}
	]
} satisfies Country;
