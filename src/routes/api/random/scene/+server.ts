import { json } from '@sveltejs/kit';
import { sample } from 'es-toolkit';

import { scenes } from '../../../../functions/data/scenes';
import { genres, stations } from '../../../../functions/data/stations';

import type { Scene, Station } from '../../../../functions/schema';
import type { Tags } from '$lib/enums';

import type { RequestHandler } from './$types';

const jazzStations = stations.filter(({ genre }) => genre.name === genres.jazz.name) as Station[];
const lofiStations = stations.filter(({ genre }) => genre.name === genres.lofi.name) as Station[];

export const GET: RequestHandler = async ({ url }) => {
	const calmOnly = !!url.searchParams.get('calm');
	const tags = (url.searchParams.get('tags')?.split(',') ?? []) as Tags[];

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

	return json(sample(candidates) as Scene);
};
