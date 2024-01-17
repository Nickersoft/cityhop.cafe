import { SceneTypes } from '$data/scene-types';
import type { Country } from '$lib/types';

export default {
	name: 'Egypt',
	emoji: 'flag',
	scenes: [
		{
			name: 'Cairo',
			type: SceneTypes.walk,
			videoID: 'Q9cAWThpbbk',
			offset: { start: 60 }
		},
		{
			name: 'Pyramids of Giza',
			type: SceneTypes.walk,
			videoID: 'EaQr917lRgI',
			offset: { start: 120, end: 60 }
		}
	]
} satisfies Country;
