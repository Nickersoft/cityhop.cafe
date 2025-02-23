import { getSceneByID, getStationByID, randomScene, randomStation } from '$lib/api';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const v = url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			return {
				scene: await getSceneByID(videoID, fetch),
				station: await getStationByID(audioID, fetch)
			};
		}
	}

	return {
		scene: await randomScene(fetch),
		station: await randomStation(fetch)
	};
};
