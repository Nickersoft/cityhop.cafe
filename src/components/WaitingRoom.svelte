<script>
	import { fade, fly, scale } from 'svelte/transition';

	import { IS_CHRISTMAS, IS_HALLOWEEN } from '$consts';

	import { ui } from '$lib/state.svelte';

	import ProgressBar from '$ui/ProgressBar.svelte';
</script>

{#if !ui.isPlaying}
	<div
		out:fade={{ duration: 2000 }}
		class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black text-white"
	>
		{#key ui.hasStarted}
			<div
				out:scale|local={{ start: 0.95, duration: 800 }}
				in:fly|local={{ y: 10, duration: 800, delay: 100 }}
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
			>
				{#if ui.hasStarted}
					{#if IS_HALLOWEEN}
						Happy Halloween...
					{:else if IS_CHRISTMAS}
						Merry Christmas!
					{:else}
						Let's go...
					{/if}

					<ProgressBar />
				{:else}
					Press any key or click anywhere to begin
				{/if}
			</div>
		{/key}
	</div>
{/if}
