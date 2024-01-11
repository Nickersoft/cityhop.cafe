import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Netherlands',
	emoji: 'flag',
	scenes: [
		{
			name: 'Amsterdam',
			type: SceneTypes.walk,
			videoID: 'U40bMk7G2zY',
			offset: { start: 120 },
			tags: [Tags.night]
		}
	]
} satisfies Country;
