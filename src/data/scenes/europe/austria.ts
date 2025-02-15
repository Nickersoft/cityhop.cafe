import { SceneTypes } from '$enums';
import { Tags } from '$enums';
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
