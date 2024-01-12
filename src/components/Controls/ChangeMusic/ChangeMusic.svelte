<script lang="ts">
	import { genres, stationList } from '$data/stations';
	// import { genres as genreEmojis } from '$data/emojis';
	import type { Genre } from '$lib/types';
	import fuzzysort from 'fuzzysort';
	import { alphabetical, group } from 'radash';
	import { createEventDispatcher } from 'svelte';

	import SearchScreen, { ListItem, Section } from '../SearchScreen';

	export let open: boolean = false;

	let searchQuery: string = '';

	const dispatch = createEventDispatcher();

	$: results =
		searchQuery.length === 0
			? stationList
			: fuzzysort
					.go(searchQuery, stationList, { keys: ['name', 'genre'] })
					.map((result) => result.obj);

	$: grouped = group(results, (station) => station.genre) as {
		[key in keyof typeof genres]: typeof stationList;
	};

	$: sorted = Object.keys(grouped).sort() as (keyof typeof grouped)[];
</script>

<SearchScreen placeholder="Search stations" bind:open bind:searchQuery>
	{#each sorted as genre}
		<Section>
			<svelte:fragment slot="header">
				<iconify-icon icon={`twemoji:${genres[genre].emoji}`} />
				<span class="opacity-50">
					{genres[genre].name}
				</span>
			</svelte:fragment>

			<svelte:fragment slot="list">
				{@const stations = alphabetical(grouped[genre], ({ name }) => name)}

				{#each stations as station}
					<ListItem on:click={() => dispatch('select', station)}>
						<div class="whitespace-nowrap max-w-4xl overflow-hidden text-ellipsis">
							{station.displayName}
						</div>
					</ListItem>
				{/each}
			</svelte:fragment>
		</Section>
	{/each}
</SearchScreen>
