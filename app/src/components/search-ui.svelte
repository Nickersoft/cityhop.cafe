<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface SearchProps<T> {
		children?: Snippet<[T[]]>;
		items: T[];
		onInputChange?: (query: string) => void;
		onClose?: () => void;
		loading: boolean;
		inputPlaceholder?: string;
		onSearch: (query: string) => void;
		leftButton?: Snippet;
		filters?: Snippet;
	}
</script>

<script lang="ts" generics="T">
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	import { Search, X } from '$lib/icons';
	import { Button, Spinner, Input, Stack } from '$components/ui';

	const {
		leftButton,
		onSearch,
		onClose,
		loading,
		onInputChange,
		inputPlaceholder,
		items,
		children,
		filters
	}: SearchProps<T> = $props();

	let query = $state('');
	let showLoading = $state(false);
	let loadingTimeout: ReturnType<typeof setTimeout> | undefined;

	$effect(() => {
		const q = query.trim();
		onInputChange?.(q);
		onSearch(q);
	});

	$effect(() => {
		// Clear any existing timeout when loading state changes
		if (loadingTimeout) {
			clearTimeout(loadingTimeout);
		}

		if (loading) {
			// Only show loading spinner if loading takes longer than 300ms
			loadingTimeout = setTimeout(() => {
				showLoading = true;
			}, 300);
		} else {
			// Immediately hide loading spinner when loading is complete
			showLoading = false;
		}
	});

	// Cleanup any pending timeout on component destruction
	onDestroy(() => {
		if (loadingTimeout) {
			clearTimeout(loadingTimeout);
		}
	});

	function handleKeyUp(event: KeyboardEvent) {
		event.stopPropagation();
		if (event.target) {
			query = (event.target as HTMLInputElement).value;
		}
	}
</script>

<div class="flex size-full flex-col items-start justify-start">
	<header class="w-full border-b">
		<div class="grid w-full grid-cols-[2.25rem_auto_2.25rem] items-center gap-4 p-4">
			<div>
				{@render leftButton?.()}
			</div>

			<Input
				onkeyup={handleKeyUp}
				placeholder={inputPlaceholder}
				icon={Search}
				class="h-11 md:text-base [&_svg]:size-5"
				type="search"
			/>

			<Button size="icon" variant="ghost" onclick={onClose}>
				<X />
			</Button>
		</div>

		{#if filters}
			<div class="w-full border-b px-4 pb-4">
				{@render filters()}
			</div>
		{/if}
	</header>

	<div role="presentation" class="relative w-full flex-1">
		{#if showLoading}
			<div transition:fade class="absolute flex size-full items-center justify-center">
				<Spinner size="lg" />
			</div>
		{/if}
		<Stack orientation="column" class="absolute inset-0 w-full grow">
			{@render children?.(items)}
		</Stack>
	</div>
</div>
