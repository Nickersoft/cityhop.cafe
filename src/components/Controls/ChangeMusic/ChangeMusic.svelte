<script lang="ts">
	import Fuse from 'fuse.js';

	import { alphabetical, group } from 'radash';
	import { createEventDispatcher } from 'svelte';

	import { genres as genreEmojis } from '$lib/emojis';
	import type { Genre } from '$lib/types';

	import { stationList } from '$data/stations';

	import SearchScreen, { Section, ListItem } from '../SearchScreen';

	export let open: boolean = false;

	let searchQuery: string = '';

	const fuse = new Fuse(stationList, {
		keys: ['name'],
		shouldSort: true,
		isCaseSensitive: false
	});

	const dispatch = createEventDispatcher();

	$: results =
		searchQuery.length === 0 ? stationList : fuse.search(searchQuery).map((result) => result.item);

	$: groupedByGenre = group(results, (r) => r.genre);

	$: genres = Object.keys(groupedByGenre).sort() as Genre[];
</script>

<SearchScreen placeholder="Search stations" bind:open bind:searchQuery>
	{#each genres as genre}
		<Section>
			<svelte:fragment slot="header">
				{genreEmojis[genre]}
				<span class="opacity-50">
					{genre}
				</span>
			</svelte:fragment>

			<svelte:fragment slot="list">
				{#each alphabetical(groupedByGenre?.[genre] ?? [], (t) => t.name) as track}
					<ListItem on:click={() => dispatch('select', track)}>
						<div class="whitespace-nowrap max-w-4xl overflow-hidden text-ellipsis">
							{track.displayName}
						</div>
					</ListItem>
				{/each}
			</svelte:fragment>
		</Section>
	{/each}
</SearchScreen>
