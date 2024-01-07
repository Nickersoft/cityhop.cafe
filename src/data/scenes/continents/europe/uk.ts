import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'United Kingdom',
	emoji: '🇬🇧',
	scenes: [
		{
			name: 'London',
			type: SceneTypes.walk,
			videoID: 'H43glfbQEh4',
			tags: [Tags.day, Tags.rain],
			offset: { start: 60 }
		},
		{
			name: 'Oxford',
			type: SceneTypes.walk,
			videoID: 'D1KsEOUqCEU',
			tags: [Tags.day, Tags.fog],
			offset: { start: 30 }
		}
	]
} satisfies Country;
