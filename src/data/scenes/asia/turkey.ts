import { SceneTypes } from '$data/scene-types';
import type { Country } from '$lib/types';

export default {
	name: 'Turkey',
	emoji: 'flag',
	scenes: [
		{
			name: 'Istanbul',
			type: SceneTypes.walk,
			videoID: 'jcnu9Q5Dm2A',
			offset: { start: 30 }
		}
	]
} satisfies Country;
