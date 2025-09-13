import * as v from 'valibot';
import getCountryEmoji from 'country-flag-icons/unicode';

import { countryToAlpha2 } from 'country-to-iso';

import { sceneGroupSchema, type SceneGroup } from './scene-group';

export const countrySchema = v.pipe(
	sceneGroupSchema,
	v.transform((input) => {
		const code = countryToAlpha2(input.name)?.toLowerCase();
		const emoji = code ? getCountryEmoji(code) : undefined;

		return {
			...input,
			code,
			emoji,
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
