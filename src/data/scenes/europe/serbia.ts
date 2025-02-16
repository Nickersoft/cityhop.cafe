import { SceneTypes } from '$enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Serbia',
	scenes: [
		{
			name: 'Belgrade',
			type: SceneTypes.walk,
			videoID: 'NGvDS55KeCQ',
			offset: { start: 360, end: -100 }
		}
	]
});
