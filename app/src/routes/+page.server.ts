import { IS_CHRISTMAS, IS_HALLOWEEN } from '$lib/consts';
import { Tags } from '$lib/enums';
import { getSceneByID, getStationByID, scenes } from '$server/data';
import { getRandomScene } from '$server/scenes.remote';
import { getRandomStation } from '$server/stations.remote';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const v = url.searchParams.get('v');

	const totalScenes = Math.floor(scenes.filter(({ hidden }) => !hidden).length / 100) * 100;

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			return {
				totalScenes,
				scene: getSceneByID(videoID),
				station: getStationByID(audioID)
			};
		}
	}

	let tags: Tags[] = [];

	if (IS_HALLOWEEN) {
		tags = [Tags.halloween];
	}

	if (IS_CHRISTMAS) {
		tags = [Tags.christmas];
	}

	return {
		totalScenes,
		scene: await getRandomScene({ calmOnly: true, tags }),
		station: await getRandomStation({ tags })
	};
};
