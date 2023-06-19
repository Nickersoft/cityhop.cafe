<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let active: boolean = false;

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<li class="flex-1 pr-4">
	<button class="item" class:active on:click={handleClick}>
		<slot />
	</button>
</li>

<style lang="postcss">
	.item {
		@apply relative transition-all duration-150;

		&:hover {
			@apply text-yellow-500;
		}

		&.active {
			@apply text-yellow-500;

			&:after {
				@apply -right-6 opacity-100;
			}
		}

		&:after {
			@apply absolute -right-5 opacity-0 top-1/2 transition-all duration-150 -translate-y-1/2;

			content: '';
			border-style: solid;
			border-width: 6px 0 6px 10.4px;
			border-color: transparent transparent transparent theme('colors.yellow.500');
		}
	}
</style>
