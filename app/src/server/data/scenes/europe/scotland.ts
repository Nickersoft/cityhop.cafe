import { SceneTypes } from '#lib/enums.js';
import { Tags } from '#lib/enums.js';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'Scotland',
	scenes: [
		{
			name: 'Edinburgh',
			type: SceneTypes.walk,
			videoID: 'o9aH4xk25yg',
			offset: { start: 30 },
			tags: [Tags.day, Tags.night, Tags.rain]
		}
	]
});
