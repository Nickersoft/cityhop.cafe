import type { StationWithGenre } from '$server/data/stations';
import type { SceneWithCountry } from '$server/schema';

export interface UIState {
	isPlaying: boolean;
	windowActive: boolean;
	hasStarted: boolean;
	isFullscreen: boolean;
}

export interface NowPlaying {
	scene: Nullable<SceneWithCountry>;
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
