import type { StationWithGenre } from '$server/data/stations';
import type { Continent, Country, Scene, SceneGroup } from '$server/schema';

export type SearchResultItem =
	| Omit<Continent, 'countries'>
	| Omit<Country, 'scenes'>
	| SceneGroup
	| Scene;

export interface UIState {
	isPlaying: boolean;
	windowActive: boolean;
	hasStarted: boolean;
	isFullscreen: boolean;
}

export interface NowPlaying {
	scene: Nullable<Scene>;
	station: Nullable<StationWithGenre>;
}

export interface UserPreferences {
	preserveAudio: boolean;
	theme: 'system' | 'light' | 'dark';
	musicVolume: number;
	sceneVolume: number;
	muteMusic: boolean;
	muteScene: boolean;
}
