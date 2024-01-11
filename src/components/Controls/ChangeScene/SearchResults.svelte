<script lang="ts" context="module">
	import type { Continent, Country, Scene, SceneGroup } from '$lib/types';

	export type Item = Continent | Country | SceneGroup | Scene;
</script>

<script lang="ts">
	import { SceneTypes } from '$data/scene-types';
	import { createEventDispatcher } from 'svelte';
	import { fly, type TransitionConfig } from 'svelte/transition';

	import SearchItem from './SearchItem.svelte';
	import SearchSection from './SearchSection.svelte';

	const dispatch = createEventDispatcher();

	export let results: Item[];
	export let disableTransitions: boolean = false;
	export let transitionDirection: 'forward' | 'backward' = 'forward';

	$: drives = results.filter((scene) => 'type' in scene && scene.type === SceneTypes.drive);
	$: walks = results.filter((scene) => 'type' in scene && scene.type === SceneTypes.walk);
	$: other = results.filter((scene) => !walks.includes(scene) && !drives.includes(scene));

	const handleClick = (item: Item) => () => {
		dispatch('click', { item, index: results.indexOf(item) });
	};

	function enter(node: HTMLElement) {
		if (disableTransitions) return {};
		return fly(node, { x: transitionDirection === 'forward' ? 50 : -50 });
	}

	function exit(node: HTMLElement) {
		if (disableTransitions) return {};
		return fly(node, { x: transitionDirection === 'forward' ? -50 : 50 });
	}
</script>

<div class="relative w-full h-full">
	{#key results}
		<div
			in:enter
			out:exit
			class="grid absolute inset-0 auto-rows-min grid-cols-[repeat(auto-fill,minmax(300px,1fr))] pb-12 overflow-auto gap-4"
		>
			{#each other as item}
				<SearchItem {item} on:click={handleClick(item)} />
			{/each}

			{#if drives.length > 0}
				<SearchSection title="🚗 Drives">
					{#each drives as item}
						<SearchItem {item} on:click={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}

			{#if walks.length > 0}
				<SearchSection title="👣 Walks">
					{#each walks as item}
						<SearchItem {item} on:click={handleClick(item)} />
					{/each}
				</SearchSection>
			{/if}
		</div>
	{/key}
</div>
