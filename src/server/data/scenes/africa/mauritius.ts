import { createCountry } from '../../../schema';
import { SceneTypes, Tags } from '$lib/enums';

export default createCountry({
	name: 'Mauritius',
	scenes: [
		{
			name: 'Port Louis',
			type: SceneTypes.walk,
			videoID: 'wibuNB3j_D8',
			tags: [Tags.day]
		}
	]
});
