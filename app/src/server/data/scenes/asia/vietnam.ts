import { SceneTypes } from '#lib/enums.js';
import { Tags } from '#lib/enums.js';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'Vietnam',
	scenes: [
		{
			name: 'Ho Chi Minh City',
			type: SceneTypes.walk,
			videoID: '-U7zcFxppfM',
			tags: [Tags.night]
		}
	]
});
