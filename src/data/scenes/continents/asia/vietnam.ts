import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'Vietnam',
	emoji: '🇻🇳',
	scenes: [
		{
			name: 'Ho Chi Minh City',
			type: SceneTypes.walk,
			videoID: 'SmmquqDceus',
			tags: [Tags.night],
			offset: { start: 120 }
		}
	]
} satisfies Country;
