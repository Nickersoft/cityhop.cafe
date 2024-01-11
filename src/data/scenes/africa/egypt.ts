import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Ghana',
	emoji: '🇬🇭',
	scenes: [
		{
			name: 'Accra',
			type: SceneTypes.walk,
			videoID: 'x0rM132jMR8',
			tags: [Tags.day]
		}
	]
} satisfies Country;
