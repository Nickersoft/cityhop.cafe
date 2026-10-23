import { z } from 'zod';

import { Tags } from '#lib/enums.js';

export const randomStationSchema = z.object({
	tags: z.array(z.enum(Tags)).default([])
});

export const randomSceneSchema = randomStationSchema.extend({
	calmOnly: z.boolean().optional()
});
