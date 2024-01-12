import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
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
