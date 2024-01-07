import type { Continent } from '$lib/types';

import us from './us';
import canada from './canada';

export default {
	name: 'North America',
	countries: [us, canada]
} satisfies Continent;
