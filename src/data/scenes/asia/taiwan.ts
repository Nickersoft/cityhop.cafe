import { SceneTypes } from '$data/scene-types';
import { genres } from '$data/stations';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Taiwan',
	emoji: 'flag',
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
} satisfies Country;
