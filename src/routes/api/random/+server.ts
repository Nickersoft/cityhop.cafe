import { json } from '@sveltejs/kit';

import type { RequestHandler } from '../stations/$types';

export const GET: RequestHandler = async ({ url }) => {
	const sceneURL = new URL('/api/scenes/random', url.origin);
	const stationURL = new URL('/api/stations/random', url.origin);

	url.searchParams.forEach((value, key) => {
		sceneURL.searchParams.append(key, value);
		stationURL.searchParams.append(key, value);
	});

	const scene = await fetch(sceneURL).then((res) => res.json());

	if (scene.suggestedTrack) {
		const station = { ...scene.suggestedTrack };
		delete scene.suggestedTrack;
		return json({ scene, station });
	}

	const station = await fetch(stationURL).then((res) => res.json());

	return json({ scene, station });
};
