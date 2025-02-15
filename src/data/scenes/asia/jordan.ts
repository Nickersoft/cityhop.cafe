import { SceneTypes } from '$enums';
import { Tags } from '$enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Jordan',
	scenes: [
		{
			name: 'Petra',
			type: SceneTypes.walk,
			videoID: 'J4NMLfsd5tU',
			tags: [Tags.day],
			offset: { start: 120 }
		}
	]
});
