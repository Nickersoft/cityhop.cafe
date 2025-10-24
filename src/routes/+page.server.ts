import { getSceneByID, getStationByID, randomScene, randomStation } from '$lib/api';
import { IS_CHRISTMAS, IS_HALLOWEEN } from '$lib/consts';
import { Tags } from '$lib/enums';
import { scenes } from '$server/data';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, url }) => {
	const v = url.searchParams.get('v');

	const totalScenes = Math.floor(scenes.filter(({ hidden }) => !hidden).length / 100) * 100;

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			return {
				totalScenes,
				scene: await getSceneByID(videoID, fetch),
				station: await getStationByID(audioID, fetch)
			};
		}
	}

	let tags: string[] = [];

	if (IS_HALLOWEEN) {
		tags = [Tags.halloween];
	}

	if (IS_CHRISTMAS) {
		tags = [Tags.christmas];
	}

	return {
		totalScenes,
		scene: await randomScene({ calm: true, tags }, fetch),
		station: await randomStation({ tags }, fetch)
	};
};
