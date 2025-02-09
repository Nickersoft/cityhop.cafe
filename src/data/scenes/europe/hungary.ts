import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Hungary',
	emoji: 'flag',
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
