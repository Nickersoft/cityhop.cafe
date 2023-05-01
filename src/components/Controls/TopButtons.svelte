<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleOpenSettings() {
		dispatch('openSettings');
	}
</script>

<div class="top-icons">
	<button
		class="btn btn-square btn-ghost"
		on:click={handleOpenSettings}
		on:keyup={handleOpenSettings}
	>
		<iconify-icon icon="mdi:settings" class="text-white text-2xl" />
	</button>
</div>

<style lang="postcss">
	.top-icons {
		@apply flex flex-row absolute top-4 right-4 opacity-0 transition-all duration-300;
	}
</style>
