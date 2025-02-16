import { scenes } from '$data/scenes';
import { genres } from '$data/stations';

import { draw } from '$lib/utils';
import type { Scene } from '$schema';
import { nowPlaying, ui } from '$state';

const jazzStations = Object.values(genres.jazz.stations);
const lofiStations = Object.values(genres.lofi.stations);

/**
 * Randomizes the station to a lofi station that is not Bollywood Lofi
 */
export function randomizeStation() {
	const candidates = lofiStations.filter(({ name }) => !name.toLowerCase().includes('bollywood'));
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

	nowPlaying.scene = draw(candidates) as Scene;
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
