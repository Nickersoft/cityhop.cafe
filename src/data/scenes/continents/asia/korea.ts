import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'Korea',
	emoji: '🇰🇷',
	scenes: [
		{
			name: 'Seoul',
			scenes: [
				{
					name: 'Yeongdong Expressway',
					type: SceneTypes.drive,
					videoID: '4l6VpHmEgoo',
					offset: { start: 30 },
					tags: [Tags.day]
				},
				{
					name: 'Myeongdong',
					type: SceneTypes.walk,
					videoID: 'nR9dvyAf-DY',
					offset: { start: 30 },
					tags: [Tags.evening]
				},
				{
					name: 'Gwangju',
					type: SceneTypes.walk,
					videoID: 'pg9cq7QlEYI',
					tags: [Tags.night, Tags.snow]
				},
				{
					name: 'Euljiro',
					type: SceneTypes.walk,
					videoID: 'g010nClpG2U',
					offset: { start: 60 },
					tags: [Tags.morning, Tags.rain]
				},
				{
					name: 'Hongdae',
					type: SceneTypes.walk,
					videoID: 's50yml_9LPA',
					offset: { start: 30 },
					tags: [Tags.evening, Tags.night]
				},
				{
					name: 'Yongsan Station',
					type: SceneTypes.walk,
					videoID: 'jxQX5XI766c',
					offset: { start: 235 },
					tags: [Tags.night, Tags.rain]
				},
				{
					name: 'Bukchon Hanok Village',
					type: SceneTypes.walk,
					videoID: 'nLx03XgG8AY',
					tags: [Tags.night, Tags.snow]
				},
				{
					name: 'Dream Forest',
					type: SceneTypes.walk,
					videoID: 'zCamdbpzJEs',
					offset: { start: 30 },
					tags: [Tags.day]
				},
				{
					name: 'Yanghwa Bridge',
					type: SceneTypes.walk,
					videoID: 'wdCWLtJ339U',
					offset: { start: 30 },
					tags: [Tags.night, Tags.rain]
				},
				{
					name: 'Downtown Seoul',
					type: SceneTypes.drive,
					videoID: 'KGAIumGxQeY',
					tags: [Tags.evening],
					offset: { start: 30 }
				},
				{
					name: 'Magokdong',
					type: SceneTypes.walk,
					videoID: 'FH7czEXhnA8',
					tags: [Tags.night],
					offset: { start: 30 }
				}
			]
		},
		{
			name: 'Daegu',
			type: SceneTypes.walk,
			videoID: 'PS34VjhVEV0',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Incheon',
			type: SceneTypes.walk,
			videoID: '9eLtj6KqqaM',
			offset: { start: 30 },
			tags: [Tags.night, Tags.evening]
		},
		{
			name: 'Yeosu City',
			type: SceneTypes.walk,
			videoID: 'NV-7yREq7DA',
			offset: { start: 60 },
			tags: [Tags.evening]
		},
		{
			name: 'Paju',
			scenes: [
				{
					name: 'Majang Lake Trail',
					type: SceneTypes.walk,
					videoID: 'd12qNTbfvfo',
					offset: { start: 30 },
					tags: [Tags.snow, Tags.day]
				}
			]
		},
		{
			name: 'Gangnam',
			type: SceneTypes.walk,
			videoID: 'EJJ8rmIWUcQ',
			offset: { start: 60 },
			tags: [Tags.day, Tags.rain]
		},

		{
			name: 'Busan',
			type: SceneTypes.drive,
			videoID: 'XPRqAkL7Kfk',
			tags: [Tags.night],
			suggestedTrack: stations['Korean Indie/R&B/Hip-Hop Radio']
		},
		{
			name: 'Jeju Island',
			type: SceneTypes.drive,
			videoID: '57-34iNmzww',
			offset: { start: 30 },
			tags: [Tags.day]
		},
		{
			name: 'Seongnam',
			scenes: [
				{
					name: 'Pangyo',
					type: SceneTypes.walk,
					videoID: '9Qti5sAFtHQ',
					tags: [Tags.day],
					offset: { start: 120 }
				}
			]
		}
	]
} satisfies Country;
