import * as Flags from 'country-flag-icons/string/1x1';

import { countryToAlpha2 } from 'country-to-iso';
import { error } from '@sveltejs/kit';

import { countries } from '$server/data';

import type { EntryGenerator, RequestHandler } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return countries
		.map((country) => {
			const iso = countryToAlpha2(country.name);

			if (!iso) {
				console.warn(`Could not find ISO code for country: ${country.name}`);
				return null;
			}

			return iso;
		})
		.filter(Boolean)
		.map((id) => ({ id: id?.toLowerCase() as string }));
};

export const GET: RequestHandler = async ({ params: { id } }) => {
	const flag = Flags[id.toUpperCase() as keyof typeof Flags];

	if (!flag) {
		return error(404, 'Not found');
	}

	return new Response(flag, {
		headers: {
			'Content-Type': 'image/svg+xml'
		}
	});
};
