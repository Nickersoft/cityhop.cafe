<script lang="ts">
	import { currentStation, preferences } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';

	import MuteButton from '../MuteButton.svelte';
	import Equalizer from './Equalizer.svelte';

	const dispatch = createEventDispatcher();

	function changeMusic() {
		dispatch('changeMusic');
	}

	$: shouldMarquee = $currentStation.name.length > 45;
</script>

<div
	class="flex flex-wrap flex-1 w-full lg:pl-8 pt-4 lg:pt-0 flex-row gap-2 justify-between items-center"
>
	<div class="flex w-full md:w-auto md:flex-grow flex-col gap-0.5 mr-4 justify-start items-start">
		<div class="flex text-white opacity-80 flex-row items-center justify-end gap-2">
			<Equalizer muted={$preferences.muteMusic} />

			<span class="glow">
				{#if $preferences.muteMusic}
					Music muted
				{:else}
					Now playing
				{/if}
			</span>

			<MuteButton class="text-base" bind:muted={$preferences.muteMusic} />

			<a
				href="https://youtube.com/watch?v={$currentStation.trackID}"
				target="_blank"
				rel="noreferrer"
				class="tooltip block translate-y-[3px] text-xl tooltip-top"
				data-tip="Listen on YouTube"
			>
				<iconify-icon icon="mdi:youtube" />
			</a>
		</div>

		{#if shouldMarquee}
			<div class="marquee glow">
				<span>
					{$currentStation.name}&nbsp;&nbsp;{$currentStation.name}
				</span>
			</div>
		{:else}
			<span class="text-lg glow whitespace-nowrap text-ellipsis overflow-hidden w-full md:w-auto">
				{$currentStation.name}
			</span>
		{/if}
	</div>

	<button on:click={changeMusic} class="flex-shrink-0 label"> Change Music </button>
</div>

<style lang="postcss">
	.marquee {
		@apply text-lg overflow-hidden w-full relative h-8;

		span {
			@apply absolute block will-change-transform whitespace-nowrap;
			animation: marquee 60s linear infinite;
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
