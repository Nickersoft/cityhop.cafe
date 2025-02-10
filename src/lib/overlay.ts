import { getContext } from 'svelte';

import type { OverlayContext } from '$ui/Overlay.svelte';

export function closeOverlay() {
	const ctx = getContext<OverlayContext>('overlay');
	ctx?.close();
}
