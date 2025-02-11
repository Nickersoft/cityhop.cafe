<script lang="ts" module>
	export interface OverlayContext {
		close: () => void;
	}
</script>

<script lang="ts">
	import { onMount, setContext, type Snippet } from 'svelte';
	import { on } from 'svelte/events';
	import { scale } from 'svelte/transition';

	import { portal } from '$actions/portal';

	interface Props {
		open: boolean;
		onOpenChange?: (open: boolean) => void;
		children?: Snippet;
	}

	let { onOpenChange, open = $bindable(), children }: Props = $props();

	function handleClose() {
		open = false;
		onOpenChange?.(open);
	}

	onMount(() => {
		const removeKeydownListener = on(window, 'keydown', (event: KeyboardEvent) => {
			if (event.key === 'Escape' && open) {
				handleClose();
			}
		});

		return () => {
			removeKeydownListener();
		};
	});

	setContext('overlay', { close: handleClose } satisfies OverlayContext);
</script>

{#if open}
	<div
		use:portal
		class="from-background/85 to-background/95 fixed inset-0 z-9999 size-full bg-radial backdrop-blur-xs"
		transition:scale={{ start: 1.1, duration: 350 }}
	>
		{@render children?.()}
	</div>
{/if}
