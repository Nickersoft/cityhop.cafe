import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'Mauritius',
	emoji: '🇲🇺',
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
