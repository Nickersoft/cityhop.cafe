import { SceneTypes } from '../../../enums';
import { Tags } from '../../../enums';
import type { Country } from '../../../types';

export default {
	name: 'Singapore',
	emoji: 'flag',
	scenes: [
		{
			name: 'Singapore',
			type: SceneTypes.walk,
			videoID: 'aUJl46bEWYo',
			offset: { start: 10 },
			tags: [Tags.day]
		},
		{
			name: 'Singapore',
			type: SceneTypes.drive,
			videoID: 'AEgrx3Uxfts',
			tags: [Tags.evening],
			offset: { start: 30 }
		},
		{
			name: 'Dakota Crescent',
			type: SceneTypes.walk,
			videoID: 'y_QJYfn-ISI',
			tags: [Tags.day, Tags.rain]
		},
		{
			name: 'Geylang',
			type: SceneTypes.walk,
			videoID: 'IpysBDT_y_c',
			tags: [Tags.day, Tags.rain]
		}
	]
} satisfies Country;
