import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';

export default createCountry({
	name: 'Australia',
	scenes: [
		{
			name: 'Brisbane',
			type: SceneTypes.walk,
			videoID: 'G1zBrv87rBw',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Sydney',
			type: SceneTypes.drive,
			videoID: 'q21Kj-pxJW4',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
});
