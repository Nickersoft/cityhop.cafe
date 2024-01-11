import type { Continent } from '$lib/types';

import brazil from './brazil';
import mexico from './mexico';
import peru from './peru';

export default {
	name: 'South America',
	countries: [brazil, mexico, peru]
} satisfies Continent;
