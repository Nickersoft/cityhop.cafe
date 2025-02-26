<script lang="ts">
	interface Props {
		muted: boolean;
	}

	let { muted = $bindable() }: Props = $props();
</script>

<button
	onclick={() => (muted = !muted)}
	class="group flex h-5 w-8 cursor-pointer flex-row items-end justify-end gap-0.5"
	data-muted={muted}
>
	{#each Array.from({ length: 4 }).fill(0)}
		<span
			class="bar inline-block w-full rounded-full bg-gradient-to-b from-yellow-500 to-orange-600 group-data-[muted=true]:h-1/4! group-data-[muted=true]:[animation:none]! dark:bg-white dark:from-yellow-400 dark:to-orange-500"
		></span>
	{/each}
</button>

<style>
	.bar {
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
