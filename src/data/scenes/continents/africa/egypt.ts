import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
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
