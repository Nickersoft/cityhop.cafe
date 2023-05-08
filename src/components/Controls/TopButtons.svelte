<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleOpenSettings() {
		dispatch('openSettings');
	}

	function handleOpenAbout() {
		dispatch('openAbout');
	}
</script>

<div class="top-icons">
	<button on:click={handleOpenSettings} on:keyup={handleOpenSettings}>
		<iconify-icon icon="mdi:settings" />
	</button>
	<button on:click={handleOpenAbout} on:keyup={handleOpenAbout}>
		<iconify-icon icon="mdi:about" />
	</button>
</div>

<style lang="postcss">
	.top-icons {
		@apply flex flex-row absolute top-4 right-4 gap-4 opacity-0 transition-all duration-300 z-50;

		button {
			@apply btn btn-square btn-link opacity-50 hover:opacity-100;

			iconify-icon {
				@apply text-white text-2xl;
			}
		}
	}
</style>
