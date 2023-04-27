<script lang="ts">
	import { currentTrack } from '$lib/stores';
	import Equalizer from './Equalizer.svelte';
</script>

<div class="flex flex-col gap-0.5 justify-start items-start">
	<div class="flex opacity-80 flex-row items-center justify-end gap-2">
		<Equalizer />
		<span>Now playing</span>
	</div>

	{#if $currentTrack.name.length < 45}
		<span class="text-lg">{$currentTrack.name}</span>
	{:else}
		<div class="marquee">
			<span>{$currentTrack.name}&nbsp;&nbsp;{$currentTrack.name}</span>
		</div>
	{/if}
</div>

<style lang="postcss">
	.marquee {
		@apply text-lg max-w-sm overflow-hidden relative w-80 h-6 border-x border-white border-opacity-10;

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
