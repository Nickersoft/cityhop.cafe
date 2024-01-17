import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
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
