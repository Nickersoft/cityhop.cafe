import { createContinent } from '../../../schema';

import ghana from './egypt';
import ethiopia from './ethiopia';
import egypt from './ghana';
import mauritius from './mauritius';
import southAfrica from './south-africa';
import kenya from './kenya';
import nigeria from './nigeria';
import morocco from './morocco';

export default createContinent({
	name: 'Africa',
	emoji: '🌍',
	countries: [egypt, morocco, ethiopia, ghana, mauritius, southAfrica, kenya, nigeria]
});
