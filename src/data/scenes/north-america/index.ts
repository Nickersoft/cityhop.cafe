import type { Continent } from '$lib/types';

import canada from './canada';
import us from './us';

export default {
	name: 'North America',
	emoji: 'globe-showing-americas',
	countries: [us, canada]
} satisfies Continent;
