<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import Rain from '$icons/Rain.svelte';
	import Snow from '$icons/Snow.svelte';

	import type { BackgroundWithCountry } from '$lib/types';
	import tracks from '$lib/tracks';
	import Equalizer from '$components/Equalizer.svelte';

	export let background: BackgroundWithCountry;

	const dispatch = createEventDispatcher();

	function handleSceneSelect() {
		dispatch('select', background);
	}
</script>

<li on:click={handleSceneSelect} on:keyup={handleSceneSelect} class="list-item">
	<div class="flex flex-row justify-start items-center gap-2">
		{background.name}

		{#if background.tags?.includes('rain')}
			<Rain width={22} height={22} />
		{/if}

		{#if background.tags?.includes('snow')}
			<Snow width={22} height={22} />
		{/if}
	</div>
</li>

<style lang="postcss">
	.list-item {
		@apply hover:text-yellow-500 transform-gpu transition-all duration-150 text-2xl px-4 py-1;
		@apply cursor-pointer relative;
		@apply p-4 w-full text-left active:opacity-50;
		@apply flex flex-row gap-2 justify-between items-start;

		&:hover:before {
			@apply -left-2 opacity-100;
		}

		&:before {
			@apply w-0 h-0 absolute -left-4 top-1/2 -translate-y-1/2 transition-all duration-150 opacity-0;

			border-style: solid;
			border-width: 6px 0 6px 10.4px;
			border-color: transparent transparent transparent theme('colors.yellow.500');

			content: '';
		}
	}
</style>
