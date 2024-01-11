import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Switzerland',
	emoji: 'flag',
	scenes: [
		{
			name: 'Bern',
			type: SceneTypes.walk,
			videoID: 'HG-IIit3ubs',
			offset: { start: 30 },
			tags: [Tags.snow, Tags.day]
		},
		{
			name: 'Basel',
			videoID: 'DeXnO5W3-M0',
			type: SceneTypes.walk,
			offset: { start: 120 },
			tags: [Tags.christmas, Tags.snow]
		},
		{
			name: 'Lauterbrunnen',
			type: SceneTypes.drive,
			videoID: 'b-WViLMs_4c',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Lauterbrunnen',
			type: SceneTypes.walk,
			videoID: 'Bq4rmeIvJbs',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'St. Moritz',
			type: SceneTypes.drive,
			videoID: 'nKOe2PuERD0',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Zermatt',
			type: SceneTypes.walk,
			videoID: 'LFOx-vmYrts',
			offset: { start: 30 },
			tags: [Tags.day, Tags.rain]
		},
		{
			name: 'Zürich',
			type: SceneTypes.walk,
			videoID: 'mEuj3Ye9QDw',
			offset: { start: 60 },
			tags: [Tags.day]
		},
		{
			name: 'Zurich',
			type: SceneTypes.drive,
			videoID: '_H03CjepcJc',
			offset: { start: 120 },
			tags: [Tags.evening]
		}
	]
} satisfies Country;
