import { get } from 'svelte/store';

import { currentScene, currentTrack } from './stores';
import { page } from '$app/stores';
import { sceneMap } from '$data/scenes';
import { stationMap } from '$data/stations';

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
