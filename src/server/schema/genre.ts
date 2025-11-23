import { z } from 'zod';

import { stationSchema } from './station';

export const genreSchema = z.object({
	name: z.string(),
	icon: z.string(),
	stations: z.record(z.string(), stationSchema)
});

export type GenreInput = z.input<typeof genreSchema>;
export type Genre = z.output<typeof genreSchema>;

export function createGenre(input: GenreInput): Genre {
	return z.parse(genreSchema, input);
}
