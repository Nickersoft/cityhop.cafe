<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { ChangeEventHandler } from 'svelte/elements';

	import Fuse from 'fuse.js';

	import type { Background, BackgroundWithCountry, Country } from '$lib/types';

	import countryFlags from '$lib/flags';
	import backgrounds from '$lib/backgrounds';
	import { group } from 'radash';

	export let open: boolean;

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

	$: groupedBackgrounds = group(results, (r) => r.country);
	$: countries = Object.keys(groupedBackgrounds) as Country[];
</script>

{#if open}
	<div class="bg" transition:scale={{ start: 1.1, duration: 350 }}>
		<div class="mx-auto h-full -w flex flex-col justify-center items-center">
			<input
				on:keyup={handleSearch}
				type="text"
				placeholder="Search places"
				class="mx-auto p-4 max-w-lg w-full mt-8 text-2xl text-center outline-none border-b border-white border-opacity-20 bg-transparent"
			/>

			<div class="flex overflow-y-scroll flex-col gap-8 p-8 w-full flex-grow">
				{#each countries as country}
					<div class="flex flex-col max-w-lg w-full mx-auto justify-center items-start gap-4">
						<div class="flex flex-row gap-4 justify-start items-center">
							{countryFlags[country]}
							<span class="uppercase opacity-50 font-medium">
								{country}
							</span>
						</div>

						<ul class="flex flex-col w-full">
							{#each groupedBackgrounds[country] ?? [] as background}
								<li on:click={() => console.log('hi')} class="list-item">{background.name}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.bg {
		@apply fixed z-50 inset-0;
		background-image: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 100%);
	}

	.list-item {
		@apply hover:opacity-100 opacity-80 transform-gpu transition-all duration-150 text-2xl px-4 py-1;
		@apply cursor-pointer;
		@apply bg-slate-800 rounded-lg p-4 w-full text-left bg-opacity-0 active:!scale-95;

		&:hover {
			@apply bg-opacity-50 shadow-md backdrop-blur-md scale-[1.05];
		}
	}
</style>
