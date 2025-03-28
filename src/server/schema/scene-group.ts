import * as v from 'valibot';

import { alphabetical } from '$lib/utils';

import { sceneSchema, type Scene, type SceneInput } from './scene';

function findThumbnail(scenes: (Scene | SceneGroup)[]): string {
	if (scenes[0].__type__ === 'group') {
		return findThumbnail(scenes[0].scenes);
	}
	return scenes[0]?.thumbnail;
}

export interface SceneGroupInput {
	name: string;
	emoji?: string;
	scenes?: (SceneGroupInput | SceneInput)[];
}

export interface SceneGroup extends SceneGroupInput {
	__type__: 'group';
	thumbnail: string;
	scenes: (SceneGroup | Scene)[];
}

export interface SceneGroupWithCountry extends SceneGroup {
	country: string;
}

export function deepSort<T extends SceneGroup | Scene>(scenes: T[]): T[] {
	return alphabetical(scenes, ({ name }) => name).map((scene) => {
		if (scene.__type__ === 'group') {
			return {
				...scene,
				scenes: deepSort(scene.scenes)
			};
		}
		return scene;
	});
}

export const sceneGroupSchema: v.GenericSchema<SceneGroupInput, SceneGroup> = v.pipe(
	v.object({
		name: v.string(),
		emoji: v.optional(v.string()),
		scenes: v.optional(v.array(v.lazy(() => v.union([sceneSchema, sceneGroupSchema]))))
	}),
	v.transform(({ scenes, ...input }) => ({
		...input,
		scenes: deepSort(scenes ?? [])
	})),
	v.transform((input) => ({
		__type__: 'group' as const,
		thumbnail: findThumbnail(input.scenes),
		...input
	}))
);
