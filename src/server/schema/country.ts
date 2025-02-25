import * as v from 'valibot';
import getCountryEmoji from 'country-flag-icons/unicode';

import { countryToAlpha2 } from 'country-to-iso';

import { sceneGroupSchema, type SceneGroup } from './scene-group';
import { isSceneGroup } from './utils';
import type { Scene } from './scene';

type SceneOrGroup = Scene | SceneGroup;

function injectCountryInfo(
	items: SceneOrGroup[],
	code: string,
	emoji: string | undefined
): SceneOrGroup[] {
	return items.map((item) =>
		isSceneGroup(item)
			? { ...item, emoji, scenes: injectCountryInfo(item.scenes, code, emoji) }
			: { ...item, country: code, emoji }
	);
}

export const countrySchema = v.pipe(
	sceneGroupSchema,
	v.transform((input) => {
		const code = countryToAlpha2(input.name)?.toLowerCase();
		const emoji = code ? getCountryEmoji(code) : undefined;

		return {
			...input,
			scenes: code ? injectCountryInfo(input.scenes, code, emoji) : input.scenes,
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
