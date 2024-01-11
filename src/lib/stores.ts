import { persisted } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';

import type { Scene, Station } from './types';

export const currentScene = writable<Scene>();

export const currentStation = writable<Station>();

export const isPlaying = writable<boolean>(false);

export const hasStarted = writable<boolean>(false);

export const preferences = persisted('preferences', {
	preserveAudio: false,
	musicVolume: 100,
	sceneVolume: 15,
	muteMusic: false,
	muteScene: false
});
