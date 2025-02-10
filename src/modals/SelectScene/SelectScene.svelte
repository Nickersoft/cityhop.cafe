<script lang="ts">
	import { debounce } from '$lib/utils';

	import { page } from '$app/state';

	import Overlay from '$ui/Overlay.svelte';

	import { SearchContainer, SearchHeader, SearchInput, SearchResults } from '$components/search';

	import Results from './Results.svelte';
	import { type ResultItem } from './Item.svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	let searchQuery = $state('');
	let results = $state<ResultItem[]>([]);

	function handleBack() {}

	const searchScenes = debounce({ delay: 1000 }, async (query) => {
		const url = new URL('/api/scenes', page.url.origin);

		if (query) {
			url.searchParams.set('q', query);
		}

		results = await fetch(url).then((res) => res.json());
	});

	$effect(() => {
		searchScenes(searchQuery);
	});
</script>

<Overlay {open}>
	<SearchContainer>
		<SearchHeader onBack={handleBack} allowBack>
			<SearchInput bind:value={searchQuery} />
		</SearchHeader>
		<SearchResults>
			<Results {results} />
		</SearchResults>
	</SearchContainer>
</Overlay>
