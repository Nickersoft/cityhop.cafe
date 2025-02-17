import { IS_CHRISTMAS, IS_HALLOWEEN } from '$consts';
import { getSceneByID } from '$data/scenes';
import { getStationByID } from '$data/stations';

import type { Scene, Station } from '$schema';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const v = url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			const scene = getSceneByID(videoID);
			const station = getStationByID(audioID);

			return { scene, station };
		}
	}

	// if (IS_HALLOWEEN) {
	// 	const scene = draw(halloweenScenes)!;
	// 	const station = draw(halloweenStations)!;

	// 	return { scene, station };
	// }

	// if (IS_CHRISTMAS) {
	// 	const scene = draw(christmasScenes)!;
	// 	const station = draw(christmasStations)!;

	// 	return { scene, station };
	// }

	return fetch(new URL('/api/random', url)).then((res) => res.json()) as Promise<{
		scene: Scene;
		station: Station;
	}>;
};
