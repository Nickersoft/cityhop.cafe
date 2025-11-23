import fuzzysort from 'fuzzysort';

import { z } from 'zod';
import { error } from '@sveltejs/kit';
import { sample } from 'es-toolkit';
import { get } from 'es-toolkit/compat';

import { query } from '$app/server';
import type { SearchResultItem } from '$lib/types';
import { Tags } from '$lib/enums';

import { scenes, continents, stations, genres } from './data';
import type { Scene, Station } from './schema';
import { randomSceneSchema, searchSchema } from './schema';

const jazzStations = stations.filter(({ genre }) => genre.name === genres.jazz.name) as Station[];
const lofiStations = stations.filter(({ genre }) => genre.name === genres.lofi.name) as Station[];

export const getScenes = query(searchSchema, ({ query, path, tags }): SearchResultItem[] => {
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
				keys: ['name', (obj) => obj.path?.join(' ') ?? '', 'countryCode', 'country', 'category']
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
});

export const getRandomScene = query(randomSceneSchema, ({ tags, calmOnly }) => {
	let candidates = scenes.filter((scene) =>
		tags.length > 0 ? tags.some((tag) => scene.tags?.includes(tag)) : !scene.hidden
	);

	if (calmOnly) {
		candidates = candidates.filter((b) =>
			b.suggestedTrack
				? jazzStations.includes(b.suggestedTrack) || lofiStations.includes(b.suggestedTrack)
				: true
		);
	}

	return sample(candidates) as Scene;
});
