import type { Continent } from '../../../types';

import brazil from './brazil';
import mexico from './mexico';
import peru from './peru';

export default {
	name: 'South America',
	emoji: 'globe-showing-americas',
	countries: [brazil, mexico, peru]
} satisfies Continent;
