import * as v from 'valibot';

import { continentSchema, type Continent } from './continent';
import { countrySchema, type Country } from './country';
import { sceneSchema, type Scene } from './scene';
import { sceneGroupSchema, type SceneGroup } from './scene-group';

export type SearchResultItem = Continent | Country | SceneGroup | Scene;

export function isSceneGroup(item: SearchResultItem): item is SceneGroup {
	return v.is(sceneGroupSchema, item);
}

export function isScene(item: SearchResultItem): item is Scene {
	return v.is(sceneSchema, item);
}

export function isContinent(item: SearchResultItem): item is Continent {
	return v.is(continentSchema, item);
}

export function isCountry(item: SearchResultItem): item is Country {
	return v.is(countrySchema, item);
}
