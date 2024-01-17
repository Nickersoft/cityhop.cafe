<script lang="ts">
	import { continents, scenes } from '$data/scenes';
	import { preferences } from '$lib/stores';
	import fuzzysort from 'fuzzysort';
	import { alphabetical, get } from 'radash';
	import { createEventDispatcher } from 'svelte';

	import SearchScreen from '../SearchScreen';
	import type { Item } from './SearchResults.svelte';
	import SearchResults from './SearchResults.svelte';
	import { getFlagEmoji } from './utils';

	export let open: boolean;

	const dispatch = createEventDispatcher();

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

	let transitionDirection: 'forward' | 'backward' = 'forward';

	let emoji: string | undefined = undefined;

	function handleClick(e: CustomEvent<{ index: number; item: Item }>) {
		const { item, index } = e.detail;

		transitionDirection = 'forward';

		if ('emoji' in item) {
			emoji = item.emoji === 'flag' ? getFlagEmoji(item.name) : emoji;
		}

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
	<SearchResults
		{emoji}
		{disableTransitions}
		{results}
		{transitionDirection}
		on:click={handleClick}
	/>

	<div slot="bottom" class="flex mt-4 flex-row gap-2 text-sm text-opacity-75 text-white">
		<input bind:checked={$preferences.preserveAudio} type="checkbox" class="toggle toggle-sm" />
		Keep my music selection
	</div>
</SearchScreen>
