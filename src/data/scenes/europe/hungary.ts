import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Hungary',
	emoji: '🇭🇺',
	scenes: [
		{
			name: 'Budapest',
			videoID: 'vKmeQj-d1kE',
			type: SceneTypes.walk,
			offset: { start: 120 },
			tags: [Tags.christmas, Tags.snow]
		}
	]
} satisfies Country;
