import {
	type Continent,
	type SceneWithCountry,
	type SearchResultItem,
	isContinent,
	isCountry,
	isScene,
	isSceneGroup
} from '$server/schema';

function createSceneMap_(
	items: SearchResultItem[],
	countryCode?: string
): Record<string, SceneWithCountry> {
	return items.reduce(
		(acc, item) => {
			if (isScene(item)) {
				return Object.assign(acc, {
					[item.videoID]: {
						...item,
						country: countryCode
					}
				});
			}

			if (isSceneGroup(item)) {
				return Object.assign(acc, createSceneMap_(item.scenes, countryCode));
			}

			if (isCountry(item)) {
				return Object.assign(acc, createSceneMap_(item.scenes, item.code));
			}

			if (isContinent(item)) {
				return Object.assign(acc, createSceneMap_(item.countries));
			}

			return acc;
		},
		{} as Record<string, SceneWithCountry>
	);
}

export function createSceneMap(items: Continent[]): Record<string, SceneWithCountry> {
	return createSceneMap_(items);
}
