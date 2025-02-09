import { on } from 'svelte/events';

let inactiveTimeout: number;

function handleMouseMove() {
	document.body.setAttribute('data-active', 'true');

	// if (inactiveTimeout) {
	// 	clearTimeout(inactiveTimeout);
	// }

	// inactiveTimeout = setTimeout(() => {
	// 	document.body.setAttribute('data-active', 'false');
	// }, 10000);
}

export default function setupHover() {
	document.body.setAttribute('data-active', 'true');
	const handlers = [
		on(document, 'mousemove', handleMouseMove),
		on(document, 'keydown', handleMouseMove)
	];

	return () => {
		handlers.forEach((remove) => remove());
		clearTimeout(inactiveTimeout);
	};
}
