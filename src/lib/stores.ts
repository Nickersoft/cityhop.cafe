import { writable } from 'svelte/store';

import type { BackgroundWithCountry, Track } from './types';

export const currentScene = writable<BackgroundWithCountry>();
export const currentTrack = writable<Track>();
