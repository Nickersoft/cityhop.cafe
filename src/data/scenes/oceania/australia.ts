import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Australia',
	emoji: 'flag',
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
} satisfies Country;
