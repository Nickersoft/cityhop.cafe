import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Laos',
	emoji: 'flag',
	scenes: [
		{
			name: 'Luang Prabang',
			type: SceneTypes.walk,
			videoID: 'HjziDB09rDY',
			offset: { start: 30 },
			tags: [Tags.day, Tags.rain]
		},
		{
			name: 'Vientiane',
			type: SceneTypes.walk,
			videoID: 'Donphue7pbw',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
