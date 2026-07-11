import { createCountry } from '../../../schema';
import { SceneTypes, Tags } from '$lib/enums';

export default createCountry({
	name: 'Kenya',
	scenes: [
		{
			name: 'Nairobi',
			type: SceneTypes.walk,
			videoID: 'QH2Zqg7knyw',
			offset: { start: 60 },
			tags: [Tags.day]
		}
	]
});
