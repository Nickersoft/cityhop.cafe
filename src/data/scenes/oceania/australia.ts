import { SceneTypes } from '$enums';
import { Tags } from '$enums';
import { createCountry } from '$schema';

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
