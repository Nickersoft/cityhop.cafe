import { json, type RequestHandler } from '@sveltejs/kit';

import { genres, stations, type StationWithGenre } from '$server/data/stations';

import { draw } from '$lib/utils';

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

	return json(draw(candidates) as StationWithGenre);
};
