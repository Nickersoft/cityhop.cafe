import { on } from 'svelte/events';

import { nowPlaying, ui } from '$lib/state.svelte';

import { Hotkeys } from '$lib/enums';
import { requestPlaybackStart } from '$lib/playback-events';
import { isPlaybackStartEvent } from './playback-start-event';
import { getRandomScene } from '$server/scenes.remote';
import { getRandomStation } from '$server/stations.remote';

async function handleKeyUp(e: KeyboardEvent) {
	if (e.key === Hotkeys.RANDOM || e.key === Hotkeys.RANDOM_SCENE) {
		nowPlaying.scene = await getRandomScene({});
	}

	if (e.key === Hotkeys.RANDOM || e.key === Hotkeys.RANDOM_STATION) {
		nowPlaying.station = await getRandomStation({});
	}
}

export default function setupHotkeys() {
	const keyUpHandler = on(document, 'keyup', handleKeyUp);

	const startHandlers = [on(document, 'mouseup', start), on(document, 'keyup', start)];

	function removeStartHandlers() {
		for (const remove of startHandlers) {
			remove();
		}
	}

	function start(event: Event) {
		if (!isPlaybackStartEvent(event)) return;

		requestPlaybackStart(event);

		window.setTimeout(() => {
			if (ui.isPlaying) {
				removeStartHandlers();
			}
		}, 5000);
	}

	return () => {
		keyUpHandler();
		removeStartHandlers();
	};
}
