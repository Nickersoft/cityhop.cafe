import { createGenre } from '../../schema';

export const rnb = createGenre({
	name: 'R&B',
	icon: 'VinylRecord',
	stations: {
		korean: {
			displayName: 'Korean Indie/R&B/Hip-Hop Radio',
			trackID: 'lavDCSxRCu8',
			name: '24/7 이곳이 바로 힙스터 성지 😎 kozypop radio, k-pop, krnb, indie',
			live: true
		},
		rnb: {
			displayName: 'R&B/Hip-Hop Radio',
			name: 'r&b / hip-hop radio [ chill live stream - 24/7 rnb ]',
			trackID: 'OB67pohCtAQ',
			live: true
		}
	}
});
