<script lang="ts">
	import { genres, stationList } from '$data/stations';
	// import { genres as genreEmojis } from '$data/emojis';
	import type { Genre } from '$lib/types';
	import fuzzysort from 'fuzzysort';
	import { alphabetical, group } from 'radashi';
	import { createEventDispatcher } from 'svelte';

	import SearchScreen, { ListItem, Section } from '../SearchScreen';

	interface Props {
		open?: boolean;
	}

	let { open = $bindable(false) }: Props = $props();

	let searchQuery: string = $state('');

	const dispatch = createEventDispatcher();

	let results =
		$derived(searchQuery.length === 0
			? stationList
			: fuzzysort
					.go(searchQuery, stationList, { keys: ['name', 'genre'] })
					.map((result) => result.obj));

	let grouped = $derived(group(results, (station) => station.genre) as {
		[key in keyof typeof genres]: typeof stationList;
	});

	let sorted = $derived(Object.keys(grouped).sort() as (keyof typeof grouped)[]);
</script>

<SearchScreen placeholder="Search stations" bind:open bind:searchQuery>
	{#each sorted as genre}
		<Section>
			{#snippet header()}
					
					<iconify-icon icon={`twemoji:${genres[genre].emoji}`}></iconify-icon>
					<span class="opacity-50">
						{genres[genre].name}
					</span>
				
					{/snippet}

			{#snippet list()}
					
					{@const stations = alphabetical(grouped[genre], ({ name }) => name)}

					{#each stations as station}
						<ListItem on:click={() => dispatch('select', station)}>
							<div class="whitespace-nowrap max-w-4xl overflow-hidden text-ellipsis">
								{station.displayName}
							</div>
						</ListItem>
					{/each}
				
					{/snippet}
		</Section>
	{/each}
</SearchScreen>
