<script lang="ts">
	import { getContext, untrack, type Component } from 'svelte';

	import Search from '$components/search-ui.svelte';

	import { Searcher, SearchResults } from '$lib/search.svelte';
	import { nowPlaying } from '$lib/state.svelte';
	import { ArrowLeft, Bicycle, Boat, Footprints, SteeringWheel, TrainSimple } from '$lib/icons';
	import { FilterGroup, Stack, Typography, Button, ScrollArea } from '$components/ui';
	import type { SearchResultItem } from '$lib/types';
	import { isContinent, isCountry, isSceneGroup } from '$lib/guards';

	import { enter, exit } from './transitions';
	import { FILTER_LIST } from './consts';

	import Item from './item.svelte';

	const totalScenes = getContext('totalScenes');
	const searcher = new Searcher('scenes');

	interface Props {
		onClose: () => void;
	}

	const { onClose }: Props = $props();

	// Transition direction
	let direction: Nullable<'forward' | 'backward'> = $state(null);

	function prefetch(item: SearchResultItem) {
		if (isCountry(item) || isSceneGroup(item)) {
			searcher.prefetch(`[${searcher.items.indexOf(item)}].scenes`);
			return;
		}

		if (isContinent(item)) {
			searcher.prefetch(`[${searcher.items.indexOf(item)}].countries`);
			return;
		}
	}

	function onClick(item: SearchResultItem) {
		direction = 'forward';

		const index = searcher.items.indexOf(item);

		if (isCountry(item) || isSceneGroup(item)) {
			searcher.pushPathComponent(`[${index}].scenes`);
			return;
		}

		if (isContinent(item)) {
			searcher.pushPathComponent(`[${index}].countries`);
			return;
		}

		nowPlaying.scene = item;

		onClose();
	}

	function onInputChange() {
		direction = null;
	}

	let activeFilters = $state<string[]>([]);

	$effect(() => {
		direction = null;
		untrack(() => searcher.clearPath());
		searcher.setTags(activeFilters);
	});
</script>

<div class="w-[95vw] max-w-4xl max-md:h-full md:aspect-[1.5]">
	<Search
		{...searcher.props}
		{onClose}
		{onInputChange}
		onSearch={searcher.search}
		inputPlaceholder={`Search over ${totalScenes}+ countries and cities worldwide`}
	>
		{#snippet leftButton()}
			<Button
				disabled={searcher.path.length === 0}
				size="icon"
				variant="ghost"
				onclick={() => {
					searcher.popPathComponent();
					direction = 'backward';
				}}
			>
				<ArrowLeft />
			</Button>
		{/snippet}

		{#snippet filters()}
			<FilterGroup bind:value={activeFilters} filters={FILTER_LIST} />
		{/snippet}

		{#snippet children(items)}
			{@const results = new SearchResults(items)}

			{@const {
				groups,
				scenes: { drive, walk, bike, boat, train }
			} = results}

			{#snippet section(scenes?: SearchResultItem[], title?: string, Icon?: Component)}
				{#if scenes && scenes.length > 0}
					{#if title}
						<Stack orientation="row" align="center" gap="sm" class="col-span-full border-b p-4">
							<Icon />
							<Typography variant="headline" size="sm">
								{title}
							</Typography>
						</Stack>
					{/if}
					{#each scenes as item}
						<Item onHover={prefetch} {item} onSelect={onClick} />
					{/each}
				{/if}
			{/snippet}

			<div class="relative size-full">
				{#key JSON.stringify(results.items)}
					<div in:enter={{ direction }} out:exit={{ direction }} class="absolute inset-0">
						<ScrollArea>
							<div
								class="grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(var(--size),1fr))] gap-2 p-2 [--size:200px] max-md:[--size:150px] md:gap-4 md:p-4"
							>
								{@render section(groups)}
								{@render section(drive, 'Drives', SteeringWheel)}
								{@render section(train, 'Train Rides', TrainSimple)}
								{@render section(walk, 'Walks', Footprints)}
								{@render section(bike, 'Bike Rides', Bicycle)}
								{@render section(boat, 'Boat Rides', Boat)}
							</div>
						</ScrollArea>
					</div>
				{/key}
			</div>
		{/snippet}
	</Search>
</div>
