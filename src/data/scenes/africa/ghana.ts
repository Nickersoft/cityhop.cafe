import { createCountry } from '$schema';
import { SceneTypes, Tags } from '$enums';

export default createCountry({
	name: 'Ghana',
	scenes: [
		{
			name: 'Accra',
			type: SceneTypes.walk,
			videoID: 'x0rM132jMR8',
			tags: [Tags.day]
		}
	]
});
