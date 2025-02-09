import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Austria',
	emoji: 'flag',
	scenes: [
		{
			name: 'Vienna',
			type: SceneTypes.walk,
			videoID: 'P5oYtWDb8FM',
			tags: [Tags.evening],
			offset: { start: 60 }
		}
	]
} satisfies Country;
