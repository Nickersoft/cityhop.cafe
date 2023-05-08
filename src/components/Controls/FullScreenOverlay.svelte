<script lang="ts">
	import { scale } from 'svelte/transition';

	export let open: boolean;

	function handleClose() {
		open = false;
	}
</script>

{#if open}
	<div class="bg" transition:scale={{ start: 1.1, duration: 350 }}>
		<button
			on:click={handleClose}
			on:keyup={handleClose}
			class="text-3xl btn btn-square btn-link opacity-50 hover:opacity-100 absolute top-4 right-4"
		>
			<iconify-icon icon="mdi:close" />
		</button>
		<slot />
	</div>
{/if}

<style lang="postcss">
	.bg {
		@apply fixed z-50 inset-0 backdrop-blur-sm;
		background-image: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 100%);
	}
</style>
