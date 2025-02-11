import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Bosnia and Herzegovina',
	emoji: 'flag',
	scenes: [
		{
			name: 'Sarajevo',
			type: SceneTypes.walk,
			videoID: 'ZjSecFsLUaM',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Sarajevo',
			type: SceneTypes.drive,
			videoID: 'XLuV3_a-ro0',
			offset: { start: 30 },
			tags: [Tags.evening, Tags.night]
		}
	]
} satisfies Country;
