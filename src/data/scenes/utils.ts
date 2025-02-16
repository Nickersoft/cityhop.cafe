import type { Scene, SearchResultItem } from '$schema';
import { isScene } from '$schema/utils';

export function createSceneMap(items: SearchResultItem[]): Record<string, Scene> {
	return items.reduce(
		(acc, item) => {
			if (isScene(item)) return Object.assign(acc, { [item.videoID]: item });

			return ['scenes', 'countries'].reduce((innerAcc, key) => {
				const collection = item[key as keyof typeof item];
				if (Array.isArray(collection)) {
					return Object.assign(innerAcc, createSceneMap(collection));
				}
				return innerAcc;
			}, acc);
		},
		{} as Record<string, Scene>
	);
}
