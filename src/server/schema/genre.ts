import * as v from 'valibot';

import { stationSchema } from './station';

export const genreSchema = v.object({
	name: v.string(),
	emoji: v.string(),
	stations: v.record(v.string(), stationSchema)
});

export type GenreInput = v.InferInput<typeof genreSchema>;
export type Genre = v.InferOutput<typeof genreSchema>;

export function createGenre(input: GenreInput): Genre {
	return v.parse(genreSchema, input);
}
