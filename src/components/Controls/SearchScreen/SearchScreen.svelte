<script lang="ts">
	import { clickOutside } from '$lib/actions';
	import { createEventDispatcher } from 'svelte';

	import FullScreenOverlay from '../FullScreenOverlay.svelte';

	const dispatch = createEventDispatcher();

	export let open: boolean;
	export let searchQuery: string;
	export let placeholder: string;
	export let showBack: boolean = false;

	function handleBGClick() {
		open = false;
	}

	$: if (!open) {
		searchQuery = '';
	}
</script>

<FullScreenOverlay showClose={false} bind:open>
	<div
		use:clickOutside={handleBGClick}
		class="mx-auto py-8 max-w-7xl w-full lg:gap-8 h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center"
	>
		<slot name="aside" />

		<div class="flex w-full flex-col flex-1 justify-center h-full items-center">
			<div class="flex flex-row w-full items-center gap-4">
				<button
					on:click={() => showBack && dispatch('back')}
					class:invisible={!showBack}
					class="text-3xl btn btn-square btn-link opacity-50 hover:opacity-100"
				>
					<iconify-icon icon="mdi:arrow-left" />
				</button>
				<div
					class="flex flex-grow flex-row gap-4 justify-start items-center p-4 w-full text-xl text-left bg-white/10 rounded-2xl"
				>
					<iconify-icon
						class="opacity-50 text-3xl transition-opacity duration-150"
						icon="mdi:search"
					/>

					<input
						on:keyup|stopPropagation
						bind:value={searchQuery}
						type="text"
						class="w-full outline-none bg-transparent"
						{placeholder}
					/>
				</div>

				<button
					on:click={() => (open = false)}
					class="text-3xl btn btn-square btn-link opacity-50 hover:opacity-100"
				>
					<iconify-icon icon="mdi:close" />
				</button>
			</div>

			<div
				role="presentation"
				class="w-full flex-grow relative"
				on:click={handleBGClick}
				on:keydown={handleBGClick}
			>
				<div
					class="flex absolute inset-0 overflow-y-scroll flex-col gap-4 px-12 py-4 w-full flex-grow"
				>
					<slot />
				</div>
			</div>

			<slot name="bottom" />
		</div>
	</div>
</FullScreenOverlay>