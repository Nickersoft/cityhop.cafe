import { ui } from '$lib/state.svelte';

export const START_PLAYBACK_EVENT = 'cityhop:start-playback';

let playbackStartTimeout: number | undefined;

export function clearPlaybackStartTimeout() {
	if (playbackStartTimeout) {
		window.clearTimeout(playbackStartTimeout);
		playbackStartTimeout = undefined;
	}
}

export function requestPlaybackStart(event?: Event) {
	event?.stopPropagation();
	event?.preventDefault();

	ui.hasStarted = true;
	ui.playbackBlocked = false;
	ui.playbackError = null;

	clearPlaybackStartTimeout();
	playbackStartTimeout = window.setTimeout(() => {
		if (!ui.isPlaying) {
			ui.playbackBlocked = true;
		}
	}, 5000);

	document.dispatchEvent(new CustomEvent(START_PLAYBACK_EVENT));
}
