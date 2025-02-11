import { getContext } from 'svelte';

import type { OverlayContext } from '$ui/Overlay.svelte';

export function getOverlayContext() {
	return getContext<OverlayContext>('overlay');
}
