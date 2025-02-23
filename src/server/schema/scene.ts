import * as v from 'valibot';

import { SceneTypes, Tags } from '$lib/enums';

import { stationSchema } from './station';
import { getYouTubeLink, getThumbnail } from '$lib/youtube';

const offsetSchema = v.object({
	start: v.optional(v.number()),
	end: v.optional(v.number())
});

export const sceneSchema = v.pipe(
	v.object({
		name: v.string(),
		type: v.enum(SceneTypes),
		videoID: v.string(),
		tags: v.optional(v.array(v.enum(Tags))),
		hidden: v.optional(v.boolean()),
		suggestedTrack: v.optional(stationSchema),
		offset: v.optional(offsetSchema),
		length: v.optional(v.number())
	}),
	v.transform((input) => ({
		__type__: 'scene' as const,
		thumbnail: getThumbnail(input.videoID),
		link: getYouTubeLink(input.videoID),
		...input
	}))
);

export type SceneInput = v.InferInput<typeof sceneSchema>;
export type Scene = v.InferOutput<typeof sceneSchema>;
export type SceneWithCountry = Scene & { country: string };
