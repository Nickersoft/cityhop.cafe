<script lang="ts">
	import type { YouTubePlayer } from 'youtube-player/dist/types';
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import { random } from 'es-toolkit';

	import { DEFAULT_VIDEO_END_OFFSET, DEFAULT_VIDEO_START_OFFSET } from '$lib/consts';
	import { Button, YouTube } from '$components/ui';
	import { nowPlaying, preferences, ui } from '$lib/state.svelte';
	import { ArrowsIn, ArrowsOut } from '$lib/icons';

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
		videoDuration = await player?.getDuration();
	}

	function onReady(event: CustomEvent) {
		player = event.detail.target;
		player?.setVolume(15);
	}

	function onEnd() {
		player?.seekTo(videoOffset.start, true);
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
		const removeListener = on(document, 'fullscreenchange', () => {
			ui.isFullscreen = !!document.fullscreenElement;
		});

		return removeListener;
	});
</script>

{#if nowPlaying.scene}
	<Button
		variant="link"
		size="icon"
		onclick={toggleFullscreen}
		class="fixed top-28 right-0 z-40 m-4 text-white md:top-12 xl:top-0 [&_svg]:size-8"
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
				{onTimeChange}
				{onReady}
				{onPlay}
				videoId={nowPlaying.scene.videoID}
				options={{
					playerVars: {
						controls: 0,
						start: randomOffset,
						autoplay: 1,
						disablekb: 1,
						modestbranding: 1,
						playsinline: 1
					}
				}}
			/>
		</div>
	</div>
{/if}
