import type { Continent } from '../../../types';

import australia from './australia';
import newZealand from './new-zealand';

export default {
	name: 'Oceania',
	emoji: 'globe-showing-asia-australia',
	countries: [australia, newZealand]
} satisfies Continent;
