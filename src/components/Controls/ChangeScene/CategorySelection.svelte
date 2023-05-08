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
	class="flex text-lg lg:gap-8 lg:border-r border-white border-opacity-10 w-full lg:w-auto lg:pr-8 py-8 flex-grow-0 flex-row lg:flex-col lg:text-right text-center"
>
	<CategorySelectionItem on:click={selectWalk} active={selectedCategory === 'walk'}>
		🚶🏻 Walks
	</CategorySelectionItem>
	<CategorySelectionItem on:click={selectDrive} active={selectedCategory === 'drive'}>
		🚙 Drives
	</CategorySelectionItem>
</ul>
