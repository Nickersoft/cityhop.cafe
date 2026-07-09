<script lang="ts">
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import { random } from 'es-toolkit';

	import { DEFAULT_VIDEO_END_OFFSET, DEFAULT_VIDEO_START_OFFSET } from '$lib/consts';
	import { Button, YouTube } from '$components/ui';
	import { nowPlaying, preferences, ui } from '$lib/state.svelte';
	import { ArrowsIn, ArrowsOut } from '$lib/icons';
	import { clearPlaybackStartTimeout, START_PLAYBACK_EVENT } from '$lib/playback-events';
	import type { YouTubePlayer } from '$lib/youtube/types';

	let videoDuration: number | undefined = $state();

	let player = $state<YouTubePlayer | null>(null);

	const videoOffset = $derived({
		start: nowPlaying.scene?.offset?.start ?? DEFAULT_VIDEO_START_OFFSET,
		end: nowPlaying.scene?.offset?.end ?? DEFAULT_VIDEO_END_OFFSET
	});

	const offsetLength = $derived(
		nowPlaying.scene?.length ? nowPlaying.scene.length - videoOffset.end - videoOffset.start : 1800
	);

	const randomOffset = $derived(random(videoOffset.start ?? 0, videoOffset.start + offsetLength));

	async function onPlay() {
		ui.isPlaying = true;
		ui.playbackBlocked = false;
		ui.playbackError = null;
		clearPlaybackStartTimeout();
		videoDuration = await player?.getDuration();
	}

	function onReady(event: CustomEvent) {
		player = event.detail.target;
		player?.setVolume(15);
	}

	function onEnd() {
		player?.seekTo(videoOffset.start, true);
	}

	function onError(event: CustomEvent) {
		ui.playbackError = `YouTube player error ${String(event.detail?.data ?? 'unknown')}`;
		ui.playbackBlocked = true;
	}

	function onAutoplayBlocked() {
		ui.playbackBlocked = true;
	}

	function startPlayback() {
		ui.playbackBlocked = false;
		ui.playbackError = null;
		player?.playVideo();
	}

	function onTimeChange(event: CustomEvent) {
		// Restart the video 10s before it ends to not show related videos
		if (videoDuration && event.detail.time > videoDuration + videoOffset.end) {
			onEnd();
		}
	}

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	}

	$effect(() => {
		player?.setVolume(preferences.current.muteScene ? 0 : preferences.current.sceneVolume);
	});

	onMount(() => {
		const removeFullscreenListener = on(document, 'fullscreenchange', () => {
			ui.isFullscreen = !!document.fullscreenElement;
		});
		const removeStartListener = on(document, START_PLAYBACK_EVENT, startPlayback);

		return () => {
			removeFullscreenListener();
			removeStartListener();
		};
	});
</script>

{#if nowPlaying.scene}
	<Button
		variant="link"
		size="icon"
		onclick={toggleFullscreen}
		class="fixed top-28 right-0 z-40 m-4 text-white md:top-0 [&_svg]:size-8"
	>
		{#if ui.isFullscreen}
			<ArrowsIn />
		{:else}
			<ArrowsOut />
		{/if}
	</Button>

	<div class="fixed inset-0 bg-black">
		<div
			class={[
				'pointer-events-none absolute inset-0 size-full',
				'min-video:not-[.fullscreen]:h-[300%] min-video:not-[.fullscreen]:-top-full',
				'max-video:not-[.fullscreen]:w-[300%] max-video:not-[.fullscreen]:-left-full',
				'[&_iframe]:pointer-events-none [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:size-full',
				{ fullscreen: ui.isFullscreen }
			]}
		>
			<YouTube
				id="video"
				{onEnd}
				{onError}
				{onAutoplayBlocked}
				{onTimeChange}
				{onReady}
				{onPlay}
				videoId={nowPlaying.scene.videoID}
				options={{
					playerVars: {
						controls: 0,
						start: randomOffset,
						autoplay: 0,
						disablekb: 1,
						modestbranding: 1,
						playsinline: 1
					}
				}}
			/>
		</div>
	</div>
{/if}
