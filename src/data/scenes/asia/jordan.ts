import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

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
