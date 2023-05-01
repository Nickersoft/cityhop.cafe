<script lang="ts">
	import { alphabetical } from 'radash';

	import { flags } from '$lib/emojis';
	import type { BackgroundWithCountry, Country } from '$lib/types';

	import { Section } from '../SearchScreen';

	import BackgroundItem from './BackgroundItem.svelte';

	export let country: Country;
	export let backgrounds: BackgroundWithCountry[];
</script>

<Section>
	<svelte:fragment slot="header">
		{flags[country]}
		<span class="opacity-50">
			{country}
		</span>
	</svelte:fragment>

	<svelte:fragment slot="list">
		{#each alphabetical(backgrounds ?? [], (b) => b.name) as background}
			<BackgroundItem on:select {background} />
		{/each}
	</svelte:fragment>
</Section>
