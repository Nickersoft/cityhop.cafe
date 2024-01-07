import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'South Africa',
	emoji: '🇿🇦',
	scenes: [
		{
			name: 'Cape Town',
			type: SceneTypes.drive,
			videoID: 'Fvt6rD9tt1c',
			tags: [Tags.day],
			offset: { start: 60 }
		}
	]
} satisfies Country;
