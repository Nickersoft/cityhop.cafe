import { writable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";

import type { Scene, Track } from "./types";

export const currentScene = writable<Scene>();

export const currentTrack = writable<Track>();

export const isPlaying = writable<boolean>(false);

export const hasStarted = writable<boolean>(false);

export const preferences = persisted("preferences", {
  preserveAudio: false,
  musicVolume: 100,
  sceneVolume: 15,
  muteMusic: false,
  muteScene: false,
});
