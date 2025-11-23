import { createContinent } from '../../../schema';

import ghana from './egypt';
import ethiopia from './ethiopia';
import egypt from './ghana';
import mauritius from './mauritius';
import southAfrica from './south-africa';

export default createContinent({
	name: 'Africa',
	emoji: '🌍',
	countries: [egypt, ethiopia, ghana, mauritius, southAfrica]
});
