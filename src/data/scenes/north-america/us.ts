import { SceneTypes } from '$lib/enums';
import { genres } from '$data/stations';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'United States',
	emoji: 'flag',
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
					name: 'Lake Tahoe',
					type: SceneTypes.drive,
					videoID: '1BgLRbOTkZg',
					offset: { start: 30 },
					tags: [Tags.day, Tags.snow]
				},
				{
					name: 'Los Angeles',
					type: SceneTypes.drive,
					videoID: '_gJe9JPgwLM',
					offset: { start: 30 },
					suggestedTrack: genres.pop.stations.hits
				},
				{
					name: 'Hollywood',
					type: SceneTypes.drive,
					videoID: 'QToxL3jcn7U',
					offset: { start: 60 },
					tags: [Tags.day]
				},
				{
					name: 'Malibu',
					type: SceneTypes.drive,
					videoID: 'p_dYvmis0uo',
					offset: { start: 30 },
					tags: [Tags.day],
					suggestedTrack: genres.electronic.stations.tropicalHouse
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
					suggestedTrack: genres.jazz.stations.relaxing
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
					suggestedTrack: genres.electronic.stations.synthwave
				},
				{
					name: 'Palm Beach',
					type: SceneTypes.drive,
					videoID: 'znNVVV2uezc',
					offset: { start: 30 },
					tags: [Tags.day],
					suggestedTrack: genres.pop.stations.oldies
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
					suggestedTrack: genres.electronic.stations.tropicalHouse
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
					suggestedTrack: genres.lofi.stations.coffeeShop
				},
				{
					name: 'Chicago',
					type: SceneTypes.drive,
					videoID: '9Prtp_eNUiI',
					offset: { start: 10 },
					tags: [Tags.night],
					suggestedTrack: genres.rnb.stations.rnb
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
					suggestedTrack: genres.jazz.stations.work
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
					suggestedTrack: genres.jazz.stations.work
				},
				{
					name: 'Salem',
					type: SceneTypes.walk,
					videoID: 'WUtB57qawoo',
					offset: { start: 30 },
					tags: [Tags.night, Tags.halloween]
				},
				{
					name: 'Forest Walk',
					type: SceneTypes.walk,
					videoID: 'RwIXHBZaNw0',
					tags: [Tags.day],
					offset: { start: 30 }
				},
				{
					name: 'Worcester',
					type: SceneTypes.drive,
					videoID: 'A42NTlRKa1g',
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
			name: 'Michigan',
			scenes: [
				{
					name: 'Detroit',
					type: SceneTypes.drive,
					videoID: 'GLZcBdEgfUk',
					offset: { start: 30 },
					tags: [Tags.day]
				},
				{
					name: 'Detroit',
					type: SceneTypes.walk,
					videoID: 'XQY6AYM1YGU',
					offset: { start: 30 },
					tags: [Tags.evening, Tags.night]
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
					suggestedTrack: genres.electronic.stations.synthwave
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
							suggestedTrack: genres.jazz.stations.relaxing
						},
						{
							name: 'Manhattan',
							type: SceneTypes.drive,
							videoID: 'UPrPATfWJ2g',
							offset: { start: 50 },
							tags: [Tags.night],
							suggestedTrack: genres.electronic.stations.vaporfunk
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
			name: 'Philadelphia',
			scenes: [
				{
					name: 'Pittsburgh',
					videoID: 'U3Zxe80ysd4',
					type: SceneTypes.drive,
					offset: { start: 30 },
					tags: [Tags.night]
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
			name: 'Texas',
			scenes: [
				{
					name: 'Austin',
					type: SceneTypes.drive,
					videoID: 'Aw51cEQ7Mr0',
					tags: [Tags.morning],
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
			scenes: [
				{
					name: 'Vermont',
					type: SceneTypes.walk,
					videoID: 'sUY5RmqwOP0',
					tags: [Tags.day, Tags.snow],
					offset: { start: 30 }
				}
			]
		},
		{
			name: 'Washington',
			scenes: [
				{
					name: 'Leavenworth',
					type: SceneTypes.walk,
					videoID: 'E05yigqLu4Q',
					tags: [Tags.christmas, Tags.night],
					offset: { start: 30 }
				},
				{
					name: 'Seattle',
					type: SceneTypes.drive,
					videoID: 'fkps18H3SXY',
					offset: { start: 50 },
					tags: [Tags.day],
					suggestedTrack: genres.jazz.stations.relaxing
				},
				{
					name: 'Seattle',
					type: SceneTypes.walk,
					videoID: 'NaWYnMJA5NE',
					offset: { start: 10 },
					tags: [Tags.day, Tags.rain],
					suggestedTrack: genres.lofi.stations.coffeeShop
				}
			]
		}
	]
} satisfies Country;
