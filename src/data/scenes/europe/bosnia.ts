import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Bosnia and Herzegovina',
	emoji: 'flag',
	scenes: [
		{
			name: 'Sarajevo',
			type: SceneTypes.walk,
			videoID: 'ZjSecFsLUaM',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Sarajevo',
			type: SceneTypes.drive,
			videoID: 'XLuV3_a-ro0',
			offset: { start: 30 },
			tags: [Tags.evening, Tags.night]
		}
	]
} satisfies Country;
