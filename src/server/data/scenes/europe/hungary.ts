import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';

export default createCountry({
	name: 'Hungary',
	scenes: [
		{
			name: 'Budapest',
			videoID: 'vKmeQj-d1kE',
			type: SceneTypes.walk,
			offset: { start: 120 },
			tags: [Tags.christmas, Tags.snow]
		}
	]
});
