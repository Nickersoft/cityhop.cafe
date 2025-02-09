import { persistedState } from 'svelte-persisted-state';

import type { UIState, NowPlaying } from '$lib/types';

export const nowPlaying = $state<NowPlaying>({
	scene: null,
	station: null
});

export const preferences = persistedState('preferences', {
	preserveAudio: false,
	musicVolume: 100,
	sceneVolume: 15,
	muteMusic: false,
	muteScene: false
});

export const ui = $state<UIState>({
	isPlaying: false,
	hasStarted: false,
	isFullscreen: false
});
