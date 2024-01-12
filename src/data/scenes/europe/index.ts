import type { Continent } from '$lib/types';

import austria from './austria';
import czechia from './czechia';
import france from './france';
import germany from './germany';
import italy from './italy';
import monaco from './monaco';
import netherlands from './netherlands';
import romania from './romania';
import scotland from './scotland';
import serbia from './serbia';
import spain from './spain';
import switzerland from './switzerland';
import uk from './uk';
import ukraine from './ukraine';

export default {
	name: 'Europe',
	emoji: 'globe-showing-europe-africa',
	countries: [
		austria,
		czechia,
		france,
		germany,
		italy,
		monaco,
		netherlands,
		romania,
		scotland,
		serbia,
		spain,
		switzerland,
		uk,
		ukraine
	]
} satisfies Continent;
