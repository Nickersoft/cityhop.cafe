import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Netherlands',
	scenes: [
		{
			name: 'Amsterdam',
			type: SceneTypes.walk,
			videoID: 'U40bMk7G2zY',
			offset: { start: 120 },
			tags: [Tags.night]
		}
	]
});
