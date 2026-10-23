import { z } from 'zod';

import { getYouTubeLink } from '#lib/youtube.js';

import { Tags } from '#lib/enums.js';

export const stationSchema = z
	.object({
		name: z.string(),
		displayName: z.optional(z.string()),
		trackID: z.string(),
		tags: z.optional(z.array(z.enum(Tags))),
		live: z.boolean(),
		hidden: z.optional(z.boolean())
	})
	.transform((input) => ({
		__type__: 'station' as const,
		link: getYouTubeLink(input.trackID),
		...input
	}));

export type Station = z.output<typeof stationSchema>;
