import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Vietnam',
	emoji: 'flag',
	scenes: [
		{
			name: 'Ho Chi Minh City',
			type: SceneTypes.walk,
			videoID: 'SmmquqDceus',
			tags: [Tags.night],
			offset: { start: 120 }
		}
	]
} satisfies Country;
