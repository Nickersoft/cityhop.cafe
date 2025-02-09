<script module>
	/**
	 * Expose PlayerState constants for convenience. These constants can also be
	 * accessed through the global YT object after the YouTube IFrame API is instantiated.
	 * https://developers.google.com/youtube/iframe_api_reference#onStateChange
	 */
	export const PlayerState = {
		UNSTARTED: -1,
		ENDED: 0,
		PLAYING: 1,
		PAUSED: 2,
		BUFFERING: 3,
		CUED: 5
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';

	import createYTPlayer from 'youtube-player';
	import type { Options, YouTubePlayer } from 'youtube-player/dist/types';

	interface Props {
		id?: string | undefined;
		videoId: string;
		options?: Options | undefined;
		onReady?: (event: CustomEvent) => void;
		onError?: (event: CustomEvent) => void;
		onEnd?: (event: CustomEvent) => void;
		onPlay?: (event: CustomEvent) => void;
		onPause?: (event: CustomEvent) => void;
		onStateChange?: (event: CustomEvent) => void;
		onPlaybackRateChange?: (event: CustomEvent) => void;
		onPlaybackQualityChange?: (event: CustomEvent) => void;
		onTimeChange?: (event: CustomEvent) => void;
	}

	let { id, videoId, options, ...events }: Props = $props();

	let playerElem = $state<HTMLElement | null>(null); // player DOM element reference
	let player: YouTubePlayer; // player API instance

	function wrapPlayerEvent(name: string, event: ((ev: CustomEvent) => void) | undefined) {
		return <T,>(detail: T) => {
			event?.(new CustomEvent(name, { detail }));
		};
	}

	const onReady = wrapPlayerEvent('ready', events.onReady);
	const onError = wrapPlayerEvent('error', events.onError);
	const onEnd = wrapPlayerEvent('end', events.onEnd);
	const onPlay = wrapPlayerEvent('play', events.onPlay);
	const onPause = wrapPlayerEvent('pause', events.onPause);
	const onStateChange = wrapPlayerEvent('stateChange', events.onStateChange);
	const onPlaybackRateChange = wrapPlayerEvent('playbackRateChange', events.onPlaybackRateChange);
	const onPlaybackQualityChange = wrapPlayerEvent(
		'playbackQualityChange',
		events.onPlaybackQualityChange
	);
	const onTimeChange = wrapPlayerEvent('timeChange', events.onTimeChange);

	// Create and tear down player as component mounts or unmounts
	onMount(() => {
		if (playerElem) {
			player = createYTPlayer(playerElem, options);

			player.on('ready', onPlayerReady);
			player.on('stateChange', onPlayerStateChange);
			player.on('error', onError);
			player.on('playbackRateChange', onPlaybackRateChange);
			player.on('playbackQualityChange', onPlaybackQualityChange);

			let iframeWindow: Window | null = null;

			player.getIframe().then((frame) => {
				iframeWindow = frame.contentWindow;
			});

			let lastTimeUpdate = 0;

			// Approach taken from https://gist.github.com/zavan/75ed641de5afb1296dbc02185ebf1ea0
			// Let's hope it always works
			function observeWindowMessages(event: MessageEvent<any>) {
				// Check that the event was sent from the YouTube IFrame.
				if (event.source === iframeWindow) {
					var data = JSON.parse(event.data);

					// The "infoDelivery" event is used by YT to transmit any
					// kind of information change in the player,
					// such as the current time or a playback quality change.
					if (data.event === 'infoDelivery' && data.info && data.info.currentTime) {
						// currentTime is emitted very frequently,
						// but we only care about whole second changes.
						var time = Math.floor(data.info.currentTime);

						if (time !== lastTimeUpdate) {
							lastTimeUpdate = time;
							onTimeChange?.(new CustomEvent('timeChange', { detail: { time, target: player } }));
						}
					}
				}
			}

			const removeListener = on(window, 'message', observeWindowMessages);

			return () => {
				player.destroy();
				removeListener();
			};
		}
	});

	function play(videoId: string) {
		// this is needed because the loadVideoById function always starts playing,
		// even if you have set autoplay to 1 whereas the cueVideoById function
		// never starts autoplaying
		if (!player || !videoId) return;

		if (options && options.playerVars && options.playerVars.autoplay === 1) {
			return player.loadVideoById(videoId, options.playerVars.start);
		}

		return player.cueVideoById(videoId, options?.playerVars?.start);
	}

	function onPlayerReady(event: CustomEvent) {
		onReady?.(event);
		play(videoId);
	}

	function onPlayerStateChange(event: CustomEvent & { data: number }) {
		onStateChange?.(event);

		switch (event.data) {
			case PlayerState.ENDED: {
				onEnd?.(event);
				break;
			}
			case PlayerState.PLAYING: {
				onPlay?.(event);
				break;
			}
			case PlayerState.PAUSED: {
				onPause?.(event);
				break;
			}
			default:
		}
	}

	$effect(() => {
		play(videoId);
	});
</script>

<div {id} bind:this={playerElem}></div>
