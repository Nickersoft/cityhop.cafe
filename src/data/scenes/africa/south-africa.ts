import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
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
