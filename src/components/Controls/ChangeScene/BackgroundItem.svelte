<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { Scene } from '$lib/types';

	import { ListItem } from '../SearchScreen';

	export let background: Scene;

	const dispatch = createEventDispatcher();

	function handleSceneSelect() {
		dispatch('select', background);
	}
</script>

<ListItem on:click={handleSceneSelect}>
	<div class="flex flex-row justify-start items-center gap-2">
		{background.name}

		{#if background.tags?.includes('rain')}
			<iconify-icon icon="twemoji:cloud-with-rain" />
		{/if}

		{#if background.tags?.includes('snow')}
			<iconify-icon icon="twemoji:snowflake" />
		{/if}
	</div>
</ListItem>
