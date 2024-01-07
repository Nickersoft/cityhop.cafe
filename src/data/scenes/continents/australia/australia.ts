import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

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
