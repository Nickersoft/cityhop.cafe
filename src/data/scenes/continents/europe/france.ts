import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import { SceneTypes } from '$data/types';
import type { Country } from '$lib/types';

export default {
	name: 'France',
	emoji: '🇫🇷',
	scenes: [
		{
			name: 'Nice',
			type: SceneTypes.walk,
			videoID: 'ON1YueLJ7OA',
			offset: { start: 180 },
			tags: [Tags.day]
		},
		{
			name: 'Paris',
			type: SceneTypes.drive,
			videoID: 'lN43inpI2lk',
			offset: { start: 30 },
			suggestedTrack: stations['Paris Cafe Radio: Positive Bossa Nova Jazz Music'],
			tags: [Tags.day]
		},
		{
			name: 'Paris',
			type: SceneTypes.walk,
			videoID: '3j-AVL3Pr3w',
			offset: { start: 30 },
			suggestedTrack: stations['Paris Cafe Radio: Positive Bossa Nova Jazz Music'],
			tags: [Tags.night, Tags.evening]
		},
		{
			name: 'Strasbourg',
			type: SceneTypes.walk,
			videoID: 'M7OjlTNIpS0',
			offset: { start: 30 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
