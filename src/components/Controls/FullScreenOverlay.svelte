<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

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
		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === 'Escape' && open) {
				handleClose();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

{#if open}
	<div class="bg" transition:scale={{ start: 1.1, duration: 350 }}>
		{#if showClose}
			<button
				onclick={handleClose}
				class="text-3xl btn btn-square btn-link opacity-50 hover:opacity-100 absolute top-4 right-4"
			>
				<iconify-icon icon="mdi:close"></iconify-icon>
			</button>
		{/if}
		{@render children?.()}
	</div>
{/if}

<style lang="postcss">
	.bg {
		@apply fixed z-9999 inset-0 backdrop-blur-xs;
		background-image: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 100%);
	}
</style>
