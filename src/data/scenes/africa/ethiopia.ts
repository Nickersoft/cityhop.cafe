import { createCountry } from '$schema';
import { SceneTypes, Tags } from '$enums';

export default createCountry({
	name: 'Ethiopia',
	scenes: [
		{
			name: 'Addis Ababa',
			type: SceneTypes.walk,
			videoID: '9Avdd0hanUs',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
});
