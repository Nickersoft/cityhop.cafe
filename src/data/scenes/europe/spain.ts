import { SceneTypes } from '$enums';
import { Tags } from '$enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Spain',
	scenes: [
		{
			name: 'Barcelona',
			type: SceneTypes.walk,
			videoID: '__civ2E9A4g',
			tags: [Tags.day, Tags.night],
			offset: { start: 30 }
		},
		{
			name: 'Madrid',
			type: SceneTypes.walk,
			videoID: 'TXH5eGF2COk',
			tags: [Tags.day],
			offset: { start: 30 }
		},
		{
			name: 'Valencia',
			type: SceneTypes.walk,
			videoID: 'msUFfnDHVA0',
			tags: [Tags.day],
			offset: { start: 30 }
		}
	]
});
