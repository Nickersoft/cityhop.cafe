import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Lebanon',
	emoji: 'flag',
	scenes: [
		{
			name: 'Beirut',
			type: SceneTypes.walk,
			videoID: 'KMDWEwQDoc0',
			tags: [Tags.evening],
			offset: { start: 10 }
		}
	]
} satisfies Country;
