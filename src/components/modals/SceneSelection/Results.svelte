<script lang="ts">
	import Item from './Item.svelte';

	import { SearchResults } from '$lib';
	import type { Scene, SearchResultItem } from '$schema';

	import { enter, exit } from './transitions';

	interface Props {
		items: SearchResultItem[];
		onClick?: (item: SearchResultItem, index: number) => void;
		emoji?: string | undefined;
		direction?: 'forward' | 'backward' | null;
	}

	let { items, emoji = undefined, onClick, direction = null }: Props = $props();

	const results = $derived(new SearchResults(items));

	const handleClick = (item: SearchResultItem) => () => {
		onClick?.(item, results.items.indexOf(item));
	};
</script>

{#snippet section(title: string, scenes?: Scene[])}
	{#if scenes && scenes.length > 0}
		<div class="col-span-full border-b border-white/10 p-4 text-xl text-white/90">
			{title}
		</div>
		{#each scenes as item}
			<Item {emoji} {item} onclick={handleClick(item)} />
		{/each}
	{/if}
{/snippet}

<div class="relative size-full">
	{#key results.items}
		<div
			in:enter={{ direction }}
			out:exit={{ direction }}
			class="absolute inset-0 grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 overflow-auto px-12 pt-1 pb-12"
		>
			{#each results.groups as item}
				<Item {emoji} {item} onclick={handleClick(item)} />
			{/each}

			{@render section('🚗 Drives', results.scenes.drive)}
			{@render section('👣 Walks', results.scenes.walk)}
			{@render section('🚲 Bike Rides', results.scenes.bike)}
			{@render section('🚢 Boat Rides', results.scenes.boat)}
		</div>
	{/key}
</div>
