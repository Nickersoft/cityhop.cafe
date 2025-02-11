import type { Station } from '../../types';
import { objectify } from '../../lib/utils';

import { classical } from './classical';
import { electronic } from './electronic';
import { jazz } from './jazz';
import { lofi } from './lofi';
import { pop } from './pop';
import { rnb } from './rnb';

export const genres = {
	lofi,
	classical,
	jazz,
	electronic,
	pop,
	rnb
};

export interface StationWithGenre extends Station {
	genre: keyof typeof genres;
}

export const stations: StationWithGenre[] = Object.entries(genres).flatMap(
	([genre, { stations }]) =>
		Object.values(stations).map((station) => ({
			...station,
			genre
		}))
);
export const stationMap = objectify(stations, (station) => station.trackID);
export const stationList = stations.filter((s) => !s.hidden);
