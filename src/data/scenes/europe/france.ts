import { SceneTypes } from '$enums';
import { genres } from '$data/stations';
import { Tags } from '$enums';
import { createCountry } from '$schema';

export default createCountry({
	name: 'France',
	scenes: [
		{
			name: 'Nice',
			type: SceneTypes.walk,
			videoID: 'ON1YueLJ7OA',
			offset: { start: 180 },
			tags: [Tags.day]
		},
		{
			name: 'Paris',
			type: SceneTypes.drive,
			videoID: 'lN43inpI2lk',
			offset: { start: 30 },
			suggestedTrack: genres.jazz.stations.paris,
			tags: [Tags.day]
		},
		{
			name: 'Paris',
			type: SceneTypes.walk,
			videoID: '3j-AVL3Pr3w',
			offset: { start: 30 },
			suggestedTrack: genres.jazz.stations.paris,
			tags: [Tags.night, Tags.evening]
		},
		{
			name: 'Strasbourg',
			type: SceneTypes.walk,
			videoID: 'M7OjlTNIpS0',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
});
