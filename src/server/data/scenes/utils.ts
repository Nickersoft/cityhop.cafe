import {
	type SceneWithCountry,
	type SearchResultItem,
	isContinent,
	isCountry,
	isScene,
	isSceneGroup
} from '$server/schema';

export function createSceneMap(items: SearchResultItem[]): Record<string, SceneWithCountry> {
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
		{} as Record<string, SceneWithCountry>
	);
}
