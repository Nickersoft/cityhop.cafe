import { fly } from 'svelte/transition';

type Args = { direction: 'forward' | 'backward' | null };

export function enter(node: HTMLElement, { direction }: Args) {
	return direction
		? fly(node, { x: direction === 'forward' ? 50 : -50 })
		: fly(node, { y: 10, duration: 500 });
}

export function exit(node: HTMLElement, { direction }: Args) {
	return direction
		? fly(node, { x: direction === 'forward' ? -50 : 50 })
		: fly(node, { y: 10, duration: 500 });
}
