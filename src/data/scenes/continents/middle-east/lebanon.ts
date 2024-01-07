import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'Lebanon',
	emoji: '🇱🇧',
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
