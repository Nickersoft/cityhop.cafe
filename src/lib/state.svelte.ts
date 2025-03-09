import { persistedState } from 'svelte-persisted-state';
import { MediaQuery } from 'svelte/reactivity';

import type { UIState, NowPlaying, UserPreferences } from './types';

export const isMobile = new MediaQuery('(max-width: 640px)');

export const isDark = new MediaQuery('(prefers-color-scheme: dark)');

export const nowPlaying = $state<NowPlaying>({
	scene: null,
	station: null
});

export const preferences = persistedState<UserPreferences>('preferences', {
	preserveAudio: false,
	theme: 'system',
	musicVolume: 100,
	sceneVolume: 15,
	muteMusic: false,
	muteScene: false
});

export const ui = $state<UIState>({
	isPlaying: false,
	windowActive: true,
	hasStarted: false,
	isFullscreen: false
});
