<script lang="ts">
	import type { Component } from 'svelte';

	import Search from '$components/SearchUI.svelte';

	import { Searcher, SearchResults } from '$lib';
	import { nowPlaying } from '$state';
	import { SteeringWheel } from '$icons';
	import { isContinent, isCountry, isSceneGroup, type Scene, type SearchResultItem } from '$schema';

	import Overlay from '$ui/Overlay.svelte';

	import { enter, exit } from './transitions';

	import Item from './Item.svelte';
	import Stack from '$components/ui/Stack.svelte';
	import Typography from '$components/ui/Typography.svelte';

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

	function onInputChange() {
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
			{@const results = new SearchResults(items)}

			{@const {
				groups,
				scenes: { drive, walk, bike, boat }
			} = results}

			{#snippet section(scenes?: SearchResultItem[], title?: string, Icon?: Component)}
				{#if scenes && scenes.length > 0}
					{#if title}
						<Stack
							orientation="row"
							align="center"
							gap="sm"
							class="col-span-full border-b border-white/10 p-4"
						>
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
				{#key results.items}
					<div
						in:enter={{ direction }}
						out:exit={{ direction }}
						class="absolute inset-0 grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(275px,1fr))] gap-6 overflow-auto px-12 pt-1 pb-12"
					>
						{@render section(groups)}
						{@render section(drive, 'Drives', SteeringWheel)}
						{@render section(walk, '👣 Walks')}
						{@render section(bike, '🚲 Bike Rides')}
						{@render section(boat, '🚢 Boat Rides')}
					</div>
				{/key}
			</div>
		{/snippet}
	</Search>
</Overlay>
