import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Brazil',
	emoji: 'flag',
	scenes: [
		{
			name: 'Rio de Janeiro',
			type: SceneTypes.walk,
			videoID: 'U4fLcsItJqI',
			tags: [Tags.evening, Tags.day],
			length: 1800,
			offset: { start: 30 }
		}
	]
} satisfies Country;
