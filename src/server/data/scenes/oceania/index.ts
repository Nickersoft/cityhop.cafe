import { createContinent } from '$server/schema';

import australia from './australia';
import newZealand from './new-zealand';

export default createContinent({
	name: 'Oceania',
	emoji: '🌏',
	countries: [australia, newZealand]
});
