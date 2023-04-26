<script lang="ts">
	import { currentScene } from '$lib/stores';
	import type { BackgroundWithCountry } from '$lib/types';

	import AudioPlayer from './AudioPlayer.svelte';
	import ChangeScene from './ChangeScene';

	let isChangeSceneShowing = false;

	function showChangeScene() {
		isChangeSceneShowing = true;
	}

	function handleSceneChange(event: CustomEvent & { detail: BackgroundWithCountry }) {
		$currentScene = event.detail;
		isChangeSceneShowing = false;
	}
</script>

<ChangeScene on:select={handleSceneChange} bind:open={isChangeSceneShowing} />

<div class="overlay">
	<div class="controls">
		<div class="flex flex-col gap-0.5">
			{#if $currentScene.type === 'walk'}
				You are currently walking in
			{:else}
				You are currently driving in
			{/if}

			<div
				class="text-2xl flex flex-row justify-start items-baseline gap-4 font-medium cursor-pointer"
			>
				{$currentScene.name}, {$currentScene.country}

				<button
					title="Click to change scene"
					on:click={showChangeScene}
					on:keyup={showChangeScene}
					class="text-xs opacity-75 hover:opacity-100 transition-all duration-150 uppercase font-bold tracking-widest"
				>
					Change Scene
				</button>
			</div>
		</div>

		<AudioPlayer />
	</div>
</div>

<style lang="postcss">
	.overlay {
		@apply fixed z-30 inset-0 flex justify-end flex-col;

		&:hover > .controls {
			@apply opacity-100;
		}
	}

	.controls {
		@apply opacity-0 transition-opacity duration-300;
		@apply flex flex-row justify-between items-end bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent p-4 pt-64;
	}
</style>
