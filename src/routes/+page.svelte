<script lang="ts">
	import { draw } from 'radash';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

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
		{#if started}
			Let's go...
		{:else}
			Press any key to begin
		{/if}
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
