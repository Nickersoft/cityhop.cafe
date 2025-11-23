import { createCountry } from '../../../schema';
import { SceneTypes } from '$lib/enums';

export default createCountry({
	name: 'Egypt',
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
});
