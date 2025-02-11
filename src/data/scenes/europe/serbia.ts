import { SceneTypes } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Serbia',
	emoji: 'flag',
	scenes: [
		{
			name: 'Belgrade',
			type: SceneTypes.walk,
			videoID: 'NGvDS55KeCQ',
			offset: { start: 360, end: -100 }
		}
	]
} satisfies Country;
