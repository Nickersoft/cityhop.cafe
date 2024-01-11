import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
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
