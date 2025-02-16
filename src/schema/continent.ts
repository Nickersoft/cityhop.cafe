import * as v from 'valibot';

import { alphabetical } from '$lib/utils';

import { countrySchema, createCountry } from './country';

export const continentSchema = v.pipe(
	v.object({
		name: v.string(),
		hidden: v.optional(v.boolean()),
		emoji: v.string(),
		countries: v.optional(v.array(countrySchema))
	}),
	v.transform(({ countries, ...input }) => ({
		...input,
		countries: alphabetical(countries ?? [], ({ name }) => name).map(createCountry)
	})),
	v.transform(({ countries, ...input }) => ({
		__type__: 'continent' as const,
		...input,
		countries: countries.map(createCountry),
		thumbnail: countries[0].thumbnail
	}))
);

export type ContinentInput = v.InferInput<typeof continentSchema>;
export type Continent = v.InferOutput<typeof continentSchema>;

export function createContinent(input: ContinentInput): Continent {
	return v.parse(continentSchema, input);
}
