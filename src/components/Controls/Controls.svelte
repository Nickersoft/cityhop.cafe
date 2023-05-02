<script lang="ts">
	import { currentScene, currentTrack, preferences } from '$lib/stores';

	import type { Scene, Track } from '$lib/types';

	import { getRandomLofi } from '$data/stations';

	import AudioPlayer from './NowPlaying/NowPlaying.svelte';
	import ChangeMusic from './ChangeMusic';
	import ChangeScene from './ChangeScene';
	import Settings from './Settings';
	import CurrentScene from './CurrentScene.svelte';
	import TopButtons from './TopButtons.svelte';

	let isSettingsOpen = false;
	let isChangeSceneShowing = false;
	let isChangeMusicShowing = false;

	function showChangeMusic() {
		isChangeMusicShowing = true;
	}

	function showChangeScene() {
		isChangeSceneShowing = true;
	}

	function handleSceneChange(event: CustomEvent & { detail: Scene }) {
		$currentScene = event.detail;

		if (!$preferences.preserveAudio) {
			$currentTrack = $currentScene.suggestedTrack ?? getRandomLofi();
		}

		isChangeSceneShowing = false;
	}

	function handleMusicChange(event: CustomEvent & { detail: Track }) {
		$currentTrack = event.detail;
		isChangeMusicShowing = false;
	}

	function showSettings() {
		isSettingsOpen = true;
	}
</script>

<Settings bind:open={isSettingsOpen} />

<ChangeMusic on:select={handleMusicChange} bind:open={isChangeMusicShowing} />

<ChangeScene on:select={handleSceneChange} bind:open={isChangeSceneShowing} />

<div class="overlay">
	<TopButtons on:openSettings={showSettings} />
	<div class="controls-container">
		<div class="controls">
			<CurrentScene on:changeScene={showChangeScene} />
			<AudioPlayer on:changeMusic={showChangeMusic} />
		</div>
	</div>
</div>

<style lang="postcss">
	:global(body:not(.inactive)) {
		.controls-container,
		:global(.top-icons) {
			@apply opacity-100 translate-y-0;
		}
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
