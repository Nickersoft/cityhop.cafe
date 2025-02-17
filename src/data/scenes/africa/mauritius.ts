import { createCountry } from '$schema';
import { SceneTypes, Tags } from '$enums';

export default createCountry({
	name: 'Mauritius',
	scenes: [
		{
			name: 'Port Louis',
			type: SceneTypes.walk,
			videoID: 'PcP5XiZX1CY',
			tags: [Tags.day],
			length: 1800
		}
	]
});
