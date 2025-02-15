<script lang="ts">
	import Overlay from '$ui/Overlay.svelte';
	import Search from '$components/SearchUI.svelte';

	import { getOverlayContext, Searcher } from '$lib';

	import { nowPlaying } from '$state';
	import { isContinent, isSceneGroup, type SearchResultItem } from '$schema';

	import Results from './Results.svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	const searcher = new Searcher('scenes');
	const overlay = getOverlayContext();

	let path: string[] = $state([]);
	let transitionDirection: 'forward' | 'backward' = $state('forward');
	let transitionsEnabled = $state(true);

	function onClick(item: SearchResultItem, index: number) {
		transitionDirection = 'forward';

		if (isSceneGroup(item)) {
			path = [...path, `[${index}].scenes`];
			return;
		}

		if (isContinent(item)) {
			path = [...path, `[${index}].countries`];
			return;
		}

		nowPlaying.scene = item;
		overlay.close();
	}

	function onInputChange(query: string) {
		transitionsEnabled = query.length === 0;
	}
</script>

<Overlay {open}>
	<Search
		{...searcher.props}
		{onInputChange}
		onSearch={searcher.search}
		inputPlaceholder="Search over 200+ countries and cities worldwide"
	>
		{#snippet children(results)}
			<Results {results} {onClick} />
		{/snippet}
	</Search>
</Overlay>
