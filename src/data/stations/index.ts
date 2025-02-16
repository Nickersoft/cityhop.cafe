import type { Station } from '$schema';

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
			genre: genre as keyof typeof genres
		}))
);

const stationMap = objectify(stations, (station) => station.trackID);

export function getStationByID(id: string): Optional<StationWithGenre> {
	return stationMap[id];
}
