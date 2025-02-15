<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export interface SearchProps<T> {
		children?: Snippet<[T[]]>;
		items: T[];
		loading: boolean;
		onSearch: (query: string) => void;
		leftButton?: Snippet;
	}
</script>

<script lang="ts" generics="T">
	import { Search, X } from '$icons';
	import { getOverlayContext, Searcher } from '$lib';

	import Button from '$ui/Button.svelte';
	import Input from '$ui/Input.svelte';

	import { clickOutside } from '$actions/click-outside';

	import Stack from '$components/ui/Stack.svelte';

	const { leftButton, onSearch, loading, items, children }: SearchProps<T> = $props();

	let query = $state('');

	$effect(() => {
		console.log('called', query);
		onSearch(query);
	});

	const overlay = getOverlayContext();

	function closeOverlay() {
		overlay?.close();
	}
</script>

<div
	use:clickOutside={closeOverlay}
	class="mx-auto flex size-full max-w-7xl flex-col items-start justify-start py-8"
>
	<header class="grid w-full grid-cols-[1.5rem_1fr_1.5rem] items-center gap-4">
		<div>
			{@render leftButton?.()}
		</div>

		<Input bind:value={query} icon={Search} class="h-11 md:text-lg [&_svg]:size-5" type="search" />

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
		<Stack orientation="column" class="absolute inset-0 w-full grow overflow-y-scroll px-12 py-4">
			{@render children?.(items)}
		</Stack>
	</div>
</div>
