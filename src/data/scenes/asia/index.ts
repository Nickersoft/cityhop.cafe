import type { Continent } from '$lib/types';

import china from './china';
import india from './india';
import japan from './japan';
import jordan from './jordan';
import korea from './korea';
import laos from './laos';
import lebanon from './lebanon';
import russia from './russia';
import singapore from './singapore';
import taiwan from './taiwan';
import thailand from './thailand';
import turkey from './turkey';
import uae from './uae';
import vietnam from './vietnam';

export default {
	name: 'Asia',
	emoji: 'globe-showing-asia-australia',
	countries: [
		china,
		india,
		japan,
		jordan,
		korea,
		laos,
		lebanon,
		russia,
		singapore,
		taiwan,
		thailand,
		turkey,
		uae,
		vietnam
	]
} satisfies Continent;
