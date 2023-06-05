import { get } from 'svelte/store';
import { draw } from 'radash';

import { page } from '$app/stores';

import scenes, { sceneMap } from '$data/scenes';
import { stationMap } from '$data/stations';

import type { Scene, Track } from './types';

export function getSharableURL() {
	const $currentScene = get(currentScene);
	const $currentTrack = get(currentTrack);
	const key = btoa(`${$currentScene.videoID}:${$currentTrack.trackID}`);

	return `${get(page).url.origin}/?v=${key}`;
}

export function decodeSharableURL(url: URL) {
	const v = url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			const scene = sceneMap[videoID];
			const track = stationMap[audioID];

			if (scene && track) {
				return { scene, track };
			}
		}
	}

	return null;
}

export function encodeV({ scene, track }: { scene: Scene; track: Track }) {
	return btoa(`${scene.videoID}:${track.trackID}`);
}

export function decodeV(v: string | null): { scene: Scene; track: Track } | null {
	if (!v) return null;

	const [videoID, audioID] = atob(v).split(':');

	if (videoID && audioID) {
		const scene = sceneMap[videoID];
		const track = stationMap[audioID];

		if (scene && track) {
			return { scene, track };
		}
	}

	return null;
}
