import { SceneTypes } from '$data/scene-types';
import { stations } from '$data/stations';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Canada',
	emoji: '🇺🇸',
	scenes: [
		{
			name: 'Montreal',
			type: SceneTypes.walk,
			videoID: 'NagLUEIvwbg',
			offset: { start: 200 },
			tags: [Tags.snow, Tags.day]
		},
		{
			name: 'Montreal',
			type: SceneTypes.drive,
			videoID: 'tpPPjtRzX2Q',
			offset: { start: 30 },
			suggestedTrack: stations['Coffee Jazz Music Radio']
		},
		{
			name: 'Tsawwassen',
			type: SceneTypes.walk,
			videoID: 'kg2kefbrFn4',
			tags: [Tags.evening],
			offset: { start: 10 }
		},
		{
			name: 'Vancouver',
			type: SceneTypes.walk,
			videoID: 'jmok5F9RQ_w',
			offset: { start: 120 },
			tags: [Tags.day]
		}
	]
} satisfies Country;
