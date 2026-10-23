import { SceneTypes } from '#lib/enums.js';
import { Tags } from '#lib/enums.js';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'Siberia',
	scenes: [
		{
			name: 'Krasnoyarsk',
			type: SceneTypes.walk,
			videoID: 'Zb0QhkbisKg',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Tomsk',
			type: SceneTypes.walk,
			videoID: 'P4a_U1KrTDY',
			offset: { start: 30 },
			tags: [Tags.day, Tags.snow]
		}
	]
});
