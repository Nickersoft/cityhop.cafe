<script lang="ts">
	import { onMount } from 'svelte';
	import { random } from 'radash';

	import YouTube from './YouTube.svelte';
	import Controls from './Controls';
	import type { YouTubePlayer } from 'youtube-player/dist/types';
	import { preferences } from '$lib/stores';

	export let playing;
	export let videoID: string;
	export let audioID: string;
	export let videoOffset: number = 0;

	let backgroundPlayer: YouTubePlayer;
	let audioPlayer: YouTubePlayer;

	function onPlay() {
		playing = true;
	}

	function onBackgroundReady(event: CustomEvent) {
		event.detail.target.setVolume(15);
		backgroundPlayer = event.detail.target;
	}

	function onBackgroundEnded(event: CustomEvent) {
		event.detail.target.seekTo(videoOffset, true);
	}

	function onAudioReady(event: CustomEvent) {
		event.detail.target.setVolume(100);
		event.detail.target.playVideo();
		audioPlayer = event.detail.target;
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

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	});

	$: backgroundPlayer &&
		backgroundPlayer.setVolume($preferences.muteScene ? 0 : $preferences.sceneVolume);

	$: audioPlayer && audioPlayer.setVolume($preferences.muteMusic ? 0 : $preferences.musicVolume);
</script>

<Controls />

<div class="video-background">
	<div class="video-foreground">
		<YouTube
			on:end={onBackgroundEnded}
			on:play={onPlay}
			on:stateChange
			on:ready={onBackgroundReady}
			videoId={videoID}
			options={{
				playerVars: {
					controls: 0,
					start: random(videoOffset, videoOffset + 1800),
					autoplay: 1,
					disablekb: 1,
					modestbranding: 1,
					playsinline: 1
				}
			}}
		/>
	</div>
</div>

<div class="appearance-none hidden">
	<YouTube
		videoId={audioID}
		on:ready={onAudioReady}
		options={{
			playerVars: {
				autoplay: 1,
				playsinline: 1,
				rel: 0,
				disablekb: 1
			}
		}}
	/>
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
		.video-foreground {
			height: 300%;
			top: -100%;
		}
	}

	@media (max-aspect-ratio: 16/9) {
		.video-foreground {
			width: 300%;
			left: -100%;
		}
	}
</style>
