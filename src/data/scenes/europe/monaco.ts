import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Monaco',
	emoji: 'flag',
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
