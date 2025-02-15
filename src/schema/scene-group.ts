import * as v from 'valibot';

import { sceneSchema, type Scene, type SceneInput } from './scene';

function findThumbnail(scenes: (Scene | SceneGroup)[]): string {
	if ('scenes' in scenes[0]) {
		return findThumbnail(scenes[0].scenes);
	}
	return scenes[0].thumbnail;
}

export interface SceneGroupInput {
	name: string;
	previewID?: string;
	scenes: (SceneGroupInput | SceneInput)[];
}

export interface SceneGroup extends SceneGroupInput {
	__type__: 'group';
	thumbnail: string;
	scenes: (SceneGroup | Scene)[];
}

export const sceneGroupSchema: v.GenericSchema<SceneGroupInput, SceneGroup> = v.pipe(
	v.object({
		name: v.string(),
		previewID: v.optional(v.string()),
		scenes: v.array(v.lazy(() => v.union([sceneSchema, sceneGroupSchema])))
	}),
	v.transform((input) => ({
		__type__: 'group' as const,
		thumbnail: findThumbnail(input.scenes),
		...input
	}))
);

export function createSceneGroup(input: SceneGroupInput): SceneGroup {
	return v.parse(sceneGroupSchema, input);
}
