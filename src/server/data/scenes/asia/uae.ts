import { SceneTypes } from '$lib/enums';
import { genres } from '$server/data';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';

export default createCountry({
	name: 'United Arab Emirates',
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
});
