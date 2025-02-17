import type { Continent, Scene } from '$schema';

import africa from './africa';
import asia from './asia';
import europe from './europe';
import northAmerica from './north-america';
import australia from './oceania';
import redacted from './redacted';
import southAmerica from './south-america';
import { createSceneMap } from './utils';

const continents: Continent[] = [
	redacted,
	africa,
	asia,
	australia,
	europe,
	northAmerica,
	southAmerica
];

const sceneMap: Record<string, Scene> = createSceneMap(continents);

const scenes: Scene[] = Object.values(sceneMap);

export { scenes, continents };

export function getSceneByID(id: string): Optional<Scene> {
	return sceneMap[id];
}
