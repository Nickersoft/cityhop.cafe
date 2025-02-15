import * as v from 'valibot';
import { Tags } from '$enums';

export const stationSchema = v.pipe(
	v.object({
		name: v.string(),
		displayName: v.optional(v.string()),
		trackID: v.string(),
		tags: v.optional(v.array(v.enum(Tags))),
		live: v.boolean(),
		hidden: v.optional(v.boolean())
	}),
	v.transform((input) => ({
		__type__: 'station' as const,
		...input
	}))
);

export type StationInput = v.InferInput<typeof stationSchema>;
export type Station = v.InferOutput<typeof stationSchema>;

export function createStation(input: StationInput): Station {
	return v.parse(stationSchema, input);
}
