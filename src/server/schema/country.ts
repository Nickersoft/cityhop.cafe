import * as v from 'valibot';

import { countryToAlpha2 } from 'country-to-iso';

import { sceneGroupSchema } from './scene-group';

export const countrySchema = v.pipe(
	sceneGroupSchema,
	v.transform((input) => {
		const code = countryToAlpha2(input.name)?.toLowerCase();

		return {
			...input,
			code,
			thumbnail: input.scenes[0]?.thumbnail,
			__type__: 'country' as const
		};
	})
);

export type CountryInput = v.InferInput<typeof countrySchema>;
export type Country = v.InferOutput<typeof countrySchema>;

export function createCountry(input: CountryInput): Country {
	return v.parse(countrySchema, input);
}
