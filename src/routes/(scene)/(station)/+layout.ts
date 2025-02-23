import { IS_CHRISTMAS, IS_HALLOWEEN } from '$lib/consts';
import { getSceneByID } from '$data/scenes';
import { getStationByID, type StationWithGenre } from '$data/stations';

import { makeCall } from '$lib/api';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ depends, parent, fetch, url }) => {
	const { station } = await parent();
	console.log('clal');
	depends('app:station');

	return {
		station: station ?? (await makeCall<StationWithGenre>('random/station', fetch))
	};
};
