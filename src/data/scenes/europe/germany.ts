import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'Germany',
	scenes: [
		{
			name: 'Dresden',
			videoID: '-FIJHCY8j-0',
			type: SceneTypes.walk,
			tags: [Tags.christmas, Tags.snow],
			offset: { start: 100 }
		},
		{
			name: 'Göttingen',
			videoID: 'KL9VyAXPQmg',
			type: SceneTypes.walk,
			offset: { start: 120 },
			tags: [Tags.christmas, Tags.snow]
		},
		{
			name: 'Tubingen',
			type: SceneTypes.walk,
			videoID: 'jVAVdk819TI',
			tags: [Tags.day],
			offset: { start: 30 }
		},
		{
			name: 'Berlin',
			type: SceneTypes.walk,
			videoID: 'zca688Ecwpk',
			tags: [Tags.day],
			offset: { start: 300 }
		},
		{
			name: 'Cologne',
			type: SceneTypes.walk,
			videoID: 'mQ2JB1p-DHc',
			tags: [Tags.day],
			offset: { start: 30 }
		},
		{
			name: 'Frankfurt',
			type: SceneTypes.walk,
			videoID: '5COC4WMheH0',
			tags: [Tags.day],
			offset: { start: 30 }
		}
	]
});
