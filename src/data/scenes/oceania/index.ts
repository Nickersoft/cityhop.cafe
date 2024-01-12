import type { Continent } from '$lib/types';

import australia from './australia';

export default {
	name: 'Oceania',
	emoji: 'globe-showing-asia-australia',
	countries: [australia]
} satisfies Continent;
