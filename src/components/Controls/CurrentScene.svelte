<script>
	import { createEventDispatcher } from 'svelte';

	import { currentScene } from '$lib/stores';

	const dispatch = createEventDispatcher();

	function handleChangeScene() {
		dispatch('changeScene');
	}
</script>

<div
	class="flex flex-wrap border-r border-white border-opacity-20 pr-8 flex-row justify-between items-center"
>
	<div class="flex flex-col gap-0.5">
		{#if $currentScene.type === 'walk'}
			You are currently walking in
		{:else}
			You are currently driving in
		{/if}

		<div
			class="text-2xl flex flex-row justify-start items-baseline gap-2 font-medium cursor-pointer"
		>
			{$currentScene.name}, {$currentScene.country}
		</div>
	</div>

	<button
		title="Click to change scene"
		on:click={handleChangeScene}
		on:keyup={handleChangeScene}
		class="label"
	>
		Change Scene
	</button>
</div>
