import { error, json, type RequestHandler } from '@sveltejs/kit';

import { getStationByID } from '../../../../functions/data/stations';

export const GET: RequestHandler = async ({ params: { id } }) => {
	const station = getStationByID(id ?? '');

	if (!station) {
		return error(404, 'Station not found');
	}

	return json(station);
};
