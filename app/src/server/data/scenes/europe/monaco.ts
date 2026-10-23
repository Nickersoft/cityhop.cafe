import { SceneTypes } from '#lib/enums.js';
import { Tags } from '#lib/enums.js';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'Monaco',
	scenes: [
		{
			name: 'Monte Carlo',
			type: SceneTypes.walk,
			videoID: 'CAsklz0e0_Q',
			tags: [Tags.day],
			offset: { start: 60 }
		}
	]
});
