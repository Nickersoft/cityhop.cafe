import type { Scene, Station } from './schema';

export interface UIState {
	isPlaying: boolean;
	windowActive: boolean;
	hasStarted: boolean;
	isFullscreen: boolean;
}

export interface NowPlaying {
	scene: Nullable<Scene>;
	station: Nullable<Station>;
}
