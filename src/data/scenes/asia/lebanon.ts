import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Lebanon',
	emoji: 'flag',
	scenes: [
		{
			name: 'Beirut',
			type: SceneTypes.walk,
			videoID: 'KMDWEwQDoc0',
			tags: [Tags.evening],
			offset: { start: 10 }
		}
	]
} satisfies Country;
