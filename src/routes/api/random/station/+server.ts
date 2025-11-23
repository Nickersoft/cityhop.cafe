import { json, type RequestHandler } from '@sveltejs/kit';
import { sample } from 'es-toolkit';

import { genres, stations, type StationWithGenre } from '../../../../functions/data/stations';

import type { Tags } from '$lib/enums';

export const GET: RequestHandler = async ({ url }) => {
	const tags = (url.searchParams.get('tags')?.split(',') ?? []) as Tags[];

	let candidates = stations.filter((el) => {
		return tags.length > 0
			? tags.some((tag) => el.tags?.includes(tag))
			: el.genre.name === genres.lofi.name &&
					!el.hidden &&
					!el.name.toLowerCase().includes('bollywood');
	});

	return json(sample(candidates) as StationWithGenre);
};
