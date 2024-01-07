import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'China',
	emoji: '🇨🇳',
	scenes: [
		{
			name: 'Chongqing',
			scenes: [
				{
					name: 'Chongqing',
					type: SceneTypes.drive,
					videoID: 'Boh66Pjjiq0',
					tags: [Tags.day]
				},
				{
					name: 'Chongqing',
					type: SceneTypes.walk,
					videoID: 'tMzCwwvHwN0',
					offset: { start: 86 },
					tags: [Tags.night],
					suggestedTrack: stations['Classical Chinese Radio']
				}
			]
		},
		{
			name: 'Guangzhou',
			type: SceneTypes.walk,
			videoID: 'oC0PYbNmSrk',
			tags: [Tags.night, Tags.rain]
		},
		{
			name: 'Nanning',
			type: SceneTypes.drive,
			videoID: 'rSqSgrCGwRA',
			offset: { start: 200 },
			tags: [Tags.day]
		},
		{
			name: 'Chongzuo',
			type: SceneTypes.walk,
			videoID: 'nZyiZMfUXYA',
			tags: [Tags.night],
			offset: { start: 120 }
		},
		{
			name: 'Beijing',
			scenes: [
				{
					name: 'Beijing',
					type: SceneTypes.walk,
					videoID: '7keLrzMcZRc',
					offset: { start: 2058 },
					tags: [Tags.night, Tags.evening]
				},
				{
					name: 'Forbidden City',
					type: SceneTypes.walk,
					videoID: 'Df-I81T1RVQ',
					offset: { start: 60 },
					tags: [Tags.day, Tags.snow]
				},
				{
					name: 'The Great Wall',
					type: SceneTypes.walk,
					videoID: 'FYttymVfPX0',
					tags: [Tags.day],
					offset: { start: 200 }
				}
			]
		},
		{
			name: 'Wuhan',
			type: SceneTypes.walk,
			videoID: 'wVHgby6hBDA',
			offset: { start: 2058 },
			suggestedTrack: stations['Classical Chinese Radio'],
			tags: [Tags.night, Tags.day]
		},
		{
			name: 'Xiangtan',
			type: SceneTypes.walk,
			videoID: 'MudeUxLjqEY',
			offset: { start: 86 },
			tags: [Tags.rain, Tags.night]
		},
		{
			name: 'Changzhou',
			type: SceneTypes.walk,
			videoID: 'bg-DVKtHTVs',
			tags: [Tags.day],
			offset: { start: 120 }
		},
		{
			name: 'Qinghai Lake',
			type: SceneTypes.drive,
			videoID: 'WIj6sElG0kw',
			offset: { start: 60 },
			tags: [Tags.day]
		},
		{
			name: 'Huanggualiang',
			type: SceneTypes.drive,
			videoID: 'zj8AjUrIJUs',
			offset: { start: 120 },
			tags: [Tags.day]
		},
		{
			name: 'Shanghai',
			type: SceneTypes.drive,
			videoID: '8T044v8EG5E',
			offset: { start: 30 },
			tags: [Tags.night]
		},
		{
			name: "Ya'an ➡️ Xichang",
			type: SceneTypes.drive,
			videoID: 'nwvQ6ox6H2g',
			offset: { start: 120 },
			tags: [Tags.day, Tags.night]
		},
		{
			name: 'Yuzixi',
			type: SceneTypes.drive,
			videoID: 'X3-jML2EMIc',
			offset: { start: 120 },
			tags: [Tags.day]
		},
		{
			name: 'Chengdu',
			scenes: [
				{
					name: 'Chengdu ➡️ Shangxi',
					type: SceneTypes.drive,
					videoID: 'Jf6DJZ63JDU',
					offset: { start: 30 },
					tags: [Tags.day, Tags.rain]
				},
				{
					name: 'Chengdu',
					type: SceneTypes.walk,
					videoID: 'hwh4NO5hDc4',
					offset: { start: 120 },
					tags: [Tags.day]
				},
				{
					name: 'Chengdu',
					type: SceneTypes.drive,
					videoID: 'VP6OCMG6eEw',
					offset: { start: 120 },
					tags: [Tags.day, Tags.rain]
				}
			]
		},
		{
			name: 'Tibet',
			type: SceneTypes.drive,
			videoID: 'nNvqy_uVJVE',
			offset: { start: 120 },
			tags: [Tags.day]
		},
		{
			name: 'Hangzhou',
			type: SceneTypes.drive,
			videoID: 'jAe290vn-gk',
			offset: { start: 200 },
			tags: [Tags.day, Tags.rain]
		},
		{
			name: 'Ningbo',
			type: SceneTypes.walk,
			videoID: 'JcxscDzP4Oc',
			offset: { start: 120 },
			tags: [Tags.night, Tags.day]
		}
	]
} satisfies Country;
