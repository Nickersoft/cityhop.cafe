import { SceneTypes } from '$data/scene-types';
import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'United Arab Emirates',
	emoji: '🇦🇪',
	scenes: [
		{
			name: 'Dubai',
			type: SceneTypes.walk,
			videoID: '8uvs5qEBQoE',
			tags: [Tags.night]
		},
		{
			name: 'Dubai',
			type: SceneTypes.drive,
			videoID: 'TE2tfavIo3E',
			offset: { start: 30 },
			tags: [Tags.evening, Tags.night],
			suggestedTrack: stations['Synthwave Radio']
		}
	]
} satisfies Country;
