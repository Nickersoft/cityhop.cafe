<script lang="ts">
	import { run, createBubbler, stopPropagation } from 'svelte/legacy';

	const bubble = createBubbler();
	import { clickOutside } from '$lib/actions';
	import { createEventDispatcher } from 'svelte';

	import FullScreenOverlay from '../FullScreenOverlay.svelte';
	import Overlay from '$components/ui/Overlay.svelte';
	import Button from '$components/ui/Button.svelte';
	import Input from '$components/ui/Input.svelte';

	const dispatch = createEventDispatcher();

	interface Props {
		open: boolean;
		searchQuery: string;
		placeholder: string;
		showBack?: boolean;
		onKeyUp?: (e: KeyboardEvent) => void;
		aside?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		bottom?: import('svelte').Snippet;
	}

	let {
		open = $bindable(),
		searchQuery = $bindable(),
		placeholder,
		showBack = false,
		onKeyUp,
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

<Overlay bind:open>
	<div
		use:clickOutside={handleBGClick}
		class="mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-start py-8 lg:flex-row lg:justify-center lg:gap-8"
	>
		<div class="flex h-full w-full flex-1 flex-col items-center justify-center">
			<div class="flex w-full flex-row items-center gap-4">
				<Button
					onclick={() => showBack && dispatch('back')}
					class:invisible={!showBack}
					class="btn btn-square btn-link text-3xl opacity-50 hover:opacity-100"
				>
					<iconify-icon icon="mdi:arrow-left"></iconify-icon>
				</Button>

				<button
					onclick={() => (open = false)}
					class="btn btn-square btn-link text-3xl opacity-50 hover:opacity-100"
				>
					<iconify-icon icon="mdi:close"></iconify-icon>
				</button>
			</div>

			<div
				role="presentation"
				class="relative w-full grow"
				onclick={handleBGClick}
				onkeydown={handleBGClick}
			>
				<div class="absolute inset-0 flex w-full grow flex-col gap-4 overflow-y-scroll px-12 py-4">
					{@render children?.()}
				</div>
			</div>

			{@render bottom?.()}
		</div>
	</div>
</Overlay>
