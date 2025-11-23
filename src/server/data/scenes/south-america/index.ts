import { createContinent } from '../../../schema';

import brazil from './brazil';
import mexico from './mexico';
import peru from './peru';

export default createContinent({
	name: 'South America',
	emoji: '🌎',
	countries: [brazil, mexico, peru]
});
