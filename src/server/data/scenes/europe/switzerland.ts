import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '$server/schema';

export default createCountry({
	name: 'Switzerland',
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
			name: 'Zurich Airport',
			videoID: 'vl_BfAZf4LY',
			type: SceneTypes.walk,
			tags: [Tags.day],
			offset: { start: 60 }
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
			videoID: 'SqMEcxsYk5o',
			tags: [Tags.day]
		},
		{
			name: 'Zurich',
			type: SceneTypes.drive,
			videoID: 'WVggB714jqU',
			offset: { start: 120 },
			tags: [Tags.evening]
		}
	]
});
