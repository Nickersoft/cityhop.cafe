import fuzzysort from 'fuzzysort';

import { error, json } from '@sveltejs/kit';

import { continents, scenes } from '$server/data/scenes';

import type { RequestHandler } from './$types';
import { get } from '$lib/utils';
import type { Tags } from '$lib/enums';
import type { Scene } from '$server/schema';

export const GET: RequestHandler = async ({ url }) => {
	const query = url.searchParams.get('q');
	const path = url.searchParams.get('p');
	const tags = (url.searchParams.get('t')?.split(',') ?? []) as Tags[];
	const visibleScenes = scenes.filter(({ hidden }) => !hidden);
	const visibleContinents = continents.filter(({ hidden }) => !hidden);

	if (query && path) {
		return error(400, "Only one of 'q' or 'p' can be provided, not both.");
	}

	const filterTags = (scene: Scene) =>
		tags.length > 0 ? tags.some((t) => scene.tags?.includes(t)) : true;

	if (query) {
		return json(
			fuzzysort
				.go(query, visibleScenes, {
					keys: ['name', 'country', 'category']
				})
				.map(({ obj }) => obj)
				.filter(filterTags)
		);
	}

	if (tags.length > 0) {
		return json(visibleScenes.filter(filterTags));
	}

	if (path) {
		const result = get(visibleContinents, path);

		if (result) {
			if (Array.isArray(result)) {
				const sanitizedResult = result.map(({ countries, scenes, ...rest }) => rest);
				return json(sanitizedResult);
			}
		}

		return json(result);
	}

	// Don't return full tree to save on bandwidth
	return json(visibleContinents.map(({ countries, ...rest }) => rest));
};
