import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
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
