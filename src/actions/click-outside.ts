import { on } from 'svelte/events';

export function clickOutside(node: Element, cb: () => void) {
	const destroy = on(document, 'click', (event: Event) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			cb();
		}
	});

	return { destroy };
}
