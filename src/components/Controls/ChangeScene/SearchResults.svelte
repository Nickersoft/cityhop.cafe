<script lang="ts" context="module">
	import type { Continent, Country, Scene, SceneGroup } from '$lib/types';

	export type Item = Continent | Country | SceneGroup | Scene;
</script>

<script lang="ts">
	import { SceneTypes } from '$data/scene-types';
	import { alphabetical, fork, group, mapValues } from 'radash';
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	import About from '../About/About.svelte';
	import SearchItem from './SearchItem.svelte';
	import SearchSection from './SearchSection.svelte';

	const dispatch = createEventDispatcher();

	export let results: Item[];
	export let emoji: string | undefined = undefined;
	export let disableTransitions: boolean = false;
	export let transitionDirection: 'forward' | 'backward' = 'forward';

	$: partition = fork(results, (scene) => 'type' in scene);

	$: scenes = mapValues(
		group(partition[0] as Scene[], (scene) => scene.type) as Record<SceneTypes, Scene[]>,
		(s) => alphabetical(s ?? [], ({ name }) => name)
	);

	$: groups = alphabetical(partition[1], ({ name }) => name);

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
				<SearchItem {emoji} {item} on:click={handleClick(item)} />
			{/each}

			{#if scenes.drive && scenes.drive.length > 0}
				<SearchSection title="🚗 Drives">
					{#each scenes.drive as item}
						<SearchItem {emoji} {item} on:click={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}

			{#if scenes.walk && scenes.walk.length > 0}
				<SearchSection title="👣 Walks">
					{#each scenes.walk as item}
						<SearchItem {emoji} {item} on:click={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}

			{#if scenes.bike && scenes.bike.length > 0}
				<SearchSection title="🚲 Bike Rides">
					{#each scenes.bike as item}
						<SearchItem {emoji} {item} on:click={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}

			{#if scenes.boat && scenes.boat.length > 0}
				<SearchSection title="🚢 Boat Rides">
					{#each scenes.boat as item}
						<SearchItem {emoji} {item} on:click={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}
		</div>
	{/key}
</div>
