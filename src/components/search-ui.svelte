<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface SearchProps<T> {
		children?: Snippet<[T[]]>;
		items: T[];
		filterTags?: string[];
		onInputChange?: (query: string) => void;
		onClose?: () => void;
		loading: boolean;
		inputPlaceholder?: string;
		onSearch: (query: string) => void;
		leftButton?: Snippet;
	}
</script>

<script lang="ts" generics="T">
	import { Search, X } from '$lib/icons';

	import { Button, Input, Stack } from '$components/ui';

	const {
		leftButton,
		onSearch,
		onClose,
		loading,
		onInputChange,
		inputPlaceholder,
		items,
		children
	}: SearchProps<T> = $props();

	let query = $state('');

	$effect(() => {
		const q = query.trim();
		onInputChange?.(q);
		onSearch(q);
	});
</script>

<div class="flex size-full flex-col items-start justify-start">
	<header class="grid w-full grid-cols-[2.25rem_auto_2.25rem] items-center gap-4 border-b p-4">
		<div>
			{@render leftButton?.()}
		</div>

		<Input
			bind:value={query}
			placeholder={inputPlaceholder}
			icon={Search}
			class="h-11 md:text-base [&_svg]:size-5"
			type="search"
		/>

		<Button size="icon" variant="ghost" onclick={onClose}>
			<X />
		</Button>
	</header>

	<div role="presentation" class="relative w-full flex-1">
		<Stack orientation="column" class="absolute inset-0 w-full grow">
			{@render children?.(items)}
		</Stack>
	</div>
</div>
