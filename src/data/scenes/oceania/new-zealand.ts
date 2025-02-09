import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

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
