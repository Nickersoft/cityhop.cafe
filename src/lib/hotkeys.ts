import { on } from 'svelte/events';

import { ui } from '$lib/state.svelte';
import { invalidate } from '$app/navigation';

function handleKeyUp(e: KeyboardEvent) {
	if (e.key === 'g') {
		Promise.all([invalidate('app:scene'), invalidate('app:station')]);
	} else if (e.key === 'k') {
		invalidate('app:scene');
	} else if (e.key === 'm') {
		invalidate('app:station');
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
