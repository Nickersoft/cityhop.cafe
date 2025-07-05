import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';

export default createCountry({
	name: 'Denmark',
	scenes: [
		{
			name: 'Cophenhagen',
			type: SceneTypes.walk,
			videoID: 'KMCdDE6FSP8',
			offset: { start: 50 },
			tags: [Tags.night]
		}
	]
});
