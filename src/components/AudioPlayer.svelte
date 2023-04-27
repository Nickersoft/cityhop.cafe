<script lang="ts">
	import { currentTrack } from '$lib/stores';
</script>

<div class="flex flex-col gap-0.5 justify-start items-start">
	<div class="flex opacity-80 flex-row items-center justify-end gap-2">
		<div class="equalizer">
			<span class="bar" />
			<span class="bar" />
			<span class="bar" />
			<span class="bar" />
		</div>

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

	.equalizer {
		@apply flex flex-row gap-[1px] justify-end items-end w-4 h-2;
	}

	.bar {
		@apply bg-white w-full inline-block;

		animation: equalize 1s 0s infinite;
		animation-fill-mode: both;
	}

	.bar:nth-child(1) {
		animation-delay: 0s;
	}

	.bar:nth-child(2) {
		animation-delay: 0.9s;
	}

	.bar:nth-child(3) {
		animation-delay: 1.2s;
	}

	.bar:nth-child(4) {
		animation-delay: 1.3s;
	}

	@keyframes equalize {
		0% {
			height: 50%;
		}

		50% {
			height: 100%;
		}

		100% {
			height: 50%;
		}
	}
</style>
