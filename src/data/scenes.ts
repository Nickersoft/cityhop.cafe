import { Genre } from '$lib/types';

import drives, { driveMap } from './drives';
import walks, { walkMap } from './walks';

const scenes = [...walks, ...drives];

export default scenes;

export const sceneMap = {
	...walkMap,
	...driveMap
};

export const calmScenes = scenes.filter((b) => {
	return !b.suggestedTrack || [Genre.jazz, Genre.lofi].includes(b.suggestedTrack.genre);
});
