<script lang="ts">
	import { uiState, userPreferences } from '$lib/stores.svelte';
	import type { Offset } from '$lib/types';
	import { random } from 'radashi';
	import { onMount } from 'svelte';
	import type { YouTubePlayer } from 'youtube-player/dist/types';

	import Controls from './Controls';
	import YouTube from './YouTube.svelte';

	interface Props {
		playing: boolean;
		videoID: string;
		audioID: string;
		liveAudio?: boolean;
		videoOffset: Required<Offset>;
		videoLength: number | undefined;
	}

	let {
		playing = $bindable(),
		videoID,
		audioID,
		liveAudio = true,
		videoOffset,
		videoLength
	}: Props = $props();

	let backgroundPlayer = $state<YouTubePlayer | null>(null);
	let audioPlayer = $state<YouTubePlayer | null>(null);
	let videoDuration: number;

	async function onPlay(event: CustomEvent) {
		playing = true;
		videoDuration = await event.detail.target.getDuration();
	}

	function onBackgroundReady(event: CustomEvent) {
		event.detail.target.setVolume(15);
		backgroundPlayer = event.detail.target;
	}

	function onBackgroundEnded(event: CustomEvent) {
		event.detail.target.seekTo(videoOffset.start, true);
	}

	function onAudioReady(event: CustomEvent) {
		event.detail.target.setVolume(100);
		event.detail.target.playVideo();
		audioPlayer = event.detail.target;
	}

	function onVideoTimeChange(event: CustomEvent) {
		// Restart the video 10s before it ends to not show related videos
		if (videoDuration && event.detail.time > videoDuration + videoOffset.end) {
			onBackgroundEnded(event);
		}
	}

	let inactiveTimeout: NodeJS.Timeout;

	onMount(() => {
		function handleMouseMove() {
			document.body.classList.remove('inactive');

			if (inactiveTimeout) {
				clearTimeout(inactiveTimeout);
			}

			inactiveTimeout = setTimeout(() => {
				document.body.classList.add('inactive');
			}, 10000);
		}

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('keydown', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('keydown', handleMouseMove);
		};
	});

	// Default to 30 min
	let offsetLength = $derived(
		videoLength ? videoLength - videoOffset.end - videoOffset.start : 1800
	);

	let randomOffset = $derived(random(videoOffset.start ?? 0, videoOffset.start + offsetLength));

	$effect(() => {
		backgroundPlayer?.setVolume(userPreferences.muteScene ? 0 : userPreferences.sceneVolume);
	});

	$effect(() => {
		audioPlayer?.setVolume(userPreferences.muteMusic ? 0 : userPreferences.musicVolume);
	});
</script>

<Controls />

<div
	class="z-50 relative bg-white shadow-lg overflow-hidden pointer-events-none rounded-md appearance-none hidden"
>
	<YouTube
		id="audio"
		videoId={audioID}
		on:ready={onAudioReady}
		options={{
			width: 400,
			height: 300,
			playerVars: {
				...(!liveAudio && { start: random(0, 1800) }),
				autoplay: 1,
				playsinline: 1,
				rel: 0,
				disablekb: 1
			}
		}}
	/>
</div>

<div class="video-background">
	<div class="video-foreground" class:fullscreen={uiState.isFullscreen}>
		<YouTube
			id="video"
			on:end={onBackgroundEnded}
			on:play={onPlay}
			on:stateChange
			on:timechange={onVideoTimeChange}
			on:ready={onBackgroundReady}
			videoId={videoID}
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

<style lang="postcss">
	:global(body.inactive) {
		@apply cursor-none;
	}

	.video-background {
		background: #000;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.video-foreground,
	.video-background :global(iframe) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	@media (min-aspect-ratio: 16/9) {
		.video-foreground:not(.fullscreen) {
			height: 300%;
			top: -100%;
		}
	}

	@media (max-aspect-ratio: 16/9) {
		.video-foreground:not(.fullscreen) {
			width: 300%;
			left: -100%;
		}
	}
</style>
