import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'Taiwan',
	emoji: '🇹🇼',
	scenes: [
		{
			name: 'Taipei',
			scenes: [
				{
					name: 'Taipei',
					type: SceneTypes.drive,
					videoID: 'P8Uh9f0EaU8',
					offset: { start: 60 },
					tags: [Tags.day],
					suggestedTrack: stations['Chinese Pop Radio']
				},
				{
					name: 'Taipei',
					type: SceneTypes.walk,
					videoID: '3j-5Uut60WM',
					offset: { start: 150 }
				}
			]
		},
		{
			name: 'Kaohsiung',
			type: SceneTypes.walk,
			videoID: 'iG_pnxkGrVQ',
			offset: { start: 30 }
		}
	]
} satisfies Country;
