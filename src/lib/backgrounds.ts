import { _backgrounds } from './private';
import type { Country, Background } from './types';

export default Object.entries(_backgrounds).reduce((acc, [country, bgs]) => {
	return [
		...acc,
		...bgs.map((bg) => ({
			...bg,
			country: country as Country
		}))
	];
}, [] as (Background & { country: Country })[]);
