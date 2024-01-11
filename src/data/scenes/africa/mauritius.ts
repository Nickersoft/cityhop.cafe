import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Mauritius',
	emoji: 'flag',
	scenes: [
		{
			name: 'Port Louis',
			type: SceneTypes.walk,
			videoID: 'PcP5XiZX1CY',
			tags: [Tags.day],
			length: 1800
		}
	]
} satisfies Country;
