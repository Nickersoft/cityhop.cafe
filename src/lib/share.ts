import { page } from '$app/state';
import { nowPlaying } from '$lib/state.svelte';

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
export function getPostURL({ scene, station }: typeof nowPlaying) {
	if (!scene || !station) return null;

	const post = `Come ${scene.type} in #${createHashtag(
		scene.name
	)} with me and chill! 🎧 #cityhop #${createHashtag(station.genre.toLowerCase())}
    
  ${getSharableURL()}`;

	return `https://bsky.app/intent/compose?text=${encodeURIComponent(post)}`;
}
