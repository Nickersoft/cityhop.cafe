import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'New Zealand',
	scenes: [
		{
			name: 'Auckland City',
			type: SceneTypes.drive,
			videoID: 'HdEMxWMXgPQ',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
});
