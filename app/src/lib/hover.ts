import { ui } from '$lib/state.svelte';
import { on } from 'svelte/events';

let inactiveTimeout: NodeJS.Timeout;

function handleMouseMove() {
	ui.windowActive = true;

	if (inactiveTimeout) {
		clearTimeout(inactiveTimeout);
	}

	inactiveTimeout = setTimeout(() => {
		ui.windowActive = false;
	}, 10000);
}

export default function setupHover() {
	const handlers = [
		on(document, 'mousemove', handleMouseMove),
		on(document, 'keydown', handleMouseMove)
	];

	return () => {
		for (const remove of handlers) {
			remove();
		}

		clearTimeout(inactiveTimeout);
	};
}
