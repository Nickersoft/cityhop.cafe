import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';

export default createCountry({
	name: 'Czechia',
	scenes: [
		{
			name: 'Brno',
			type: SceneTypes.walk,
			videoID: 'BGRhCDKz6lQ',
			tags: [Tags.day],
			offset: { start: 60 }
		},
		{
			name: 'Prague',
			type: SceneTypes.walk,
			videoID: 'oCV8bbM9hk0',
			tags: [Tags.day, Tags.night],
			offset: { start: 60 }
		}
	]
});
