import type { SceneTypes } from './enums';
import type { Tags } from './enums';

export interface UIState {
	isPlaying: boolean;
	hasStarted: boolean;
	isFullscreen: boolean;
}

export interface NowPlaying {
	scene: Nullable<Scene>;
	station: Nullable<Station>;
}

export interface Genre {
	name: string;
	emoji: string;
	stations: Record<string, Station>;
}

export interface Station {
	name: string;
	displayName?: string;
	trackID: string;
	tags?: Tags[];
	live: boolean;
	hidden?: boolean;
}

export interface Offset {
	start?: number;
	end?: number;
}

export interface Continent {
	name: string;
	hidden?: boolean;
	emoji: string;
	countries: Country[];
}

export interface ContinentWithThumbnail extends Continent {
	thumbnail: string;
}

export type Country = SceneGroup & {
	emoji: 'flag';
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

export interface SceneWithThumbnail extends Scene {
	thumbnail: string;
}
