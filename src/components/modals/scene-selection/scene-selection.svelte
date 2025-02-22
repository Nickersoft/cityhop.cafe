<script lang="ts">
	import type { Component } from 'svelte';

	import Search from '$components/search-ui.svelte';

	import { Searcher, SearchResults } from '$lib';
	import { nowPlaying } from '$state';
	import { ArrowLeft, SteeringWheel } from '$icons';
	import { isContinent, isCountry, isSceneGroup, type SearchResultItem } from '$schema';
	import { Stack, Typography, Button, ScrollArea } from '$components/ui';

	import { enter, exit } from './transitions';

	import Item from './item.svelte';

	const searcher = new Searcher('scenes');

	interface Props {
		onClose: () => void;
	}

	const { onClose }: Props = $props();

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
		onClose();
	}

	function onInputChange() {
		direction = null;
	}
</script>

<div class="aspect-[1.3] w-[max(60vw,800px)] max-w-7xl">
	<Search
		{...searcher.props}
		{onInputChange}
		onSearch={searcher.search}
		inputPlaceholder="Search over 200+ countries and cities worldwide"
	>
		{#snippet leftButton()}
			<Button
				disabled={searcher.path.length === 0}
				size="icon"
				variant="ghost"
				onclick={() => {
					searcher.path.pop();
					direction = 'backward';
				}}
			>
				<ArrowLeft />
			</Button>
		{/snippet}

		{#snippet children(items)}
			{@const results = new SearchResults(items)}

			{@const {
				groups,
				scenes: { drive, walk, bike, boat }
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
						<Item {item} onclick={() => onClick?.(item, items.indexOf(item))} />
					{/each}
				{/if}
			{/snippet}

			<div class="relative size-full">
				{#key JSON.stringify(results.items)}
					<div in:enter={{ direction }} out:exit={{ direction }} class="absolute inset-0">
						<ScrollArea>
							<div
								class="grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4"
							>
								{@render section(groups)}
								{@render section(drive, 'Drives', SteeringWheel)}
								{@render section(walk, '👣 Walks')}
								{@render section(bike, '🚲 Bike Rides')}
								{@render section(boat, '🚢 Boat Rides')}
							</div>
						</ScrollArea>
					</div>
				{/key}
			</div>
		{/snippet}
	</Search>
</div>
