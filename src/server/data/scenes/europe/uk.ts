import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';
import { genres } from '$server/data/stations';

export default createCountry({
	name: 'United Kingdom',
	scenes: [
		{
			name: 'London',
			scenes: [
				{
					name: 'Central London I',
					type: SceneTypes.walk,
					videoID: 'H43glfbQEh4',
					tags: [Tags.day, Tags.rain],
					offset: { start: 60 }
				},
				{
					name: 'Central London II',
					videoID: 'A36DcBstvNk',
					type: SceneTypes.walk,
					tags: [Tags.christmas, Tags.snow],
					offset: { start: 120 }
				}
			]
		},
		{
			name: 'North Yorkshire ➡️ Cumbria',
			videoID: 'yd_P3j67-SQ',
			type: SceneTypes.drive,
			tags: [Tags.night],
			suggestedTrack: genres.lofi.stations.sleep
		},
		{
			name: 'Oxford',
			type: SceneTypes.walk,
			videoID: 'D1KsEOUqCEU',
			tags: [Tags.day, Tags.fog],
			offset: { start: 30 }
		}
	]
});
