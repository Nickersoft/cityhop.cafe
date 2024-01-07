import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'Netherlands',
	emoji: '🇳🇱',
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
