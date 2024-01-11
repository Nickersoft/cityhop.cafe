import { SceneTypes } from '$data/scene-types';
import { Tags } from '$data/tags';
import type { Country } from '$lib/types';

export default {
	name: 'Peru',
	emoji: 'flag',
	scenes: [
		{
			name: 'Cusco',
			type: SceneTypes.walk,
			videoID: 'BqBPCNyK5ZM',
			tags: [Tags.day],
			offset: { start: 60 }
		},
		{
			name: 'Lima',
			type: SceneTypes.drive,
			videoID: 'trKeUE41KVY',
			offset: { start: 120 },
			tags: [Tags.day]
		},
		{
			name: 'Lima',
			type: SceneTypes.walk,
			videoID: 'e4RsX2h2QIc',
			tags: [Tags.day],
			offset: { start: 60 }
		}
	]
} satisfies Country;
