import { createCountry } from '$server/schema';
import { SceneTypes, Tags } from '$lib/enums';

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
