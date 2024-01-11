<script lang="ts">
	// import scenes from '$data/scenes';
	import { continents, scenes } from '$data/scenes';
	import { currentScene, preferences } from '$lib/stores';
	import type { Continent, Country, Scene, SceneGroup } from '$lib/types';
	import { getVideoThumbnail } from '$lib/utils';
	import fuzzysort from 'fuzzysort';
	import { get, group } from 'radash';
	import { createEventDispatcher } from 'svelte';
	import { scale } from 'svelte/transition';

	import SearchScreen from '../SearchScreen';
	import type { Item } from './SearchResults.svelte';
	import SearchResults from './SearchResults.svelte';

	export let open: boolean;

	const dispatch = createEventDispatcher();

	let selectedCategory: 'walk' | 'drive' = 'walk';

	let searchQuery: string = '';

	let path: string[] = [];

	$: {
		if (!open) {
			path = [];
		}
	}

	$: disableTransitions = searchQuery.length > 0;

	$: results =
		searchQuery.length === 0
			? (get(continents, path.join('')) as Item[])
			: fuzzysort
					.go(searchQuery, scenes, { keys: ['name', 'country', 'category'] })
					.map((result) => result.obj);

	// $: filteredResults = results.filter((r) => r.type === selectedCategory);

	// $: groupedBackgrounds = group(filteredResults, (r) => r.country);

	let transitionDirection: 'forward' | 'backward' = 'forward';

	// $: countries = Object.keys(groupedBackgrounds).sort() as Country[];
	function handleClick(e: CustomEvent<{ index: number; item: Item }>) {
		const { item, index } = e.detail;

		transitionDirection = 'forward';

		if ('scenes' in item) {
			path = [...path, `[${index}].scenes`];
		} else if ('countries' in item) {
			path = [...path, `[${index}].countries`];
		} else {
			dispatch('select', item);
		}
	}

	const numberFormatter = Intl.NumberFormat();
</script>

<SearchScreen
	on:back={() => {
		transitionDirection = 'backward';
		path = path.slice(0, -1);
	}}
	showBack={path.length > 0}
	placeholder={`Search ${numberFormatter.format(scenes.length)} locations around the globe`}
	bind:searchQuery
	bind:open
>
	<!-- <CategorySelection slot="aside" bind:selectedCategory /> -->

	<SearchResults {disableTransitions} {results} {transitionDirection} on:click={handleClick} />

	<!-- {#each countries as country}
		<CountrySection on:select {country} backgrounds={groupedBackgrounds[country]?.sort() ?? []} />
	{/each} -->

	<div slot="bottom" class="flex mt-4 flex-row gap-2 text-sm text-opacity-75 text-white">
		<input bind:checked={$preferences.preserveAudio} type="checkbox" class="toggle toggle-sm" />
		Keep my music selection
	</div>
</SearchScreen>
