import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'New Zealand',
	emoji: 'flag',
	scenes: [
		{
			name: 'Auckland City',
			type: SceneTypes.drive,
			videoID: 'HdEMxWMXgPQ',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
