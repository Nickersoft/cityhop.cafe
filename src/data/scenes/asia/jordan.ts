import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Jordan',
	emoji: '🇯🇴',
	scenes: [
		{
			name: 'Petra',
			type: SceneTypes.walk,
			videoID: 'J4NMLfsd5tU',
			tags: [Tags.day],
			offset: { start: 120 }
		}
	]
} satisfies Country;
