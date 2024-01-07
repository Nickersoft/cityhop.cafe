import type { Provinces } from '$data/provinces';
import type { States } from '$data/states';
import type { Tags } from '$data/tags';
import type { SceneTypes } from '$data/types';

export interface Track {
	name: string;
	trackID: string;
	genre: Genre;
	live: boolean;
}

export interface Offset {
	start?: number;
	end?: number;
}

export interface Continent {
	name: string;
	countries: Country[];
}

export type Country = SceneGroup & {
	emoji: string;
};

export interface SceneGroup {
	name: string;
	scenes: (Scene | SceneGroup)[];
}

export interface Scene {
	name: string;
	type: SceneTypes;
	videoID: string;
	tags?: Tags[];
	suggestedTrack?: Track;
	offset?: Offset;
	// Used to better determine a good starting point
	// Not required
	length?: number;
}

export enum Genre {
	pop = 'Pop',
	jazz = 'Jazz',
	lofi = 'Lofi',
	rnb = 'R&B',
	classical = 'Classical',
	electronic = 'Electronic'
}
