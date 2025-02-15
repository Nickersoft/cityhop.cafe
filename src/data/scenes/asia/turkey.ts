import { SceneTypes } from '$enums';
import type { Country } from '../../../types';

export default {
	name: 'Turkey',
	scenes: [
		{
			name: 'Istanbul',
			type: SceneTypes.walk,
			videoID: 'jcnu9Q5Dm2A',
			offset: { start: 30 }
		}
	]
} satisfies Country;
