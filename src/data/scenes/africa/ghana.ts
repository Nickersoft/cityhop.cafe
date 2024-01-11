import { SceneTypes } from '$data/scene-types';
import type { Country } from '$lib/types';

export default {
	name: 'Egypt',
	emoji: 'flag',
	scenes: [
		{
			name: 'Cairo',
			type: SceneTypes.walk,
			videoID: 'Q9cAWThpbbk',
			offset: { start: 60 }
		}
	]
} satisfies Country;
