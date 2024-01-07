import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'Romania',
	emoji: '🇷🇴',
	scenes: [
		{
			name: 'Cluj-Napoca',
			type: SceneTypes.walk,
			videoID: 'oHBR5eRkIbY',
			offset: { start: 30, end: 300 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
