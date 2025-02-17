<script lang="ts">
	interface Props {
		muted: boolean;
	}

	let { muted }: Props = $props();
</script>

<div class="group flex h-5 w-8 flex-row items-end justify-end gap-0.5" data-muted={muted}>
	{#each Array.from({ length: 4 }).fill(0)}
		<span
			class="bar inline-block w-full bg-white group-data-[muted=true]:h-1/4! group-data-[muted=true]:[animation:none]!"
		></span>
	{/each}
</div>

<style>
	.bar {
		animation: equalize 1s 0s infinite;
		animation-fill-mode: both;
	}

	.bar:nth-child(1) {
		animation-delay: 0s;
		opacity: 1;
	}

	.bar:nth-child(2) {
		animation-delay: 0.9s;
		opacity: 0.6;
	}

	.bar:nth-child(3) {
		animation-delay: 1.2s;
		opacity: 0.8;
	}

	.bar:nth-child(4) {
		animation-delay: 1.3s;
		opacity: 0.7;
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
