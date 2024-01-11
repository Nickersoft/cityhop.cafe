import { SceneTypes } from '$data/scene-types';
import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'India',
	emoji: '🇮🇳',
	scenes: [
		{
			name: 'Mumbai',
			scenes: [
				{
					name: 'Mumbai',
					type: SceneTypes.drive,
					videoID: '0o8PlX0JUn0',
					offset: { start: 28 },
					tags: [Tags.night],
					suggestedTrack: stations['Bollywood Lofi Radio']
				},
				{
					name: 'Mumbai',
					type: SceneTypes.walk,
					videoID: '8W4ZTX1z02E',
					offset: { start: 120 },
					tags: [Tags.day, Tags.night],
					suggestedTrack: stations['Bollywood Lofi Radio']
				}
			]
		},
		{
			name: 'Kolkata',
			scenes: [
				{
					name: 'Kolkata',
					type: SceneTypes.walk,
					videoID: '7Kzfz86esI0',
					offset: { start: 10 },
					tags: [Tags.day],
					suggestedTrack: stations['Bollywood Lofi Radio']
				},
				{
					name: 'Kolkata',
					type: SceneTypes.drive,
					videoID: '6iG9PpV20_U',
					tags: [Tags.day],
					suggestedTrack: stations['Bollywood Lofi Radio']
				}
			]
		},
		{
			name: 'Delhi',
			type: SceneTypes.drive,
			videoID: 'g-c3K8plBxo',
			offset: { start: 28 },
			tags: [Tags.night],
			suggestedTrack: stations['Bollywood Lofi Radio']
		},
		{
			name: 'Kochi',
			type: SceneTypes.walk,
			videoID: '4YKjcbVUkP0',
			tags: [Tags.day, Tags.rain],
			suggestedTrack: stations['Bollywood Lofi Radio']
		},
		{
			name: 'Bengaluru',
			type: SceneTypes.walk,
			videoID: '2YJYJMtVTLc',
			tags: [Tags.day],
			suggestedTrack: stations['Bollywood Lofi Radio']
		},
		{
			name: 'Bengaluru',
			type: SceneTypes.drive,
			videoID: 'Guu6shSEbp8',
			tags: [Tags.day],

			suggestedTrack: stations['Bollywood Lofi Radio']
		}
	]
} satisfies Country;
