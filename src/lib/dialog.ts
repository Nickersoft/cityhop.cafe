import { getContext } from 'svelte';

import type { DialogContext } from '$components/ui/dialog.svelte';

export function getDialogContext() {
	return getContext<DialogContext>('dialog');
}
