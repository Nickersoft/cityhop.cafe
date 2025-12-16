import { createCountry } from '../../../schema';
import { SceneTypes, Tags } from '$lib/enums';

export default createCountry({
	name: 'Morroco',
	scenes: [
		{
			name: 'Marrakech',
			type: SceneTypes.walk,
			videoID: 'cFV6cMQUbGo',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Casablanca',
			type: SceneTypes.walk,
			videoID: 'nJIMWZoeBzQ',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
});
