import { SceneTypes } from '$lib/enums';
import { genres } from '../../stations';
import { Tags } from '$lib/enums';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'United Arab Emirates',
	scenes: [
		{
			name: 'Dubai',
			scenes: [
				{
					name: 'Meena Bazaar',
					videoID: 'Q7VqI0NBQsE',
					type: SceneTypes.walk,
					tags: [Tags.day]
				},
				{
					name: ' Burj Khalifa Lake',
					type: SceneTypes.walk,
					videoID: '8uvs5qEBQoE',
					tags: [Tags.night]
				},
				{
					name: 'Downtown Dubai',
					type: SceneTypes.drive,
					videoID: 'TE2tfavIo3E',
					offset: { start: 30 },
					tags: [Tags.evening, Tags.night],
					suggestedTrack: genres.electronic.stations.synthwave
				}
			]
		}
	]
});
