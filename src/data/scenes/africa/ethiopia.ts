import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Ethiopia',
	emoji: 'flag',
	scenes: [
		{
			name: 'Addis Ababa',
			type: SceneTypes.walk,
			videoID: '9Avdd0hanUs',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
