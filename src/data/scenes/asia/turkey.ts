import { SceneTypes } from '$enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Turkey',
	scenes: [
		{
			name: 'Istanbul',
			type: SceneTypes.walk,
			videoID: 'jcnu9Q5Dm2A',
			offset: { start: 30 }
		}
	]
});
