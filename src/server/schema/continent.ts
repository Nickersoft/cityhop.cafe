import { z } from 'zod';

import { countrySchema, createCountry } from './country';
import { sortBy } from 'es-toolkit';

export const continentSchema = z
	.object({
		name: z.string(),
		hidden: z.optional(z.boolean()),
		emoji: z.string(),
		countries: z.optional(z.array(countrySchema))
	})
	.transform(({ countries, ...input }) => ({
		...input,
		countries: sortBy(countries ?? [], ['name']).map(createCountry)
	}))
	.transform(({ countries, ...input }) => ({
		__type__: 'continent' as const,
		...input,
		countries: countries.map(createCountry),
		thumbnail: countries[0]?.thumbnail
	}));

export type ContinentInput = z.input<typeof continentSchema>;
export type Continent = z.output<typeof continentSchema>;

export function createContinent(input: ContinentInput): Continent {
	return z.parse(continentSchema, input);
}
