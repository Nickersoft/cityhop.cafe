import { writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store';

import type { BackgroundWithCountry, Track } from './types';

export const currentScene = writable<BackgroundWithCountry>();
export const currentTrack = writable<Track>();
export const preferences = persisted('preferences', {
	preserveAudio: false,
	musicVolume: 100,
	sceneVolume: 15,
	muteMusic: false,
	muteScene: false
});
