import { createCountry } from '../../../schema';
import { SceneTypes, Tags } from '$lib/enums';

export default createCountry({
	name: 'Brazil',
	scenes: [
		{
			name: 'Rio de Janeiro',
			type: SceneTypes.walk,
			videoID: 'U4fLcsItJqI',
			tags: [Tags.evening, Tags.day],
			length: 1800,
			offset: { start: 30 }
		}
	]
});
