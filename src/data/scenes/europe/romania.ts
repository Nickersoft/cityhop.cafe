import { SceneTypes } from '$enums';
import { Tags } from '$enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Romania',
	scenes: [
		{
			name: 'Cluj-Napoca',
			type: SceneTypes.walk,
			videoID: 'oHBR5eRkIbY',
			offset: { start: 30, end: 300 },
			tags: [Tags.day]
		}
	]
});
