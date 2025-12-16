import { createCountry } from '../../../schema';
import { SceneTypes, Tags } from '$lib/enums';

export default createCountry({
	name: 'South Africa',
	scenes: [
		{
			name: 'Cape Town',
			type: SceneTypes.drive,
			videoID: 'Fvt6rD9tt1c',
			tags: [Tags.day],
			offset: { start: 60 }
		},
		{
			name: 'Johannesburg',
			type: SceneTypes.drive,
			videoID: '_XMr0bE5cwo',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
});
