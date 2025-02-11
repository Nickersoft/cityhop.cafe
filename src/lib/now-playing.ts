import { scenes } from '$data/scenes';
import { stationList } from '$data/stations';

import { draw } from '$lib/utils';
import type { Station } from '../types';

import { nowPlaying, ui } from '../state.svelte';

const jazzStations = stationList.filter(({ genre }) => genre === 'jazz') as Station[];
const lofiStations = stationList.filter(({ genre }) => genre === 'lofi') as Station[];

/**
 * Randomizes the station to a lofi station that is not Bollywood Lofi
 */
export function randomizeStation() {
	const candidates = stationList.filter(
		({ genre, name }) => genre === 'lofi' && !name.toLowerCase().includes('bollywood')
	);
	nowPlaying.station = draw(candidates);
}

/**
 * Randomizes the scene
 * @param calmOnly - If true, only calm scenes (scenes with jazz or lofi) will be selected
 */
export function randomizeScene(calmOnly = false) {
	let candidates = scenes;

	ui.isPlaying = false;

	if (calmOnly) {
		candidates = candidates.filter((b) =>
			b.suggestedTrack
				? jazzStations.includes(b.suggestedTrack) || lofiStations.includes(b.suggestedTrack)
				: true
		);
	}

	nowPlaying.scene = draw(candidates)!;
}

/**
 * Randomizes the scene and station, preferring the suggested track if available
 * @param calmOnly - If true, only calm scenes (scenes with jazz or lofi) will be selected
 */
export function randomize(calmOnly = false) {
	randomizeScene(calmOnly);

	if (nowPlaying.scene?.suggestedTrack) {
		nowPlaying.station = nowPlaying.scene.suggestedTrack;
	} else {
		randomizeStation();
	}
}
