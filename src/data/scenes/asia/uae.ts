import { SceneTypes } from '$lib/enums';
import { genres } from '$data/stations';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'United Arab Emirates',
	emoji: 'flag',
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
			suggestedTrack: genres.electronic.stations.synthwave
		}
	]
} satisfies Country;
