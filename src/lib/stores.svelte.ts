import { persistedState } from 'svelte-persisted-state';

import type { Scene, Station } from './types';

function createPreferences() {
	const preferences = persistedState('preferences', {
		preserveAudio: false,
		musicVolume: 100,
		sceneVolume: 15,
		muteMusic: false,
		muteScene: false
	});

	return {
		get preserveAudio() {
			return preferences.value.preserveAudio;
		},
		set preserveAudio(value: boolean) {
			preferences.value.preserveAudio = value;
		},
		get musicVolume() {
			return preferences.value.musicVolume;
		},
		set musicVolume(value: number) {
			preferences.value.musicVolume = value;
		},
		get sceneVolume() {
			return preferences.value.sceneVolume;
		},
		set sceneVolume(value: number) {
			preferences.value.sceneVolume = value;
		},
		get muteMusic() {
			return preferences.value.muteMusic;
		},
		set muteMusic(value: boolean) {
			preferences.value.muteMusic = value;
		},
		get muteScene() {
			return preferences.value.muteScene;
		},
		set muteScene(value: boolean) {
			preferences.value.muteScene = value;
		}
	};
}

function createUIState() {
	let isPlaying = $state<boolean>(false);
	let hasStarted = $state<boolean>(false);
	let isFullscreen = $state<boolean>(false);

	return {
		get isPlaying() {
			return isPlaying;
		},
		set isPlaying(value: boolean) {
			isPlaying = value;
		},
		get hasStarted() {
			return hasStarted;
		},
		set hasStarted(value: boolean) {
			hasStarted = value;
		},
		get isFullscreen() {
			return isFullscreen;
		},
		set isFullscreen(value: boolean) {
			isFullscreen = value;
		}
	};
}

function createNowPlaying() {
	let scene = $state<Optional<Scene>>();
	let station = $state<Optional<Station>>();

	return {
		get scene() {
			return scene;
		},
		set scene(value: Optional<Scene>) {
			scene = value;
		},
		get station() {
			return station;
		},
		set station(value: Optional<Station>) {
			station = value;
		}
	};
}

export const userPreferences = createPreferences();
export const uiState = createUIState();
export const nowPlaying = createNowPlaying();
