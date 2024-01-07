import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'Austria',
	emoji: '🇦🇹',
	scenes: [
		{
			name: 'Vienna',
			type: SceneTypes.walk,
			videoID: 'P5oYtWDb8FM',
			tags: [Tags.evening],
			offset: { start: 60 }
		}
	]
} satisfies Country;
