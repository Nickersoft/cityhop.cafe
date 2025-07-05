import { createContinent } from '$server/schema';

import austria from './austria';
import bosnia from './bosnia';
import czechia from './czechia';
import denmark from './denmark';
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

export default createContinent({
	name: 'Europe',
	emoji: '🌍',
	countries: [
		austria,
		bosnia,
		czechia,
		denmark,
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
});
