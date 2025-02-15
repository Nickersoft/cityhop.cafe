<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface SearchProps<T> {
		children?: Snippet<[T[]]>;
		items: T[];
		onInputChange?: (query: string) => void;
		loading: boolean;
		inputPlaceholder?: string;
		onSearch: (query: string) => void;
		leftButton?: Snippet;
	}
</script>

<script lang="ts" generics="T">
	import { Search, X } from '$icons';
	import { getOverlayContext } from '$lib';

	import Button from '$ui/Button.svelte';
	import Input from '$ui/Input.svelte';

	import { clickOutside } from '$actions/click-outside';

	import Stack from '$components/ui/Stack.svelte';

	const {
		leftButton,
		onSearch,
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

	const overlay = getOverlayContext();

	function closeOverlay() {
		overlay?.close();
	}
</script>

<div
	use:clickOutside={closeOverlay}
	class="mx-auto flex size-full max-w-7xl flex-col items-start justify-start"
>
	<header class="grid w-full grid-cols-[1.5rem_1fr_1.5rem] items-center gap-4 py-8">
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

		<Button size="icon" variant="ghost" onclick={closeOverlay}>
			<X />
		</Button>
	</header>

	<div
		onclick={closeOverlay}
		onkeydown={closeOverlay}
		role="presentation"
		class="relative w-full flex-1"
	>
		<Stack orientation="column" class="absolute inset-0 w-full grow">
			{@render children?.(items)}
		</Stack>
	</div>
</div>
