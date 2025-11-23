import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'Lebanon',
	scenes: [
		{
			name: 'Beirut',
			type: SceneTypes.walk,
			videoID: 'KMDWEwQDoc0',
			tags: [Tags.evening],
			offset: { start: 240 }
		}
	]
});
