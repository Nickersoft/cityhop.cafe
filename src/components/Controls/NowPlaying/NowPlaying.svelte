<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { currentTrack, preferences } from '$lib/stores';

	import Equalizer from './Equalizer.svelte';

	const dispatch = createEventDispatcher();

	function changeMusic() {
		dispatch('changeMusic');
	}

	$: shouldMarquee = $currentTrack.name.length > 45;
</script>

<div class="flex flex-wrap flex-1 w-full pl-8 flex-row gap-2 justify-between items-center">
	<div
		class:w-full={!shouldMarquee}
		class:md:w-auto={!shouldMarquee}
		class="flex flex-grow flex-col gap-0.5 justify-start items-start"
	>
		<div class="flex opacity-80 flex-row items-center justify-end gap-2">
			<Equalizer muted={$preferences.muteMusic} />

			<span>
				{#if $preferences.muteMusic}
					Music muted
				{:else}
					Now playing
				{/if}
			</span>
		</div>

		{#if shouldMarquee}
			<div class="marquee">
				<span>
					{$currentTrack.name}&nbsp;&nbsp;{$currentTrack.name}&nbsp;&nbsp;{$currentTrack.name}
				</span>
			</div>
		{:else}
			<span class="text-lg whitespace-nowrap text-ellipsis overflow-hidden w-full md:w-auto">
				{$currentTrack.name}
			</span>
		{/if}
	</div>

	<button on:click={changeMusic} on:keyup={changeMusic} class="flex-shrink-0 label">
		Change Music
	</button>
</div>

<style lang="postcss">
	.marquee {
		@apply text-lg overflow-hidden w-full relative h-6;

		span {
			@apply absolute block will-change-transform whitespace-nowrap;
			animation: marquee 30s linear infinite;
			animation-delay: 4s;
		}

		@keyframes marquee {
			0% {
				transform: translateX(0);
			}
			90% {
				transform: translateX(-50%);
			}
			100% {
				transform: translateX(-50%);
			}
		}
	}
</style>
