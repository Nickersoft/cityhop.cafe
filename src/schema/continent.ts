import * as v from 'valibot';
import { countrySchema, createCountry } from './country';

export const continentSchema = v.pipe(
	v.object({
		name: v.string(),
		hidden: v.optional(v.boolean()),
		emoji: v.string(),
		countries: v.array(countrySchema)
	}),
	v.transform((input) => ({
		__type__: 'continent' as const,
		...input,
		countries: input.countries.map(createCountry),
		thumbnail: input.countries[0].thumbnail
	}))
);

export type ContinentInput = v.InferInput<typeof continentSchema>;
export type Continent = v.InferOutput<typeof continentSchema>;

export function createContinent(input: ContinentInput): Continent {
	return v.parse(continentSchema, input);
}
