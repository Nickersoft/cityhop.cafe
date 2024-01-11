import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Australia',
	emoji: '🇦🇺',
	scenes: [
		{
			name: 'Brisbane',
			type: SceneTypes.walk,
			videoID: 'G1zBrv87rBw',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
