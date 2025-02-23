import { json, type RequestHandler } from '@sveltejs/kit';

import { stations, type StationWithGenre } from '$data/stations';

import { draw } from '$lib/utils';

import type { Tags } from '$lib/enums';

export const GET: RequestHandler = async ({ url }) => {
	const tag = url.searchParams.get('tag') as Tags;

	let candidates = stations.filter((el) => {
		return tag
			? el.tags?.includes(tag)
			: el.genre === 'lofi' && !el.hidden && !el.name.toLowerCase().includes('bollywood');
	});

	return json(draw(candidates) as StationWithGenre);
};
