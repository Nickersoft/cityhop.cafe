import * as v from 'valibot';

import * as icons from '$lib/icons';

import { stationSchema } from './station';

export const genreSchema = v.object({
	name: v.string(),
	icon: v.picklist(Object.keys(icons)),
	stations: v.record(v.string(), stationSchema)
});

export type GenreInput = v.InferInput<typeof genreSchema>;
export type Genre = v.InferOutput<typeof genreSchema>;

export function createGenre(input: GenreInput): Genre {
	return v.parse(genreSchema, input);
}
