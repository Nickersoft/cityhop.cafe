<script lang="ts">
	import { onMount } from 'svelte';

	import FullScreenOverlay from './Controls/FullScreenOverlay.svelte';

	export let open: boolean = true;

	$: {
		if (open) {
			setTimeout(() => {
				open = false;
			}, 2000);
		}
	}
</script>

<FullScreenOverlay showClose={false} bind:open>
	<slot />
</FullScreenOverlay>
