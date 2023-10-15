<script lang="ts">
	import { group } from 'radash';

	import fuzzysort from 'fuzzysort';

	import type { Country } from '$lib/types';

	import scenes from '$data/scenes';

	import CountrySection from './CountrySection.svelte';
	import CategorySelection from './CategorySelection.svelte';
	import SearchScreen from '../SearchScreen';
	import { preferences } from '$lib/stores';

	export let open: boolean;

	let selectedCategory: 'walk' | 'drive' = 'walk';

	let searchQuery: string = '';

	$: results =
		searchQuery.length === 0
			? scenes
			: fuzzysort
					.go(searchQuery, scenes, { keys: ['name', 'country', 'category'] })
					.map((result) => result.obj);

	$: filteredResults = results.filter((r) => r.type === selectedCategory);

	$: groupedBackgrounds = group(filteredResults, (r) => r.country);

	$: countries = Object.keys(groupedBackgrounds).sort() as Country[];
</script>

<SearchScreen placeholder="Search places" bind:searchQuery bind:open>
	<CategorySelection slot="aside" bind:selectedCategory />

	{#each countries as country}
		<CountrySection on:select {country} backgrounds={groupedBackgrounds[country]?.sort() ?? []} />
	{/each}

	<div slot="bottom" class="flex mt-4 flex-row gap-2 text-sm text-opacity-75 text-white">
		<input bind:checked={$preferences.preserveAudio} type="checkbox" class="toggle toggle-sm" />
		Keep my music selection
	</div>
</SearchScreen>
