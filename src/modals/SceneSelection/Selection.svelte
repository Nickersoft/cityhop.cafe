<script lang="ts">
	import Overlay from '$ui/Overlay.svelte';
	import Search from '$fragments/Search.svelte';

	import { Searcher } from '$lib';

	import Results from './Results.svelte';
	import type { ResultItem } from './Item.svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	const searcher = new Searcher<ResultItem>('scenes');
</script>

<Overlay {open}>
	<Search {...searcher.props} onSearch={searcher.search}>
		{#snippet children(results)}
			<Results {results} />
		{/snippet}
	</Search>
</Overlay>
