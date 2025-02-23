import { IS_CHRISTMAS, IS_HALLOWEEN } from '$lib/consts';
import { getSceneByID } from '$data/scenes';
import { getStationByID, type StationWithGenre } from '$data/stations';
import { makeCall } from '$lib/api';

import type { Scene, Station } from '$schema';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ depends, parent, fetch }) => {
	const { scene } = await parent();

	depends('app:scene');

	return {
		scene: scene ?? (await makeCall<Scene>('random/scene', fetch))
	};
};
