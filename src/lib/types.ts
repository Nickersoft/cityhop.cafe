import type { Genres } from '$data/genres';
import type { SceneTypes } from '$data/scene-types';
import type { Tags } from '$data/tags';

export interface Station {
	name: string;
	displayName?: string;
	trackID: string;
	genre: Genres;
	live: boolean;
}

export interface Offset {
	start?: number;
	end?: number;
}

export interface Continent {
	name: string;
	hidden?: boolean;
	countries: Country[];
}

export type Country = SceneGroup & {
	emoji: string;
};

export interface SceneGroup {
	name: string;
	previewID?: string;
	scenes: (Scene | SceneGroup)[];
}

export interface Scene {
	name: string;
	type: SceneTypes;
	videoID: string;
	tags?: Tags[];
	hidden?: boolean;
	suggestedTrack?: Station;
	offset?: Offset;
	// Used to better determine a good starting point
	// Not required
	length?: number;
}
