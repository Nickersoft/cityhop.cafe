import type { Continent } from './continent';
import type { Country } from './country';
import type { Scene } from './scene';
import type { SceneGroup } from './scene-group';

export type SearchResultItem = Continent | Country | SceneGroup | Scene;

export function isSceneGroup(item: SearchResultItem): item is SceneGroup {
	return item.__type__ === 'group';
}

export function isScene(item: SearchResultItem): item is Scene {
	return item.__type__ === 'scene';
}

export function isContinent(item: SearchResultItem): item is Continent {
	return item.__type__ === 'continent';
}

export function isCountry(item: SearchResultItem): item is Country {
	return item.__type__ === 'country';
}
