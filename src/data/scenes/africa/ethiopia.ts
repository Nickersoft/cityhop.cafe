import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Ethiopia',
	emoji: 'flag',
	scenes: [
		{
			name: 'Addis Ababa',
			type: SceneTypes.walk,
			videoID: '9Avdd0hanUs',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
