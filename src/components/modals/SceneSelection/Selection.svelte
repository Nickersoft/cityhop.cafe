<script lang="ts">
	import Overlay from '$ui/Overlay.svelte';
	import Search from '$components/SearchUI.svelte';

	import { Searcher } from '$lib';

	import { nowPlaying } from '$state';
	import { isContinent, isCountry, isSceneGroup, type SearchResultItem } from '$schema';

	import Results from './Results.svelte';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	const searcher = new Searcher('scenes');

	// Transition direction
	let direction: Nullable<'forward' | 'backward'> = $state(null);

	function onClick(item: SearchResultItem, index: number) {
		direction = 'forward';

		if (isCountry(item) || isSceneGroup(item)) {
			searcher.path.push(`[${index}].scenes`);
			return;
		}

		if (isContinent(item)) {
			searcher.path.push(`[${index}].countries`);
			return;
		}

		nowPlaying.scene = item;
		open = false;
	}

	function onInputChange(query: string) {
		direction = null;
	}
</script>

<Overlay {open}>
	<Search
		{...searcher.props}
		{onInputChange}
		onSearch={searcher.search}
		inputPlaceholder="Search over 200+ countries and cities worldwide"
	>
		{#snippet children(items)}
			<Results {items} {onClick} {direction} />
		{/snippet}
	</Search>
</Overlay>
