import { z } from 'zod';
import getCountryEmoji from 'country-flag-icons/unicode';

import { countryToAlpha2 } from 'country-to-iso';

import { sceneGroupSchema } from './scene-group';

export const countrySchema = sceneGroupSchema.transform((input) => {
	const code = countryToAlpha2(input.name)?.toLowerCase();
	const emoji = code ? getCountryEmoji(code) : undefined;

	return {
		...input,
		code,
		emoji,
		thumbnail: input.scenes[0]?.thumbnail,
		__type__: 'country' as const
	};
});

export type CountryInput = z.input<typeof countrySchema>;
export type Country = z.output<typeof countrySchema>;

export function createCountry(input: CountryInput): Country {
	return z.parse(countrySchema, input);
}
