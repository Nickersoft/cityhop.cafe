<script lang="ts">
	import FullScreenOverlay from './Controls/FullScreenOverlay.svelte';

	interface Props {
		open?: boolean;
		children?: import('svelte').Snippet;
	}

	let { open = $bindable(true), children }: Props = $props();

	$effect(() => {
		if (open) {
			setTimeout(() => {
				open = false;
			}, 2000);
		}
	});
</script>

<FullScreenOverlay showClose={false} bind:open>
	{@render children?.()}
</FullScreenOverlay>
