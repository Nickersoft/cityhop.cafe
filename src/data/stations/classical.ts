import { Tags } from '$lib/enums';
import type { Genre } from '$lib/types';

export const classical = {
	name: 'Classical',
	emoji: 'violin',
	stations: {
		baroque: {
			displayName: 'Baroque Classical Radio',
			name: '♫ Baroque Live Music 24/7 - Classical Music from the Baroque Period ♫ クラシック ライブ',
			trackID: '2gO1v2GPMFk',
			live: true
		},
		christmas: {
			tags: [Tags.christmas],
			name: 'Christmas Cozy Home',
			trackID: 'Eg47HeqEYIQ',
			live: false,
			hidden: true
		},
		chinese: {
			displayName: 'Classical Chinese Radio',
			name: 'Relaxing With Chinese Bamboo Flute, Guzheng, Erhu, Pipa || 中國傳統音樂 笛子古箏名曲 放鬆音樂 - 古典音樂 安静純音樂 中國古典長笛音樂',
			trackID: 'dB2KZBsEBwM',
			live: true
		}
	}
} satisfies Genre;
