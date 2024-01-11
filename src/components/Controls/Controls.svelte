<script lang="ts">
	import { currentScene, currentStation, preferences } from '$lib/stores';
	import type { Scene, Station } from '$lib/types';
	import { getRandomLofi } from '$lib/utils';

	import About from './About';
	import ChangeMusic from './ChangeMusic';
	import ChangeScene from './ChangeScene';
	import CurrentScene from './CurrentScene.svelte';
	import AudioPlayer from './NowPlaying/NowPlaying.svelte';
	import Settings from './Settings';
	import TopButtons from './TopButtons.svelte';

	let isSettingsOpen = false;
	let isChangeSceneShowing = false;
	let isAboutShowing = false;
	let isChangeMusicShowing = false;

	function showChangeMusic() {
		isChangeMusicShowing = true;
	}

	function showAbout() {
		isAboutShowing = true;
	}

	function showChangeScene() {
		isChangeSceneShowing = true;
	}

	function handleSceneChange(event: CustomEvent & { detail: Scene }) {
		$currentScene = event.detail;

		if (!$preferences.preserveAudio) {
			$currentStation = $currentScene.suggestedTrack ?? getRandomLofi();
		}

		isChangeSceneShowing = false;
	}

	function handleMusicChange(event: CustomEvent & { detail: Station }) {
		$currentStation = event.detail;
		isChangeMusicShowing = false;
	}

	function showSettings() {
		isSettingsOpen = true;
	}
</script>

<About bind:open={isAboutShowing} />

<Settings bind:open={isSettingsOpen} />

<ChangeMusic on:select={handleMusicChange} bind:open={isChangeMusicShowing} />

<ChangeScene on:select={handleSceneChange} bind:open={isChangeSceneShowing} />

<div class="overlay">
	<TopButtons on:openAbout={showAbout} on:openSettings={showSettings} />
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
			@apply opacity-100 translate-y-0 !important;
		}
	}

	.overlay {
		@apply fixed z-30 inset-0 flex justify-end flex-col;
	}

	.controls {
		@apply grid lg:grid-cols-2 container mx-auto grid-cols-1;

		&-container {
			@apply opacity-0 transition-all duration-300 translate-y-2;
			@apply bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent p-4 pt-64;
		}
	}
</style>
