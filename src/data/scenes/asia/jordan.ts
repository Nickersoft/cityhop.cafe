import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Jordan',
	emoji: 'flag',
	scenes: [
		{
			name: 'Petra',
			type: SceneTypes.walk,
			videoID: 'J4NMLfsd5tU',
			tags: [Tags.day],
			offset: { start: 120 }
		}
	]
} satisfies Country;
