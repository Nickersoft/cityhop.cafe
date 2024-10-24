<script lang="ts">
	import { run } from 'svelte/legacy';

	import { continents, scenes } from '$data/scenes';
	import { userPreferences } from '$lib/stores.svelte';
	import fuzzysort from 'fuzzysort';
	import {  get } from 'radashi';
	import { createEventDispatcher } from 'svelte';

	import SearchScreen from '../SearchScreen';
	import SearchResults from './SearchResults.svelte';
	import { getFlagEmoji } from './utils';
	import type { Item } from './types';

	interface Props {
		open: boolean;
	}

	let { open = $bindable() }: Props = $props();

	const dispatch = createEventDispatcher();

	let searchQuery: string = $state('');
	let path: string[] = $state([]);

	run(() => {
		if (!open) {
			path = [];
		}
	});

	let disableTransitions = $derived(searchQuery.length > 0);

	let results =
		$derived(searchQuery.length === 0
			? (get(continents, path.join('')) as Item[])
			: fuzzysort
					.go(searchQuery, scenes, { keys: ['name', 'country', 'category'] })
					.map((result) => result.obj));

	let transitionDirection: 'forward' | 'backward' = $state('forward');

	let emoji: string | undefined = $state(undefined);

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

	{#snippet bottom()}
		<div  class="flex mt-4 flex-row gap-2 text-sm text-opacity-75 text-white">
			<input bind:checked={userPreferences.preserveAudio} type="checkbox" class="toggle toggle-sm" />
			Keep my music selection
		</div>
	{/snippet}
</SearchScreen>
