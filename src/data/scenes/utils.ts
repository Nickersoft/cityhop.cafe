import { alphabetical } from '$lib/utils';
import {
	isContinent,
	isCountry,
	isSceneGroup,
	type Country,
	type Scene,
	type SceneGroup,
	type SearchResultItem
} from '$schema';

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

export function deepSort<T extends SearchResultItem>(list: T): T {
	if (isSceneGroup(list) || isCountry(list)) {
		return {
			...list,
			scenes: alphabetical(list.scenes.map(deepSort), ({ name }) => name)
		};
	}

	if (isContinent(list)) {
		return {
			...list,
			countries: alphabetical(list.countries.map(deepSort), ({ name }) => name)
		};
	}

	return list;
}
