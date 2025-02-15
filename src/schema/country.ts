import * as v from 'valibot';
import { sceneGroupSchema } from './scene-group';

export const countrySchema = v.pipe(
	sceneGroupSchema,
	v.transform((input) => ({
		...input,
		thumbnail: input.scenes[0].thumbnail,
		__type__: 'country' as const
	}))
);

export type CountryInput = v.InferInput<typeof countrySchema>;
export type Country = v.InferOutput<typeof countrySchema>;

export function createCountry(input: CountryInput): Country {
	return v.parse(countrySchema, input);
}
