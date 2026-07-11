import { SceneTypes } from '$lib/enums';
import { genres } from '../../stations';
import { Tags } from '$lib/enums';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'India',
	scenes: [
		{
			name: 'Kolkata',
			type: SceneTypes.walk,
			videoID: '7Kzfz86esI0',
			offset: { start: 10 },
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.bollywood
		},
		{
			name: 'Sikkim',
			type: SceneTypes.drive,
			videoID: 'h-jKUudLTFE',
			length: 1980,
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.bollywood
		},
		{
			name: 'Kolkata',
			type: SceneTypes.drive,
			videoID: '6iG9PpV20_U',
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.bollywood
		},
		{
			name: 'Mumbai',
			type: SceneTypes.drive,
			videoID: '0o8PlX0JUn0',
			offset: { start: 28 },
			tags: [Tags.night],
			suggestedTrack: genres.lofi.stations.bollywood
		},
		{
			name: 'Mumbai',
			type: SceneTypes.walk,
			videoID: '8W4ZTX1z02E',
			offset: { start: 120 },
			tags: [Tags.day, Tags.night],
			suggestedTrack: genres.lofi.stations.bollywood
		},
		{
			name: 'New Delhi',
			scenes: [
				{
					name: 'Connaught Place',
					videoID: 'JaGCO3sanHg',
					offset: { start: 120 },
					tags: [Tags.rain, Tags.day],
					type: SceneTypes.walk,
					suggestedTrack: genres.lofi.stations.bollywood
				},
				{
					name: 'Tilak Nagar Market',
					videoID: '2dH-7HwPvQM',
					type: SceneTypes.walk,
					tags: [Tags.day],
					suggestedTrack: genres.lofi.stations.bollywood
				},
				{
					name: 'Central Delhi',
					type: SceneTypes.drive,
					videoID: 'g-c3K8plBxo',
					offset: { start: 28 },
					tags: [Tags.night],
					suggestedTrack: genres.lofi.stations.bollywood
				}
			]
		},
		{
			name: 'Kochi',
			type: SceneTypes.walk,
			videoID: '4YKjcbVUkP0',
			tags: [Tags.day, Tags.rain],
			suggestedTrack: genres.lofi.stations.bollywood
		},
		{
			name: 'Bengaluru',
			type: SceneTypes.walk,
			videoID: '2YJYJMtVTLc',
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.bollywood
		},
		{
			name: 'Bengaluru',
			type: SceneTypes.drive,
			videoID: 'Guu6shSEbp8',
			tags: [Tags.day],
			suggestedTrack: genres.lofi.stations.bollywood
		}
	]
});
