import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Ghana',
	emoji: 'flag',
	scenes: [
		{
			name: 'Accra',
			type: SceneTypes.walk,
			videoID: 'x0rM132jMR8',
			tags: [Tags.day]
		}
	]
} satisfies Country;
