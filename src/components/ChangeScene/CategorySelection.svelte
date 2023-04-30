<script lang="ts">
	import { preferences } from '$lib/stores';

	import CategorySelectionItem from './CategorySelectionItem.svelte';

	export let selectedCategory: 'walk' | 'drive';

	function selectWalk() {
		selectedCategory = 'walk';
	}

	function selectDrive() {
		selectedCategory = 'drive';
	}
</script>

<ul
	class="flex text-lg gap-8 border-r border-white border-opacity-10 pr-8 py-8 flex-grow-0 flex-col text-right"
>
	<CategorySelectionItem on:click={selectWalk} active={selectedCategory === 'walk'}>
		🚶🏻 Walks
	</CategorySelectionItem>
	<CategorySelectionItem on:click={selectDrive} active={selectedCategory === 'drive'}>
		🚙 Drives
	</CategorySelectionItem>

	<div class="flex mt-4 flex-row gap-2 text-sm text-opacity-75 text-white">
		<input bind:checked={$preferences.preserveAudio} type="checkbox" class="toggle toggle-sm" />
		Keep my music selection
	</div>
</ul>
