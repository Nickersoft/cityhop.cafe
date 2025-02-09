import { IS_CHRISTMAS, IS_HALLOWEEN } from '$consts';

import { christmasScenes, halloweenScenes, sceneMap } from '$data/scenes';
import { christmasStations, halloweenStations, stationMap } from '$data/stations';

import { draw } from '$lib/utils';

import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
	const v = url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			const scene = sceneMap[videoID];
			const station = stationMap[audioID];

			return { scene, station };
		}
	}

	if (IS_HALLOWEEN) {
		const scene = draw(halloweenScenes)!;
		const station = draw(halloweenStations)!;

		return { scene, station };
	}

	if (IS_CHRISTMAS) {
		const scene = draw(christmasScenes)!;
		const station = draw(christmasStations)!;

		return { scene, station };
	}

	return {};
};
