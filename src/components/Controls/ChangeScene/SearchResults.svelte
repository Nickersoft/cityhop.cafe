<script lang="ts">
	import { SceneTypes } from '$data/scene-types';
	import type { Scene } from '$lib/types';
	import { alphabetical, fork, group, mapValues } from 'radashi';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import SearchItem from './SearchItem.svelte';
	import SearchSection from './SearchSection.svelte';
	import type { Item } from './types';

	const dispatch = createEventDispatcher();

	interface Props {
		results: Item[];
		emoji?: string | undefined;
		disableTransitions?: boolean;
		transitionDirection?: 'forward' | 'backward';
	}

	let {
		results,
		emoji = undefined,
		disableTransitions = false,
		transitionDirection = 'forward'
	}: Props = $props();

	let partition = $derived(fork(results, (scene) => 'type' in scene));

	let scenes = $derived(
		mapValues(
			group(partition[0] as Scene[], (scene) => scene.type) as Record<SceneTypes, Scene[]>,
			(s) => alphabetical(s ?? [], ({ name }) => name)
		)
	);

	let groups = $derived(alphabetical(partition[1], ({ name }) => name));

	const handleClick = (item: Item) => () => {
		dispatch('click', { item, index: results.indexOf(item) });
	};

	function enter(node: HTMLElement) {
		return disableTransitions
			? fade(node, { duration: 0 })
			: fly(node, { x: transitionDirection === 'forward' ? 50 : -50 });
	}

	function exit(node: HTMLElement) {
		return disableTransitions
			? fade(node, { duration: 0 })
			: fly(node, { x: transitionDirection === 'forward' ? -50 : 50 });
	}
</script>

<div class="relative w-full h-full">
	{#key results}
		<div
			in:enter
			out:exit
			class="grid absolute inset-0 auto-rows-min grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pb-12 overflow-auto gap-4"
		>
			{#each groups as item}
				<SearchItem {emoji} {item} onclick={handleClick(item)} />
			{/each}

			{#if scenes.drive && scenes.drive.length > 0}
				<SearchSection title="🚗 Drives">
					{#each scenes.drive as item}
						<SearchItem {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}

			{#if scenes.walk && scenes.walk.length > 0}
				<SearchSection title="👣 Walks">
					{#each scenes.walk as item}
						<SearchItem {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}

			{#if scenes.bike && scenes.bike.length > 0}
				<SearchSection title="🚲 Bike Rides">
					{#each scenes.bike as item}
						<SearchItem {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}

			{#if scenes.boat && scenes.boat.length > 0}
				<SearchSection title="🚢 Boat Rides">
					{#each scenes.boat as item}
						<SearchItem {emoji} {item} onclick={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}
		</div>
	{/key}
</div>
