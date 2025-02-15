import type { Continent, Country, Scene, SceneGroup } from '$types';
import { alphabetical } from '$lib/utils';

export function flattenScenes(scenes: (Scene | SceneGroup)[], country: string) {
	return scenes.reduce(
		(acc, scene): Record<string, Scene> =>
			Object.assign(
				acc,
				'scenes' in scene ? flattenScenes(scene.scenes, country) : { [scene.videoID]: scene }
			),
		{}
	);
}

export function flattenCountries(countries: Country[]): Record<string, Scene> {
	return countries.reduce(
		(acc, country) => Object.assign(acc, flattenScenes(country.scenes, country.name)),
		{}
	);
}

export function deepSort<T extends Continent | Scene | SceneGroup>(list: T): T {
	if ('scenes' in list) {
		return {
			...list,
			scenes: alphabetical(list.scenes.map(deepSort), ({ name }) => name)
		};
	}

	if ('countries' in list) {
		return {
			...list,
			countries: alphabetical(list.countries.map(deepSort), ({ name }) => name)
		};
	}

	return list;
}
