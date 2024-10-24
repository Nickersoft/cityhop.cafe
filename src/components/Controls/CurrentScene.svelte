<script>
	import { SceneTypes } from '$data/scene-types';
	import { nowPlaying } from '$lib/stores.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleChangeScene() {
		dispatch('changeScene');
	}
</script>

<div
	class="flex flex-wrap lg:border-r lg:border-b-0 border-b border-white border-opacity-20 flex-row lg:pr-8 pb-4 lg:pb-0 justify-between items-center"
>
	<div class="flex flex-col gap-0.5">
		<span class="glow">
			{#if nowPlaying.scene?.type === SceneTypes.walk}
				You are currently walking in
			{:else}
				You are currently driving in
			{/if}
		</span>

		<div class="flex flex-row justify-start items-baseline gap-3 font-medium cursor-pointer">
			<span class="text-2xl glow">
				{nowPlaying.scene?.name}
			</span>

			<a
				href="https://youtube.com/watch?v={nowPlaying.scene?.videoID}"
				target="_blank"
				rel="noreferrer"
				class="tooltip block translate-y-1 text-2xl tooltip-top opacity-80 hover:opacity-100 transition-opacity duration-300"
				data-tip="Watch on YouTube"
			>
				<iconify-icon icon="mdi:youtube"></iconify-icon>
			</a>
		</div>
	</div>

	<button title="Click to change scene" onclick={handleChangeScene} class="label">
		Change Scene
	</button>
</div>
