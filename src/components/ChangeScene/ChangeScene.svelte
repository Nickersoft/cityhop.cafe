<script lang="ts">
	import { scale } from 'svelte/transition';
	import { group, sort } from 'radash';

	import Fuse from 'fuse.js';

	import type { BackgroundWithCountry, Country } from '$lib/types';

	import backgrounds from '$lib/backgrounds';

	import { clickOutside } from '$lib/actions';
	import CountrySection from './CountrySection.svelte';
	import CategorySelection from './CategorySelection.svelte';

	export let open: boolean;

	let selectedCategory: 'walk' | 'drive' = 'walk';

	const fuse = new Fuse(backgrounds, {
		keys: ['name', 'country'],
		shouldSort: true,
		isCaseSensitive: false
	});

	let results: BackgroundWithCountry[] = backgrounds;

	function handleSearch(event: KeyboardEvent) {
		const el = event.target as HTMLInputElement;
		const query = el.value.trim();

		results = query.length === 0 ? backgrounds : fuse.search(query).map((result) => result.item);

		console.log(fuse.search(query));
	}

	function handleBGClick() {
		open = false;
	}

	$: filteredResults = results.filter((r) => r.type === selectedCategory);
	$: groupedBackgrounds = group(filteredResults, (r) => r.country);
	$: countries = Object.keys(groupedBackgrounds).sort() as Country[];
</script>

{#if open}
	<div class="bg" transition:scale={{ start: 1.1, duration: 350 }}>
		<div
			use:clickOutside={handleBGClick}
			class="mx-auto py-8 max-w-4xl gap-8 h-full flex flex-row justify-center items-center"
		>
			<CategorySelection bind:selectedCategory />

			<div class="flex flex-col flex-1 justify-center h-full items-center">
				<input
					on:keyup={handleSearch}
					type="text"
					placeholder="Search places"
					class="p-4 w-full text-2xl text-left pl-8 outline-none border-b border-white border-opacity-10 bg-transparent"
				/>

				<div class="flex overflow-y-scroll flex-col gap-8 p-8 w-full flex-grow">
					{#each countries as country}
						<CountrySection
							on:select
							{country}
							backgrounds={groupedBackgrounds[country]?.sort() ?? []}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.bg {
		@apply fixed z-50 inset-0 backdrop-blur-sm;
		background-image: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 100%);
	}
</style>
