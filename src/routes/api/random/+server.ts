import { json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, url }) => {
	const sceneURL = new URL('/api/random/scene', url.origin);
	const stationURL = new URL('/api/random/station', url.origin);

	url.searchParams.forEach((value, key) => {
		sceneURL.searchParams.append(key, value);
		stationURL.searchParams.append(key, value);
	});

	const scene = await fetch(sceneURL).then((res) => res.json());

	return json({
		scene,
		station: scene.suggestedTrack ?? (await fetch(stationURL).then((res) => res.json()))
	});
};
