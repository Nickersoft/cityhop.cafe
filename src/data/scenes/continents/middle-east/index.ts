import type { Continent } from '$lib/types';

import jordan from './jordan';
import lebanon from './lebanon';
import turkey from './turkey';

export default {
	name: 'Middle East',
	countries: [jordan, lebanon, turkey]
} satisfies Continent;
