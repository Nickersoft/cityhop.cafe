<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	import Button from '$ui/Button.svelte';

	import { X } from '$icons';
	import { on } from 'svelte/events';

	interface Props {
		open: boolean;
		showClose?: boolean;
		children?: import('svelte').Snippet;
	}

	let { open = $bindable(), showClose = true, children }: Props = $props();

	function handleClose() {
		open = false;
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
</script>

{#if open}
	<div
		class="from-background/85 to-background/95 fixed inset-0 z-9999 bg-radial backdrop-blur-xs"
		transition:scale={{ start: 1.1, duration: 350 }}
	>
		{#if showClose}
			<Button
				onclick={handleClose}
				class="btn btn-square btn-link absolute top-4 right-4 text-3xl opacity-50 hover:opacity-100"
			>
				<X />
			</Button>
		{/if}
		{@render children?.()}
	</div>
{/if}
