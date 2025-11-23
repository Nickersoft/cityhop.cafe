import { isScene, isSceneGroup, isCountry, isContinent } from '$lib/guards';
import type { SearchResultItem } from '$lib/types';
import type { Country, Scene } from '../../schema';

export function createSceneMap(
	items: SearchResultItem[],
	country: Country | null = null,
	path: string[] = []
): Record<string, Scene> {
	return items.reduce(
		(acc, item) => {
			if (isScene(item)) {
				return Object.assign(acc, {
					[item.videoID]: {
						...item,
						countryCode: country?.code,
						country: country?.name,
						path
					}
				});
			}

			if (isSceneGroup(item)) {
				return Object.assign(acc, createSceneMap(item.scenes, country, [...path, item.name]));
			}

			if (isCountry(item)) {
				return Object.assign(acc, createSceneMap(item.scenes, item, [...path, item.name]));
			}

			if (isContinent(item)) {
				return Object.assign(acc, createSceneMap(item.countries, country, [...path, item.name]));
			}

			return acc;
		},
		{} as Record<string, Scene>
	);
}
