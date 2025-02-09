import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
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
