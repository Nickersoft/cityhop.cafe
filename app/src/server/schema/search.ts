import { z } from 'zod';

import { Tags } from '$lib/enums';

export const searchSchema = z.object({
	query: z.string().optional(),
	path: z.string().optional(),
	tags: z.array(z.enum(Tags)).default([])
});

export type SearchParams = z.infer<typeof searchSchema>;
