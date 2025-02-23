import { on } from 'svelte/events';

import { nowPlaying, ui } from '$lib/state.svelte';
import { randomScene, randomStation } from '$lib/api';

async function handleKeyUp(e: KeyboardEvent) {
	if (e.key === 'g' || e.key === 'k') {
		nowPlaying.scene = await randomScene();
	}

	if (e.key === 'g' || e.key === 'm') {
		nowPlaying.station = await randomStation();
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
		event.stopPropagation();
		event.preventDefault();

		ui.hasStarted = true;

		removeStartHandlers();
	}

	return () => {
		keyUpHandler();
		removeStartHandlers();
	};
}
