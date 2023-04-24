<script lang="ts">
	import UI from '$lib/UI.svelte';
	import backgrounds, { Country } from '$lib/backgrounds';
	import { draw } from 'radash';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const defaultAudio = 'jfKfPfyJRdk';

	let started = false;
	let playing = false;

	const randomCountry = draw(Object.keys(backgrounds)) as Country;
	const randomVideo = draw(backgrounds[randomCountry] ?? []);

	let videoID = randomVideo?.videoId;
	let videoOffset = randomVideo?.offset ?? 0;
	let audioID = randomVideo?.suggestedTrack ?? defaultAudio;
	let name = randomVideo?.name;
	let country = randomCountry;

	onMount(() => {
		function start() {
			started = true;
		}

		document.addEventListener('keyup', start);

		return () => {
			document.removeEventListener('keyup', start);
		};
	});
</script>

{#if !playing}
	<div
		out:fade={{ duration: 2000 }}
		class="flex justify-center items-center w-full h-full text-white fixed inset-0 z-50 bg-black"
	>
		{#if started}
			Let's go... {videoID}
		{:else}
			Press any key to begin
		{/if}
	</div>
{/if}

<div class="fixed z-30 inset-0 flex flex-col">
	<div class="flex flex-row bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-clear p-4 h-40">
		You are currently walking in:&nbsp;<span class="font-medium">
			{name}, {country}
		</span>
	</div>
</div>

{#if started && videoID && audioID}
	<UI bind:playing {videoOffset} {videoID} {audioID} />
{/if}
