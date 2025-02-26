import { createCountry } from '$server/schema';
import { SceneTypes, Tags } from '$lib/enums';

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
