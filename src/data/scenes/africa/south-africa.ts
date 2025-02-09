import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'South Africa',
	emoji: 'flag',
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
