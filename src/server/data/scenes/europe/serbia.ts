import { SceneTypes } from '$lib/enums';
import { createCountry } from '$server/schema';

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
