import { SceneTypes } from '#lib/enums.js';
import { Tags } from '#lib/enums.js';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'Denmark',
	scenes: [
		{
			name: 'Copenhagen',
			type: SceneTypes.walk,
			videoID: 'KMCdDE6FSP8',
			offset: { start: 50 },
			tags: [Tags.night]
		}
	]
});
