import { createCountry } from '$schema';
import { SceneTypes, Tags } from '$enums';

export default createCountry({
	name: 'South Africa',
	scenes: [
		{
			name: 'Cape Town',
			type: SceneTypes.drive,
			videoID: 'Fvt6rD9tt1c',
			tags: [Tags.day],
			offset: { start: 60 }
		}
	]
});
