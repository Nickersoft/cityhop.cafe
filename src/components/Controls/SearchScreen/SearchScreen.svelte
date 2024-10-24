<script lang="ts">
	import { run, createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	import { clickOutside } from '$lib/actions';
	import { createEventDispatcher } from 'svelte';

	import FullScreenOverlay from '../FullScreenOverlay.svelte';

	const dispatch = createEventDispatcher();

	interface Props {
		open: boolean;
		searchQuery: string;
		placeholder: string;
		showBack?: boolean;
		aside?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		bottom?: import('svelte').Snippet;
	}

	let {
		open = $bindable(),
		searchQuery = $bindable(),
		placeholder,
		showBack = false,
		aside,
		children,
		bottom
	}: Props = $props();

	function handleBGClick() {
		open = false;
	}

	run(() => {
		if (!open) {
			searchQuery = '';
		}
	});
</script>

<FullScreenOverlay showClose={false} bind:open>
	<div
		use:clickOutside={handleBGClick}
		class="mx-auto py-8 max-w-7xl w-full lg:gap-8 h-full flex flex-col lg:flex-row justify-start lg:justify-center items-center"
	>
		{@render aside?.()}

		<div class="flex w-full flex-col flex-1 justify-center h-full items-center">
			<div class="flex flex-row w-full items-center gap-4">
				<button
					onclick={() => showBack && dispatch('back')}
					class:invisible={!showBack}
					class="text-3xl btn btn-square btn-link opacity-50 hover:opacity-100"
				>
					<iconify-icon icon="mdi:arrow-left"></iconify-icon>
				</button>
				<div
					class="flex flex-grow flex-row gap-4 justify-start items-center p-4 w-full text-xl text-left bg-white/10 rounded-2xl"
				>
					<iconify-icon
						class="opacity-50 text-3xl transition-opacity duration-150"
						icon="mdi:search"
					></iconify-icon>

					<input
						onkeyup={stopPropagation(bubble('keyup'))}
						bind:value={searchQuery}
						type="text"
						class="w-full outline-none bg-transparent"
						{placeholder}
					/>
				</div>

				<button
					onclick={() => (open = false)}
					class="text-3xl btn btn-square btn-link opacity-50 hover:opacity-100"
				>
					<iconify-icon icon="mdi:close"></iconify-icon>
				</button>
			</div>

			<div
				role="presentation"
				class="w-full flex-grow relative"
				onclick={handleBGClick}
				onkeydown={handleBGClick}
			>
				<div
					class="flex absolute inset-0 overflow-y-scroll flex-col gap-4 px-12 py-4 w-full flex-grow"
				>
					{@render children?.()}
				</div>
			</div>

			{@render bottom?.()}
		</div>
	</div>
</FullScreenOverlay>