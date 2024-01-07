import type { Continent } from '$lib/types';

import china from './china';
import india from './india';
import japan from './japan';
import korea from './korea';
import russia from './russia';
import singapore from './singapore';
import taiwan from './taiwan';
import thailand from './thailand';
import uae from './uae';
import vietnam from './vietnam';

export default {
	name: 'Asia',
	countries: [china, india, japan, korea, russia, singapore, taiwan, thailand, uae, vietnam]
} satisfies Continent;
