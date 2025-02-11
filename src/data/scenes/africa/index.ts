import type { Continent } from '../../../types';

import ghana from './egypt';
import ethiopia from './ethiopia';
import egypt from './ghana';
import mauritius from './mauritius';
import southAfrica from './south-africa';

export default {
	name: 'Africa',
	emoji: 'globe-showing-europe-africa',
	countries: [egypt, ethiopia, ghana, mauritius, southAfrica]
} satisfies Continent;
