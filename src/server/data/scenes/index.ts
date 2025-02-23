import type { Continent, Country, Scene, SceneWithCountry } from '$server/schema';

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

const countries: Country[] = continents.flatMap((continent) => continent.countries);

const sceneMap = createSceneMap(continents);

const scenes: SceneWithCountry[] = Object.values(sceneMap);

export function getSceneByID(id: string): Optional<SceneWithCountry> {
	return sceneMap[id];
}

export { scenes, countries, continents };
