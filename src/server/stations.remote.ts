import z from 'zod';
import fuzzysort from 'fuzzysort';

import { sample } from 'es-toolkit';

import { query } from '$app/server';

import { genres, stations, type StationWithGenre } from './data';
import { randomStationSchema, searchSchema } from './schema';

export const getStations = query(searchSchema, ({ query }): StationWithGenre[] => {
	const visibleStations = stations.filter(({ hidden }) => !hidden);

	if (query) {
		const results = fuzzysort
			.go(query, visibleStations, {
				keys: ['name', 'genre', 'description']
			})
			.map(({ obj }) => obj);

		return results;
	}

	return visibleStations;
});

export const getRandomStation = query(randomStationSchema, ({ tags }) => {
	const candidates = stations.filter((el) =>
		tags.length > 0
			? tags.some((tag) => el.tags?.includes(tag))
			: el.genre.name === genres.lofi.name &&
				!el.hidden &&
				!el.name.toLowerCase().includes('bollywood')
	);

	return sample(candidates) as StationWithGenre;
});
