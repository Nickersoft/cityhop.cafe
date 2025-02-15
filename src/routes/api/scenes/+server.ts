import fuzzysort from 'fuzzysort';

import { json } from '@sveltejs/kit';

import { continents, scenes } from '$data/scenes';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q');

	if (query) {
		return json(
			fuzzysort
				.go(query, scenes, {
					keys: ['name', 'country', 'category']
				})
				.map(({ obj }) => obj)
		);
	}

	return json(continents.filter(({ hidden }) => !hidden));
};
