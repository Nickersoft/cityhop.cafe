<script lang="ts">
	import UI from '$components/UI.svelte';
	import ChangeScene from '$components/ChangeScene.svelte';
	import backgrounds from '$lib/backgrounds';
	import tracks from '$lib/tracks';
	import type { BackgroundWithCountry, Country } from '$lib/types';

	import { draw } from 'radash';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const defaultAudio = 'jfKfPfyJRdk';

	let started = false;
	let playing = false;

	let randomBackground = draw(backgrounds)!;

	$: ({ videoID, offset: videoOffset, suggestedTrack, name, country } = randomBackground);

	let isChangeSceneShowing = false;

	onMount(() => {
		function start() {
			started = true;
		}

		document.addEventListener('keyup', start);

		return () => {
			document.removeEventListener('keyup', start);
		};
	});

	function showChangeScene() {
		isChangeSceneShowing = true;
	}

	function handleSceneChange(event: CustomEvent & { detail: BackgroundWithCountry }) {
		randomBackground = event.detail;
		isChangeSceneShowing = false;
	}
</script>

<ChangeScene on:select={handleSceneChange} bind:open={isChangeSceneShowing} />

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

<div class="fixed z-30 inset-0 flex flex-col">
	<div
		class="flex flex-row justify-start items-start bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-clear p-4 h-40"
	>
		You are currently walking in:&nbsp;<span
			title="Click to change scene"
			on:click={showChangeScene}
			on:keyup={showChangeScene}
			class="border-b border-dashed border-white inline-block font-medium cursor-pointer"
		>
			{name}, {country}
		</span>
	</div>
</div>

{#if started && videoID}
	<UI
		bind:playing
		{videoOffset}
		{videoID}
		audioID={suggestedTrack?.trackID ?? tracks.popular[0].trackID}
	/>
{/if}
