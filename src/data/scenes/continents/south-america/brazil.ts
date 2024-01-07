import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'Brazil',
	emoji: '🇧🇷',
	scenes: [
		{
			name: 'Rio de Janeiro',
			type: SceneTypes.walk,
			videoID: 'U4fLcsItJqI',
			tags: [Tags.evening, Tags.day],
			length: 1800,
			offset: { start: 30 }
		}
	]
} satisfies Country;
