import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';

export default createCountry({
	name: 'Thailand',
	scenes: [
		{
			name: 'Bangkok',
			type: SceneTypes.walk,
			videoID: 'ol-IOOBs4oY',
			tags: [Tags.night],
			offset: { start: 80 }
		},
		{
			name: 'Bangkok',
			type: SceneTypes.drive,
			videoID: 'GuyazY5xtuI',
			offset: { start: 60 },
			tags: [Tags.day]
		},
		{
			name: 'Koh Kut Island',
			type: SceneTypes.walk,
			videoID: 'RfVZMCCeAzI',
			offset: { start: 300 },
			tags: [Tags.day]
		}
	]
});
