import { on } from 'svelte/events';
import { randomize, randomizeScene, randomizeStation } from './now-playing';
import { ui } from '../state.svelte';

function handleKeyUp(e: KeyboardEvent) {
	if (e.key === 'g') {
		randomize();
	} else if (e.key === 'k') {
		randomizeScene();
	} else if (e.key === 'm') {
		randomizeStation();
	}
}

export default function setupHotkeys() {
	const keyUpHandler = on(document, 'keyup', handleKeyUp);

	const startHandlers = [on(document, 'mouseup', start), on(document, 'keyup', start)];

	function removeStartHandlers() {
		startHandlers.forEach((remove) => remove());
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
