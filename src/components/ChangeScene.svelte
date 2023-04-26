<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { scale } from 'svelte/transition';
	import { group } from 'radash';

	import Fuse from 'fuse.js';

	import type { Background, BackgroundWithCountry, Country } from '$lib/types';

	import countryFlags from '$lib/flags';
	import backgrounds from '$lib/backgrounds';

	import Rain from '$icons/Rain.svelte';
	import Snow from '$icons/Snow.svelte';
	import { clickOutside } from '$lib/actions';

	export let open: boolean;

	const dispatch = createEventDispatcher();

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

	function handleSceneSelect(scene: BackgroundWithCountry) {
		dispatch('select', scene);
	}

	$: groupedBackgrounds = group(results, (r) => r.country);
	$: countries = Object.keys(groupedBackgrounds) as Country[];
</script>

{#if open}
	<div class="bg" transition:scale={{ start: 1.1, duration: 350 }}>
		<div class="mx-auto h-full flex flex-col justify-center items-center">
			<ul class="flex flex-row w-full max-w-lg text-center p-8">
				<li class="flex-1">Walks</li>
				<li class="flex-1">Drives</li>
			</ul>
			<input
				on:keyup={handleSearch}
				type="text"
				placeholder="Search places"
				class="mx-auto p-4 max-w-lg w-full text-2xl text-center outline-none border-b border-white border-opacity-20 bg-transparent"
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
								{@const cb = () => handleSceneSelect(background)}

								<li on:click={cb} on:keyup={cb} class="list-item">
									{background.name}

									{#if background.tags?.includes('rain')}
										<Rain width={22} height={22} />
									{/if}

									{#if background.tags?.includes('snow')}
										<Snow width={22} height={22} />
									{/if}
								</li>
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
		@apply fixed z-50 inset-0 backdrop-blur-sm;
		background-image: radial-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95) 100%);
	}

	.list-item {
		@apply hover:text-yellow-500 transform-gpu transition-all duration-150 text-2xl px-4 py-1;
		@apply cursor-pointer relative;
		@apply p-4 w-full text-left active:opacity-50;
		@apply flex flex-row gap-2 justify-start items-center;

		&:hover:before {
			@apply -left-2 opacity-100;
		}

		&:before {
			@apply w-0 h-0 absolute -left-4 top-1/2 -translate-y-1/2 transition-all duration-150 opacity-0;

			border-style: solid;
			border-width: 6px 0 6px 10.4px;
			border-color: transparent transparent transparent theme('colors.yellow.500');

			content: '';
		}
	}
</style>
