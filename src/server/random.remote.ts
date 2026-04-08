import { query } from '$app/server';

import { getRandomScene } from './scenes.remote';
import { randomSceneSchema } from './schema';
import { getRandomStation } from './stations.remote';

export const getRandom = query(randomSceneSchema, async ({ calmOnly, tags }) => {
	const scene = await getRandomScene({ tags, calmOnly });
	const station = scene.suggestedTrack ?? (await getRandomStation({ tags }));

	return { scene, station };
});
