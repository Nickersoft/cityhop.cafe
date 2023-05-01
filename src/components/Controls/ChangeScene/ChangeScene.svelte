<script lang="ts">
	import { group } from 'radash';

	import Fuse from 'fuse.js';

	import type { Country } from '$lib/types';

	import backgrounds from '$lib/backgrounds';

	import CountrySection from './CountrySection.svelte';
	import CategorySelection from './CategorySelection.svelte';
	import SearchScreen from '../SearchScreen';
	import { preferences } from '$lib/stores';

	export let open: boolean;

	let selectedCategory: 'walk' | 'drive' = 'walk';

	const fuse = new Fuse(backgrounds, {
		keys: ['name', 'country'],
		shouldSort: true,
		isCaseSensitive: false
	});

	let searchQuery: string = '';

	$: results =
		searchQuery.length === 0 ? backgrounds : fuse.search(searchQuery).map((result) => result.item);

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
