import { page } from '$app/state';
import type { StationWithGenre } from '$data/stations';
import { nowPlaying, ui } from '$state';

/**
 * Randomizes the station to a lofi station that is not Bollywood Lofi
 */
export async function randomizeStation() {
	const station = await fetch('/api/stations/random').then((res) => res.json());
	nowPlaying.station = station as StationWithGenre;
}

/**
 * Randomizes the scene
 * @param calmOnly - If true, only calm scenes (scenes with jazz or lofi) will be selected
 */
export async function randomizeScene(calmOnly = false) {
	ui.isPlaying = false;

	const scene = await fetch(`/api/scenes/random?calm=${calmOnly}`).then((res) => res.json());

	nowPlaying.scene = scene;
}

/**
 * Randomizes the scene and station, preferring the suggested track if available
 * @param calmOnly - If true, only calm scenes (scenes with jazz or lofi) will be selected
 */
export async function randomize(calmOnly = false) {
	const { scene, station } = await fetch('/api/random').then((res) => res.json());

	nowPlaying.scene = scene;
	nowPlaying.station = station;
}

/**
 * Returns a sharable URL with the current scene and station
 * @returns The sharable URL
 */
export function getSharableURL() {
	const { scene, station } = nowPlaying;

	const key = btoa(`${scene?.videoID}:${station?.trackID}`);

	return `${page.url}/?v=${key}`;
}

/**
 * Creates a hashtag from a string
 * @param str - The string to create a hashtag from
 */
function createHashtag(str: string) {
	return str.replace(/[\W\s]+/g, '');
}

/**
 * Returns a URL to share the current scene and station on Bluesky
 */
export function getPostURL() {
	const { scene, station } = nowPlaying;

	if (!scene || !station) return null;

	const post = `Come ${scene.type} in #${createHashtag(
		scene.name
	)} with me and chill! 🎧 #cityhop #${createHashtag(station.genre.toLowerCase())}
    
  ${getSharableURL()}`;

	return `https://bsky.app/intent/compose?text=${encodeURIComponent(post)}`;
}
