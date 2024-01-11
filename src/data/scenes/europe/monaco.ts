import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Monaco',
	emoji: '🇲🇨',
	scenes: [
		{
			name: 'Monte Carlo',
			type: SceneTypes.walk,
			videoID: 'CAsklz0e0_Q',
			tags: [Tags.day],
			offset: { start: 60 }
		}
	]
} satisfies Country;
