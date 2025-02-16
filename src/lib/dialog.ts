import { getContext } from 'svelte';

import type { DialogContext } from '$components/ui/Dialog.svelte';

export function getDialogContext() {
	return getContext<DialogContext>('dialog');
}
