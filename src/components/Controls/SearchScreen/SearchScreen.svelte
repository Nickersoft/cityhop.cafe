<script lang="ts">
	import { clickOutside } from '$lib/actions';

	import FullScreenOverlay from '../FullScreenOverlay.svelte';

	export let open: boolean;
	export let searchQuery: string;
	export let placeholder: string;

	function handleBGClick() {
		open = false;
	}

	$: if (!open) {
		searchQuery = '';
	}
</script>

<FullScreenOverlay bind:open>
	<div
		use:clickOutside={handleBGClick}
		class="mx-auto p-8 container w-full lg:gap-8 h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center"
	>
		<slot name="aside" />

		<div class="flex w-full flex-col flex-1 justify-center h-full items-center">
			<div class="searchbox">
				<iconify-icon class="icon" icon="mdi:search" />
				<!-- svelte-ignore a11y-autofocus -->
				<input
					on:keyup|stopPropagation
					bind:value={searchQuery}
					type="text"
					{placeholder}
					autofocus
				/>
			</div>

			<div class="w-full flex-grow relative" on:click={handleBGClick} on:keydown={handleBGClick}>
				<div class="flex absolute inset-0 overflow-y-scroll flex-col gap-4 p-8 w-fit flex-grow">
					<slot />
				</div>
			</div>

			<slot name="bottom" />
		</div>
	</div>
</FullScreenOverlay>

<style lang="postcss">
	.searchbox {
		@apply flex flex-row gap-4 justify-start items-center p-4 w-full text-2xl text-left pl-8 border-b border-white border-opacity-10 bg-transparent;

		input {
			@apply outline-none bg-transparent;
		}

		.icon {
			@apply opacity-50 text-3xl transition-opacity duration-150;
		}

		&:focus-within > .icon {
			@apply opacity-100;
		}
	}
</style>
