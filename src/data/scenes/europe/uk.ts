import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'United Kingdom',
	emoji: '🇬🇧',
	scenes: [
		{
			name: 'London',
			scenes: [
				{
					name: 'Central London I',
					type: SceneTypes.walk,
					videoID: 'H43glfbQEh4',
					tags: [Tags.day, Tags.rain],
					offset: { start: 60 }
				},
				{
					name: 'Central London II',
					videoID: 'A36DcBstvNk',
					type: SceneTypes.walk,
					tags: [Tags.christmas, Tags.snow],
					offset: { start: 120 }
				}
			]
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
