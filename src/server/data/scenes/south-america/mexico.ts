import { createCountry } from '$server/schema';
import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { genres } from '$server/data';

export default createCountry({
	name: 'Mexico',
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
});
