<script lang="ts">
	import { currentScene, currentTrack, preferences } from '$lib/stores';

	import tracks from '$lib/tracks';
	import type { BackgroundWithCountry, Track } from '$lib/types';

	import AudioPlayer from './AudioPlayer.svelte';
	import ChangeMusic from './ChangeMusic';
	import ChangeScene from './ChangeScene';

	let isChangeSceneShowing = false;
	let isChangeMusicShowing = false;

	function showChangeMusic() {
		isChangeMusicShowing = true;
	}

	function showChangeScene() {
		isChangeSceneShowing = true;
	}

	function handleSceneChange(event: CustomEvent & { detail: BackgroundWithCountry }) {
		$currentScene = event.detail;

		if (!$preferences.preserveAudio) {
			$currentTrack = $currentScene.suggestedTrack ?? tracks.default;
		}

		isChangeSceneShowing = false;
	}

	function handleMusicChange(event: CustomEvent & { detail: Track }) {
		$currentTrack = event.detail;
		isChangeMusicShowing = false;
	}
</script>

<ChangeMusic on:select={handleMusicChange} bind:open={isChangeMusicShowing} />

<ChangeScene on:select={handleSceneChange} bind:open={isChangeSceneShowing} />

<div class="overlay">
	<div class="controls-container">
		<div class="controls">
			<div
				class="flex flex-wrap border-r border-white border-opacity-20 pr-4 flex-row justify-between items-center"
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
					on:click={showChangeScene}
					on:keyup={showChangeScene}
					class="label"
				>
					Change Scene
				</button>
			</div>

			<AudioPlayer on:changeMusic={showChangeMusic} />
		</div>
	</div>
</div>

<style lang="postcss">
	:global(body:not(.inactive)) .controls-container {
		@apply opacity-100 translate-y-0;
	}

	.overlay {
		@apply fixed z-30 inset-0 flex justify-end flex-col;
	}

	.controls {
		@apply grid grid-cols-2 container mx-auto;

		&-container {
			@apply opacity-0 transition-all duration-300 translate-y-2;
			@apply bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent p-4 pt-64;
		}
	}
</style>
