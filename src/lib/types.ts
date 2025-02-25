import type { StationWithGenre } from '$server/data/stations';
import type { Scene } from '$server/schema';

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
