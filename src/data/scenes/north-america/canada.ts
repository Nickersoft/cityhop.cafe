import { SceneTypes } from '$lib/enums';
import { genres } from '$data/stations';
import { Tags } from '$lib/enums';
import type { Country } from '$lib/types';

export default {
	name: 'Canada',
	emoji: 'flag',
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
			suggestedTrack: genres.jazz.stations.coffee
		},
		{
			name: 'Toronto',
			type: SceneTypes.drive,
			videoID: 'mtz_eM73GS0',
			offset: { start: 60 },
			tags: [Tags.night]
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
