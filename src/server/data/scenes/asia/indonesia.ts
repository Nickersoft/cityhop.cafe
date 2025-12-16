import { SceneTypes } from '$lib/enums';
import { Tags } from '$lib/enums';
import { createCountry } from '../../../schema';

export default createCountry({
	name: 'Indonesia',
	scenes: [
		{
			name: 'Jakarta',
			scenes: [
				{
					name: 'Merdeka Square',
					type: SceneTypes.walk,
					videoID: 'InZq-AByhEE',
					offset: { start: 10 },
					tags: [Tags.evening, Tags.night]
				},
				{
					name: 'City Center',
					type: SceneTypes.walk,
					videoID: 'SqIW4VAgCIk',
					offset: { start: 10 },
					tags: [Tags.day]
				},
				{
					name: 'Downtown',
					type: SceneTypes.drive,
					videoID: 'gmDBzijaIAA',
					offset: { start: 10 },
					tags: [Tags.day]
				}
			]
		},
		{
			name: 'Bali',
			scenes: [
				{
					name: 'Ubud',
					type: SceneTypes.walk,
					videoID: 'b4VLlbM_qHI',
					offset: { start: 50 },
					tags: [Tags.day]
				},
				{
					name: 'Pasut Beach',
					type: SceneTypes.drive,
					videoID: 'SxRcfvrYVuA',
					offset: { start: 10 },
					tags: [Tags.day]
				}
			]
		}
	]
});
