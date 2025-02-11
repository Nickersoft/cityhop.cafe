import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Ghana',
	emoji: 'flag',
	scenes: [
		{
			name: 'Accra',
			type: SceneTypes.walk,
			videoID: 'x0rM132jMR8',
			tags: [Tags.day]
		}
	]
} satisfies Country;
