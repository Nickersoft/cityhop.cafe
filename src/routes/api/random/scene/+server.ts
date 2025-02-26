import { json } from '@sveltejs/kit';

import { scenes } from '$server/data/scenes';
import { stations } from '$server/data/stations';

import { draw } from '$lib/utils';

import type { Scene, Station } from '$server/schema';
import type { Tags } from '$lib/enums';

import type { RequestHandler } from './$types';

const jazzStations = stations.filter(({ genre }) => genre === 'jazz') as Station[];
const lofiStations = stations.filter(({ genre }) => genre === 'lofi') as Station[];

export const GET: RequestHandler = async ({ url }) => {
	const calmOnly = !!url.searchParams.get('calm');
	const tag = url.searchParams.get('tag') as Tags;

	let candidates = scenes.filter((scene) => {
		return tag ? scene.tags?.includes(tag) : !scene.hidden;
	});

	if (calmOnly) {
		candidates = candidates.filter((b) =>
			b.suggestedTrack
				? jazzStations.includes(b.suggestedTrack) || lofiStations.includes(b.suggestedTrack)
				: true
		);
	}

	return json(draw(candidates) as Scene);
};
