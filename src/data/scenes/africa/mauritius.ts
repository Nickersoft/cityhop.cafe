import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Mauritius',
	emoji: 'flag',
	scenes: [
		{
			name: 'Port Louis',
			type: SceneTypes.walk,
			videoID: 'PcP5XiZX1CY',
			tags: [Tags.day],
			length: 1800
		}
	]
} satisfies Country;
