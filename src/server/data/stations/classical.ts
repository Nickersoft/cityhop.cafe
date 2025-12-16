import { createGenre } from '../../schema';
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
		chinese: {
			displayName: 'Classical Chinese Radio',
			name: 'Relaxing With Chinese Bamboo Flute, Guzheng, Erhu | Instrumental Music Collection',
			trackID: 'XmBji07OtwA',
			live: false
		}
	}
});
