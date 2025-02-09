import { SceneTypes } from '$lib/enums';
import { genres } from '$data/stations';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Italy',
	emoji: 'flag',
	scenes: [
		{
			name: 'Cinque Terre',
			type: SceneTypes.walk,
			videoID: 'FmNNrCJUhac',
			offset: { start: 10 },
			tags: [Tags.rain, Tags.evening]
		},
		{
			name: 'Milan',
			type: SceneTypes.drive,
			videoID: '9IoroeGhXtg',
			offset: { start: 60 },
			tags: [Tags.day],
			suggestedTrack: genres.jazz.stations.work
		},
		{
			name: 'Naples',
			type: SceneTypes.walk,
			videoID: 'Ypq4N3EldBM',
			offset: { start: 5 },
			tags: [Tags.day, Tags.rain]
		},
		{
			name: 'Rome',
			type: SceneTypes.walk,
			videoID: 'EsFheWkimsU',
			offset: { start: 60 },
			suggestedTrack: genres.classical.stations.baroque
		},
		{
			name: 'Rome',
			type: SceneTypes.drive,
			videoID: 'ytiM1nMv_xU',
			offset: { start: 30 },
			suggestedTrack: genres.jazz.stations.work
		},

		{
			name: 'Tirano',
			type: SceneTypes.drive,
			videoID: 'Mw9qiV7XlFs',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Venice',
			type: SceneTypes.boat,
			videoID: 'TJLjnp39GBg',
			offset: { start: 80 },
			tags: [Tags.evening]
		},
		{
			name: 'Venice',
			type: SceneTypes.walk,
			videoID: 'kccv6YJZ0P4',
			offset: { start: 50 },
			tags: [Tags.evening],
			suggestedTrack: genres.classical.stations.baroque
		}
	]
} satisfies Country;
