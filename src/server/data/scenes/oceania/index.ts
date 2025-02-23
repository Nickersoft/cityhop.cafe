import { createContinent } from '$server/schema';

import australia from './australia';
import newZealand from './new-zealand';

export default createContinent({
	name: 'Oceania',
	emoji: 'globe-showing-asia-australia',
	countries: [australia, newZealand]
});
