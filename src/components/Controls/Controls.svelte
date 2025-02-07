<script lang="ts">
	import { nowPlaying, userPreferences } from '$lib/stores.svelte';
	import type { Scene, Station } from '$lib/types';
	import { getRandomLofi } from '$lib/utils';

	import About from './About';
	import ChangeMusic from './ChangeMusic';
	import ChangeScene from './ChangeScene';
	import CurrentScene from './CurrentScene.svelte';
	import AudioPlayer from './NowPlaying';
	import Settings from './Settings';
	import Toolbar from './Toolbar';

	let isSettingsOpen = $state(false);
	let isChangeSceneShowing = $state(false);
	let isAboutShowing = $state(false);
	let isChangeMusicShowing = $state(false);

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
		nowPlaying.scene = event.detail;

		if (!userPreferences.preserveAudio) {
			nowPlaying.station = nowPlaying.scene?.suggestedTrack ?? getRandomLofi();
		}

		isChangeSceneShowing = false;
	}

	function handleMusicChange(event: CustomEvent & { detail: Station }) {
		nowPlaying.station = event.detail;
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

<div class="overlay" id="controls">
	<Toolbar on:openAbout={showAbout} on:openSettings={showSettings} />
	<div class="controls-container">
		<div class="controls">
			<CurrentScene on:changeScene={showChangeScene} />
			<AudioPlayer on:changeMusic={showChangeMusic} />
		</div>
	</div>
</div>

<style>
	:global(body:not(.inactive)) {
		#controls {
			@apply !opacity-100 !translate-y-0;
		}
	}

	.overlay {
		@apply fixed z-30 inset-0 flex justify-end flex-col opacity-0 transition-all duration-300 ease-in-out;
	}

	.controls {
		@apply grid lg:grid-cols-2 container mx-auto grid-cols-1;

		&-container {
			@apply translate-y-2;
			@apply bg-linear-to-t from-[rgba(0,0,0,0.75)] to-transparent p-4 pt-64;
		}
	}
</style>
