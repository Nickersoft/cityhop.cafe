import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Scotland',
	emoji: 'flag',
	scenes: [
		{
			name: 'Edinburgh',
			type: SceneTypes.walk,
			videoID: 'o9aH4xk25yg',
			offset: { start: 30 },
			tags: [Tags.day, Tags.night, Tags.rain]
		}
	]
} satisfies Country;
