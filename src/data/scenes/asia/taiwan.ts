import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$schema';
import { genres } from '$data/stations';

export default createCountry({
	name: 'Taiwan',
	scenes: [
		{
			name: 'Taipei',
			type: SceneTypes.drive,
			videoID: 'P8Uh9f0EaU8',
			offset: { start: 60 },
			tags: [Tags.day],
			suggestedTrack: genres.pop.stations.chinese
		},
		{
			name: 'Taipei',
			type: SceneTypes.walk,
			videoID: '3j-5Uut60WM',
			offset: { start: 150 }
		},
		{
			name: 'Kaohsiung',
			type: SceneTypes.walk,
			videoID: 'iG_pnxkGrVQ',
			offset: { start: 30 }
		},
		{
			name: 'Taoyuan International Airport',
			type: SceneTypes.walk,
			videoID: 'qiDXhPx-Xck',
			offset: { start: 70, end: 60 }
		}
	]
});
