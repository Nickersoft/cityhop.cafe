import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Vietnam',
	emoji: 'flag',
	scenes: [
		{
			name: 'Ho Chi Minh City',
			type: SceneTypes.walk,
			videoID: 'SmmquqDceus',
			tags: [Tags.night],
			offset: { start: 120 }
		}
	]
} satisfies Country;
