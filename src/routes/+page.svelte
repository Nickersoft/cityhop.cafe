<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';

	import { currentScene, currentTrack, hasStarted, isPlaying } from '$lib/stores';
	import { decodeSharableURL, getSpooky, goToRandomSceneWithMusic } from '$lib/utils';
	import { setupHeartbeat } from '$lib/heartbeat';
	import { setupHotkeys } from '$lib/hotkeys';

	import {
		DEFAULT_VIDEO_END_OFFSET,
		DEFAULT_VIDEO_START_OFFSET,
		IS_HALLOWEEN
	} from '$lib/constants';

	import UI from '$components/UI.svelte';

	import { page } from '$app/stores';

	onMount(() => {
		const cleanupHeartbeat = setupHeartbeat();
		const cleanupHotkeys = setupHotkeys();

		const decodedURL = decodeSharableURL($page.url);

		if (decodedURL) {
			$currentScene = decodedURL.scene;
			$currentTrack = decodedURL.track;
		} else if (IS_HALLOWEEN) {
			getSpooky();
		} else {
			goToRandomSceneWithMusic(true);
		}

		return () => {
			cleanupHeartbeat();
			cleanupHotkeys();
		};
	});
</script>

{#if !$isPlaying}
	<div
		out:fade={{ duration: 2000 }}
		class="flex justify-center items-center w-full h-full text-white fixed inset-0 z-50 bg-black"
	>
		{#key $hasStarted}
			<div
				out:scale|local={{ start: 0.95, duration: 800 }}
				in:fly|local={{ y: 10, duration: 800, delay: 100 }}
				class="absolute text-center -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
			>
				{#if $hasStarted}
					{#if IS_HALLOWEEN}
						Happy Halloween...
					{:else}
						Let's go...
					{/if}

					<div class="loader" />
				{:else}
					Press any key or click anywhere to begin
				{/if}
			</div>
		{/key}
	</div>
{/if}

{#if $hasStarted && $currentScene && $currentTrack}
	<UI
		bind:playing={$isPlaying}
		videoID={$currentScene.videoID}
		liveAudio={$currentTrack.live}
		audioID={$currentTrack.trackID}
		videoOffset={{
			start: $currentScene.offset?.start ?? DEFAULT_VIDEO_START_OFFSET,
			end: $currentScene.offset?.end ?? DEFAULT_VIDEO_END_OFFSET
		}}
	/>
{/if}

<style lang="postcss">
	@keyframes load {
		0% {
			width: 0%;
			left: 0;
		}

		100% {
			width: 100%;
		}
	}

	.loader {
		@apply w-32 mt-4 h-[2px] relative;

		&:before {
			@apply h-full bg-white absolute left-0 top-0;

			animation: load 5s ease-out;
			animation-delay: 100ms;
			animation-fill-mode: both;
			content: '';
		}
	}
</style>
