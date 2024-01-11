import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Singapore',
	emoji: 'flag',
	scenes: [
		{
			name: 'Singapore',
			type: SceneTypes.walk,
			videoID: 'aUJl46bEWYo',
			offset: { start: 10 },
			tags: [Tags.day]
		},
		{
			name: 'Singapore',
			type: SceneTypes.drive,
			videoID: 'AEgrx3Uxfts',
			tags: [Tags.evening],
			offset: { start: 30 }
		}
	]
} satisfies Country;
