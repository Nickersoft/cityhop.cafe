import { createCountry } from '../../../schema';
import { SceneTypes, Tags } from '$lib/enums';

export default createCountry({
	name: 'Nigeria',
	scenes: [
		{
			name: 'Lagos',
			type: SceneTypes.walk,
			videoID: 'dcMJwGmNnMU',
			offset: { start: 120 },
			tags: [Tags.day]
		},
		{
			name: 'Ikoyi',
			type: SceneTypes.walk,
			videoID: '0DNL_MQE7mg',
			offset: { start: 120 },
			tags: [Tags.day]
		}
	]
});
