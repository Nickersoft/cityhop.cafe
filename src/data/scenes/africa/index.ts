import type { Continent } from '$lib/types';

import egypt from './egypt';
import ghana from './ghana';
import mauritius from './mauritius';
import southAfrica from './south-africa';

export default {
	name: 'Africa',
	emoji: 'globe-showing-europe-africa',
	countries: [egypt, ghana, mauritius, southAfrica]
} satisfies Continent;
