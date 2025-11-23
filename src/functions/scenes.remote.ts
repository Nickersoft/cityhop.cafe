import z from 'zod';
import fuzzysort from 'fuzzysort';

import { error, json } from '@sveltejs/kit';
import { get } from 'es-toolkit/compat';

import { Tags } from '$lib/enums';
import { query } from '$app/server';

import { continents, scenes } from './data/scenes';

import type { Scene } from './schema';
import type { SearchResultItem } from '$lib/types';

export const getScenes = query(
	z.object({
		query: z.string().optional(),
		path: z.string().optional(),
		tags: z.array(z.enum(Tags)).default([])
	}),
	({ query, path, tags }): SearchResultItem[] => {
		const visibleScenes = scenes.filter(({ hidden }) => !hidden);
		const visibleContinents = continents.filter(({ hidden }) => !hidden);

		if (query && path) {
			return error(400, "Only one of 'q' or 'p' can be provided, not both.");
		}

		const filterTags = (scene: Scene) =>
			tags.length > 0 ? tags.some((t) => scene.tags?.includes(t)) : true;

		if (query) {
			return fuzzysort
				.go(query, visibleScenes, {
					keys: ['name', 'path', 'countryCode', 'country', 'category']
				})
				.map(({ obj }) => obj)
				.filter(filterTags);
		}

		if (tags.length > 0) {
			return visibleScenes.filter(filterTags);
		}

		if (path) {
			const result = get(visibleContinents, path);

			if (result) {
				if (Array.isArray(result)) {
					return result.map(({ countries, scenes, ...rest }) => rest);
				}
			}

			return result;
		}

		// Don't return full tree to save on bandwidth
		return visibleContinents.map(({ countries, ...rest }) => rest);
	}
);
