import { json } from '@sveltejs/kit';

import { scenes } from '$data/scenes';
import { stationList } from '$data/stations';

import { draw } from '$lib';

import type { SceneWithThumbnail, Station } from '$types';
import type { Tags } from '$enums';

import type { RequestHandler } from './$types';

const jazzStations = stationList.filter(({ genre }) => genre === 'jazz') as Station[];
const lofiStations = stationList.filter(({ genre }) => genre === 'lofi') as Station[];

export const GET: RequestHandler = async ({ url }) => {
	const calmOnly = !!url.searchParams.get('calm');
	const tag = url.searchParams.get('tag') as Tags;

	let candidates = scenes.filter((scene) => {
		return tag ? scene.tags?.includes(tag) : true;
	});

	if (calmOnly) {
		candidates = candidates.filter((b) =>
			b.suggestedTrack
				? jazzStations.includes(b.suggestedTrack) || lofiStations.includes(b.suggestedTrack)
				: true
		);
	}

	return json(draw(candidates) as SceneWithThumbnail);
};
