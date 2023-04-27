<script lang="ts">
	import { alphabetical } from 'radash';

	import countryFlags from '$lib/flags';

	import type { BackgroundWithCountry, Country } from '$lib/types';

	import BackgroundItem from './BackgroundItem.svelte';

	export let country: Country;
	export let backgrounds: BackgroundWithCountry[];
</script>

<div class="flex flex-col w-full justify-center items-start gap-4">
	<div class="flex flex-row gap-4 justify-start items-center">
		{countryFlags[country]}
		<span class="uppercase opacity-50 font-medium">
			{country}
		</span>
	</div>

	<ul class="flex flex-col w-full">
		{#each alphabetical(backgrounds ?? [], (b) => b.name) as background}
			<BackgroundItem on:select {background} />
		{/each}
	</ul>
</div>
