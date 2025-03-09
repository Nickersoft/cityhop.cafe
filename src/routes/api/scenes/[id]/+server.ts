import { error, json, type RequestHandler } from '@sveltejs/kit';

import { getSceneByID } from '$server/data/scenes';

export const GET: RequestHandler = async ({ params: { id } }) => {
	const scene = getSceneByID(id ?? '');

	if (!scene) {
		return error(404, 'Scene not found');
	}

	return json(scene);
};
