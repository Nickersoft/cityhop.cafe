<script lang="ts">
	import { draw } from 'radash';
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	import UI from '$components/UI.svelte';

	import backgrounds from '$lib/backgrounds';
	import tracks from '$lib/tracks';

	import { currentScene, currentTrack } from '$lib/stores';

	let started = false;
	let playing = false;

	onMount(() => {
		function start() {
			started = true;
		}

		document.addEventListener('keyup', start);

		return () => {
			document.removeEventListener('keyup', start);
		};
	});

	onMount(() => {
		$currentScene = draw(backgrounds)!;
		$currentTrack = $currentScene?.suggestedTrack ?? tracks.default;
	});
</script>

{#if !playing}
	<div
		out:fade={{ duration: 2000 }}
		class="flex justify-center items-center w-full h-full text-white fixed inset-0 z-50 bg-black"
	>
		{#key started}
			<div
				out:scale|local={{ start: 0.95, duration: 800 }}
				in:fly|local={{ y: 10, duration: 800, delay: 100 }}
				class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
			>
				{#if started}
					Let's go...
				{:else}
					Press any key or click anywhere to begin
				{/if}
			</div>
		{/key}
	</div>
{/if}

{#if started && $currentScene && $currentTrack}
	<UI
		bind:playing
		videoID={$currentScene.videoID}
		videoOffset={$currentScene.offset}
		audioID={$currentTrack.trackID}
	/>
{/if}
