import { isScene, isSceneGroup, isCountry, isContinent } from '$lib/guards';
import type { SearchResultItem } from '$lib/types';
import type { Scene } from '$server/schema';

export function createSceneMap(items: SearchResultItem[]): Record<string, Scene> {
	return items.reduce(
		(acc, item) => {
			if (isScene(item)) {
				return Object.assign(acc, { [item.videoID]: item });
			}

			if (isSceneGroup(item)) {
				return Object.assign(acc, createSceneMap(item.scenes));
			}

			if (isCountry(item)) {
				return Object.assign(acc, createSceneMap(item.scenes));
			}

			if (isContinent(item)) {
				return Object.assign(acc, createSceneMap(item.countries));
			}

			return acc;
		},
		{} as Record<string, Scene>
	);
}
