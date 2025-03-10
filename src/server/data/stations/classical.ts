import { createGenre } from '$server/schema';
import { Tags } from '$lib/enums';

export const classical = createGenre({
	name: 'Classical',
	icon: 'Metronome',
	stations: {
		baroque: {
			name: 'Baroque Classical Radio',
			displayName: 'Baroque Classical Radio',
			trackID: '2gO1v2GPMFk',
			live: true
		},
		christmas: {
			tags: [Tags.christmas],
			name: 'Instrumental Christmas Music with Cracking Fireplace - Cozy Christmas Ambience',
			displayName: 'Christmas Cozy Home',
			trackID: '6toYzO9spWE',
			live: false,
			hidden: true
		},
		chinese: {
			displayName: 'Classical Chinese Radio',
			name: 'Relaxing With Chinese Bamboo Flute, Guzheng, Erhu | Instrumental Music Collection',
			trackID: 'XmBji07OtwA',
			live: false
		}
	}
});
