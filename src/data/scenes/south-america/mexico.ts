import { SceneTypes } from '../../../enums';
import { genres } from '$data/stations';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

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
			suggestedTrack: genres.pop.stations.spanish,
			tags: [Tags.evening, Tags.night]
		}
	]
} satisfies Country;
