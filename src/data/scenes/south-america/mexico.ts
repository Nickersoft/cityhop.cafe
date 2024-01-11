import { SceneTypes } from '$data/scene-types';
import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Mexico',
	emoji: 'flag',
	scenes: [
		{
			name: 'Cancun',
			type: SceneTypes.walk,
			videoID: 'zSLXfX0Q3CU',
			offset: { start: 60, end: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Mexico City',
			type: SceneTypes.walk,
			videoID: 'UDFaRy9UH4Q',
			tags: [Tags.day],
			offset: { start: 30 }
		},
		{
			name: 'Mexico City',
			type: SceneTypes.drive,
			videoID: 'JCXH_WyC8A4',
			suggestedTrack: stations['Spanish Hits Radio'],
			tags: [Tags.evening, Tags.night]
		}
	]
} satisfies Country;
