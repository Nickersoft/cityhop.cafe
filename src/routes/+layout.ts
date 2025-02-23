import type { StationWithGenre } from '$data/stations';
import { makeCall } from '$lib/api';

import type { Scene } from '$schema';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	const v = url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			return {
				scene: await makeCall<Scene>(`scenes/${videoID}`, fetch),
				station: await makeCall<StationWithGenre>(`stations/${audioID}`, fetch)
			};
		}
	}

	return { scene: null, station: null };
};
