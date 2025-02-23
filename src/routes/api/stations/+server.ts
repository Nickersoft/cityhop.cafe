import fuzzysort from 'fuzzysort';

import { json } from '@sveltejs/kit';

import { stations } from '$server/data/stations';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q');
	const visibleStations = stations.filter(({ hidden }) => !hidden);

	if (query) {
		const results = fuzzysort
			.go(query, visibleStations, {
				keys: ['name', 'genre', 'description']
			})
			.map(({ obj }) => obj);

		return json(results);
	}

	return json(visibleStations);
};
