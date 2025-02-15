import { createContinent } from '$schema';

import canada from './canada';
import us from './us';

export default createContinent({
	name: 'North America',
	emoji: 'globe-showing-americas',
	countries: [us, canada]
});
