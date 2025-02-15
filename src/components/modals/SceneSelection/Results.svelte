<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	import type { SceneTypes } from '$enums';
	import type { Scene, SearchResultItem } from '$types';
	import { alphabetical, fork, group, mapValues } from '$lib/utils';

	import Section from './Section.svelte';
	import Item from './Item.svelte';

	interface Props {
		results: SearchResultItem[];
		onClick?: (item: SearchResultItem, index: number) => void;
		emoji?: string | undefined;
		transitionsEnabled?: boolean;
		direction?: 'forward' | 'backward';
	}

	let {
		results,
		emoji = undefined,
		onClick,
		transitionsEnabled = false,
		direction = 'forward'
	}: Props = $props();

	let partition = $derived(fork(results, (scene) => 'type' in scene));

	let scenes = $derived(
		mapValues(
			group(partition[0] as Scene[], (scene) => scene.type) as Record<SceneTypes, Scene[]>,
			(s) => alphabetical(s ?? [], ({ name }) => name)
		)
	);

	let groups = $derived(alphabetical(partition[1], ({ name }) => name));

	const handleClick = (item: SearchResultItem) => () => {
		onClick?.(item, results.indexOf(item));
	};

	function enter(node: HTMLElement) {
		return transitionsEnabled
			? fly(node, { x: direction === 'forward' ? 50 : -50 })
			: fly(node, { y: 10, duration: 300 });
	}

	function exit(node: HTMLElement) {
		return transitionsEnabled
			? fly(node, { x: direction === 'forward' ? -50 : 50 })
			: fly(node, { y: 10, duration: 300 });
	}
</script>

<div class="relative size-full">
	{#key results}
		<div
			in:enter
			out:exit
			class="absolute inset-0 grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 overflow-auto px-12 pt-1 pb-12"
		>
			{#each groups as item}
				<Item {emoji} {item} onclick={handleClick(item)} />
			{/each}

			{#if scenes.drive && scenes.drive.length > 0}
				<Section title="🚗 Drives">
					{#each scenes.drive as item}
						<Item {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</Section>
			{/if}

			{#if scenes.walk && scenes.walk.length > 0}
				<Section title="👣 Walks">
					{#each scenes.walk as item}
						<Item {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</Section>
			{/if}

			{#if scenes.bike && scenes.bike.length > 0}
				<Section title="🚲 Bike Rides">
					{#each scenes.bike as item}
						<Item {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</Section>
			{/if}

			{#if scenes.boat && scenes.boat.length > 0}
				<Section title="🚢 Boat Rides">
					{#each scenes.boat as item}
						<Item {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</Section>
			{/if}
		</div>
	{/key}
</div>
