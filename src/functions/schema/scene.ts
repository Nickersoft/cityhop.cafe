import { z } from 'zod';

import { SceneTypes, Tags } from '$lib/enums';

import { stationSchema } from './station';
import { getYouTubeLink, getThumbnail } from '$lib/youtube';

const offsetSchema = z.object({
	start: z.optional(z.number()),
	end: z.optional(z.number())
});

export const sceneSchema = z
	.object({
		name: z.string(),
		type: z.enum(SceneTypes),
		country: z.optional(z.string()),
		countryCode: z.optional(z.string()),
		emoji: z.optional(z.string()),
		videoID: z.string(),
		tags: z.optional(z.array(z.enum(Tags))),
		path: z.optional(z.array(z.string())),
		hidden: z.optional(z.boolean()),
		suggestedTrack: z.optional(stationSchema),
		offset: z.optional(offsetSchema),
		length: z.optional(z.number())
	})
	.transform((input) => ({
		__type__: 'scene' as const,
		thumbnail: getThumbnail(input.videoID),
		link: getYouTubeLink(input.videoID),
		...input
	}));

export type SceneInput = z.input<typeof sceneSchema>;
export type Scene = z.output<typeof sceneSchema>;
