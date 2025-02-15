import { SceneTypes } from '$enums';
import { Tags } from '$enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Bosnia and Herzegovina',
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
});
