import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'Germany',
	emoji: '🇩🇪',
	scenes: [
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
} satisfies Country;
