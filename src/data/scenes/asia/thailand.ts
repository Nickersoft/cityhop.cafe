import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Thailand',
	emoji: '🇹🇭',
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
} satisfies Country;
