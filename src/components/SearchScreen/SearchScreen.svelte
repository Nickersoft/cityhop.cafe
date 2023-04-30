<script lang="ts">
	import { scale } from 'svelte/transition';

	import { clickOutside } from '$lib/actions';

	export let open: boolean;
	export let searchQuery: string;
	export let placeholder: string;

	function handleBGClick() {
		open = false;
	}
</script>

{#if open}
	<div class="bg" transition:scale={{ start: 1.1, duration: 350 }}>
		<div
			use:clickOutside={handleBGClick}
			class="mx-auto p-8 container gap-8 h-full flex flex-row justify-center items-center"
		>
			<slot name="aside" />

			<div class="flex flex-col flex-1 justify-center h-full items-center">
				<div class="searchbox">
					<iconify-icon class="icon" icon="mdi:search" />
					<input bind:value={searchQuery} type="text" {placeholder} />
				</div>

				<div class="flex overflow-y-scroll flex-col gap-4 p-8 w-full flex-grow">
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}

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

	.bg {
		@apply fixed z-50 inset-0 backdrop-blur-sm;
		background-image: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 100%);
	}
</style>
