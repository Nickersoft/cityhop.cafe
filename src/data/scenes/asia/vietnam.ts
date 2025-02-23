import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Vietnam',
	scenes: [
		{
			name: 'Ho Chi Minh City',
			type: SceneTypes.walk,
			videoID: 'SmmquqDceus',
			tags: [Tags.night],
			offset: { start: 120 }
		}
	]
});
