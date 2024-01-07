import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';

import type { Country } from '$lib/types';

export default {
	name: 'United States',
	emoji: '🇺🇸',
	scenes: [
		{
			name: 'California',
			scenes: [
				{
					name: 'Los Angeles',
					type: SceneTypes.walk,
					videoID: 'VINOSu5y4ic',
					offset: { start: 60 },
					tags: [Tags.day]
				},
				{
					name: 'Los Angeles',
					type: SceneTypes.drive,
					videoID: '_gJe9JPgwLM',
					offset: { start: 30 },
					suggestedTrack: stations['Top Hits Radio']
				},
				{
					name: 'Malibu',
					type: SceneTypes.drive,
					videoID: 'p_dYvmis0uo',
					offset: { start: 30 },
					tags: [Tags.day],
					suggestedTrack: stations['Tropical House Radio']
				},
				{
					name: 'Palo Alto',
					type: SceneTypes.walk,
					videoID: 'DOtEz_jbs8o',
					offset: { start: 30 },
					tags: [Tags.day]
				},
				{
					name: 'San Francisco',
					type: SceneTypes.drive,
					videoID: 'PGMu_Z89Ao8',
					offset: { start: 30 },
					suggestedTrack: stations['Relaxing Jazz Radio']
				},
				{
					name: 'Venice Beach',
					type: SceneTypes.walk,
					videoID: '8TuFDJDm_18',
					offset: { start: 30 },
					tags: [Tags.day]
				}
			]
		},
		{
			name: 'Florida',
			scenes: [
				{
					name: 'Miami',
					type: SceneTypes.drive,
					videoID: 'Cod_ggrs69U',
					offset: { start: 48 },
					tags: [Tags.night],
					suggestedTrack: stations['Synthwave Radio']
				}
			]
		},
		{
			name: 'Hawaii',
			scenes: [
				{
					name: 'Honolulu',
					type: SceneTypes.walk,
					videoID: 'T3nzPsDfazA',
					tags: [Tags.evening],
					offset: { start: 30 }
				},
				{
					name: 'Honolulu',
					type: SceneTypes.drive,
					videoID: '-GSHhsSPcdo',
					offset: { start: 40 },
					suggestedTrack: stations['Tropical House Radio']
				}
			]
		},
		{
			name: 'Illinois',
			scenes: [
				{
					name: 'Chicago',
					type: SceneTypes.walk,
					videoID: 'KXkkKm4AwBg',
					offset: { start: 10 },
					suggestedTrack: stations['Coffee Shop Radio']
				},
				{
					name: 'Chicago',
					type: SceneTypes.drive,
					videoID: '9Prtp_eNUiI',
					offset: { start: 10 },
					tags: [Tags.night],
					suggestedTrack: stations['R&B/Hip-Hop Radio']
				}
			]
		},
		{
			name: 'Louisiana',
			scenes: [
				{
					name: 'New Orleans',
					type: SceneTypes.walk,
					videoID: '3BAahFrNRaI',
					offset: { start: 30 },
					tags: [Tags.day],
					suggestedTrack: stations['Work & Jazz Piano Radio']
				},
				{
					name: 'New Orleans',
					type: SceneTypes.drive,
					videoID: 'GZUEaZHd_uI',
					offset: { start: 30 },
					tags: [Tags.evening]
				}
			]
		},
		{
			name: 'Massachusetts',
			scenes: [
				{
					name: 'Boston',
					type: SceneTypes.walk,
					videoID: 'JB0A8Me8EKk',
					offset: { start: 10 },
					tags: [Tags.rain, Tags.day]
				},
				{
					name: 'Boston',
					type: SceneTypes.drive,
					videoID: 'aVaQkKBEvzE',
					offset: { start: 30 },
					suggestedTrack: stations['Work & Jazz Piano Radio']
				},
				{
					name: 'Forest Walk',
					type: SceneTypes.walk,
					videoID: 'RwIXHBZaNw0',
					tags: [Tags.day],
					offset: { start: 30 }
				},
				{
					name: 'Nantucket',
					type: SceneTypes.walk,
					videoID: 'zPoFD_2q44c',
					tags: [Tags.morning],
					offset: { start: 30 }
				}
			]
		},
		{
			name: 'Nevada',
			scenes: [
				{
					name: 'Las Vegas',
					type: SceneTypes.drive,
					videoID: 'HZaLvgP-R8E',
					offset: { start: 30 },
					tags: [Tags.night],
					suggestedTrack: stations['Synthwave Radio']
				}
			]
		},
		{
			name: 'New York',
			scenes: [
				{
					name: 'Manhattan',
					scenes: [
						{
							name: 'Central Park',
							type: SceneTypes.walk,
							videoID: 'kGJr1Nh-1CY',
							tags: [Tags.snow, Tags.day],
							offset: { start: 120 }
						},
						{
							name: 'Downtown Manhattan',
							type: SceneTypes.walk,
							videoID: 'F8MN0o6RS9o',
							offset: { start: 10 },
							tags: [Tags.snow, Tags.day],
							suggestedTrack: stations['Relaxing Jazz Radio']
						},
						{
							name: 'Manhattan',
							type: SceneTypes.drive,
							videoID: 'UPrPATfWJ2g',
							offset: { start: 50 },
							tags: [Tags.night],
							suggestedTrack: stations['VaporFunk Station: Vaporwave Radio']
						}
					]
				},
				{
					name: 'Brooklyn',
					type: SceneTypes.walk,
					videoID: 'yjR-0TzqGgQ',
					offset: { start: 30 },
					tags: [Tags.day]
				}
			]
		},
		{
			name: 'North Carolina',
			scenes: [
				{
					name: 'Great Smoky Mountains',
					type: SceneTypes.drive,
					videoID: 'Of5pGj6Obzo',
					offset: { start: 30 },
					tags: [Tags.day]
				}
			]
		},
		{
			name: 'Oregon',
			scenes: [
				{
					name: 'Portland',
					type: SceneTypes.walk,
					videoID: 'Ht747Q-PLDY',
					tags: [Tags.rain, Tags.day],
					offset: { start: 60 }
				}
			]
		},
		{
			name: 'Utah',
			scenes: [
				{
					name: 'Arches National Park',
					type: SceneTypes.drive,
					videoID: 'l-xaEoKGIxY',
					offset: { start: 30 },
					tags: [Tags.day]
				}
			]
		},
		{
			name: 'Vermont',
			type: SceneTypes.walk,
			videoID: 'sUY5RmqwOP0',
			tags: [Tags.day, Tags.snow],
			offset: { start: 30 }
		},
		{
			name: 'Washington',
			scenes: [
				{
					name: 'Seattle',
					type: SceneTypes.drive,
					videoID: 'fkps18H3SXY',
					offset: { start: 50 },
					tags: [Tags.day],
					suggestedTrack: stations['Relaxing Jazz Radio']
				},
				{
					name: 'Seattle',
					type: SceneTypes.walk,
					videoID: 'NaWYnMJA5NE',
					offset: { start: 10 },
					tags: [Tags.day, Tags.rain],
					suggestedTrack: stations['Coffee Shop Radio']
				}
			]
		}
	]
} satisfies Country;
