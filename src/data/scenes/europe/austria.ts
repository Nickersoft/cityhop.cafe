import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Austria',
	scenes: [
		{
			name: 'Vienna',
			type: SceneTypes.walk,
			videoID: 'P5oYtWDb8FM',
			tags: [Tags.evening],
			offset: { start: 60 }
		}
	]
});
