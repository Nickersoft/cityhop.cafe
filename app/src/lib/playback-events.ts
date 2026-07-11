import { ui } from '$lib/state.svelte';

export const START_PLAYBACK_EVENT = 'cityhop:start-playback';
const PLAYBACK_START_FALLBACK_DELAY = 8000;

let playbackStartTimeout: number | undefined;
let playbackStartRequested = false;

export function hasPlaybackStartBeenRequested() {
	return playbackStartRequested;
}

export function clearPlaybackStartTimeout() {
	if (playbackStartTimeout) {
		window.clearTimeout(playbackStartTimeout);
		playbackStartTimeout = undefined;
	}
}

export function requestPlaybackStart(event?: Event) {
	event?.stopPropagation();
	event?.preventDefault();

	playbackStartRequested = true;
	ui.hasStarted = true;
	ui.playbackBlocked = false;
	ui.playbackError = null;

	clearPlaybackStartTimeout();
	playbackStartTimeout = window.setTimeout(() => {
		if (!ui.isPlaying) {
			ui.playbackBlocked = true;
		}
	}, PLAYBACK_START_FALLBACK_DELAY);

	document.dispatchEvent(new CustomEvent(START_PLAYBACK_EVENT));
}
