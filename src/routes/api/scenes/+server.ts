import fuzzysort from 'fuzzysort';

import { error, json } from '@sveltejs/kit';

import { continents, scenes } from '$data/scenes';

import type { RequestHandler } from './$types';
import { get } from '$lib';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q');
	const path = url.searchParams.get('p');
	const visibleScenes = scenes.filter(({ hidden }) => !hidden);
	const visibleContinents = continents.filter(({ hidden }) => !hidden);

	if (query && path) {
		return error(400, "Only one of 'q' or 'p' can be provided, not both.");
	}

	if (query) {
		return json(
			fuzzysort
				.go(query, visibleScenes, {
					keys: ['name', 'country', 'category']
				})
				.map(({ obj }) => obj)
		);
	}

	if (path) {
		return json(get(visibleContinents, path));
	}

	return json(visibleContinents.map(({ countries, ...rest }) => rest));
};
