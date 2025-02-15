import type { Continent, Scene } from '$types';
import { alphabetical } from '$lib/utils';

import africa from './africa';
import asia from './asia';
import europe from './europe';
import northAmerica from './north-america';
import australia from './oceania';
import redacted from './redacted';
import southAmerica from './south-america';

import { deepSort, flattenCountries } from './utils';

const continents: Continent[] = alphabetical(
	[redacted, africa, asia, australia, europe, northAmerica, southAmerica],
	({ name }) => name
).map(deepSort);

const sceneMap: Record<string, Scene> = continents.reduce(
	(acc, continent) => Object.assign(acc, flattenCountries(continent.countries)),
	{}
);

const scenes: Scene[] = Object.values(sceneMap);

export { scenes, continents, sceneMap };
