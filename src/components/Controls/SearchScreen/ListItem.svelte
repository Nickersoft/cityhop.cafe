<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<li on:click={handleClick} on:keyup={handleClick} class="list-item">
	<slot />
</li>

<style lang="postcss">
	.list-item {
		@apply hover:text-yellow-500 transform-gpu transition-all duration-150 text-2xl;
		@apply cursor-pointer relative;
		@apply p-4 w-full text-left active:opacity-50;
		@apply flex flex-row gap-2 justify-between items-start;

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
