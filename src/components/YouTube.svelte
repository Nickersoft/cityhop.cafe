<script context="module">
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
	import { createEventDispatcher } from 'svelte';
	import createYTPlayer from 'youtube-player';
	import type { Options, YouTubePlayer } from 'youtube-player/dist/types';

	export let id: string | undefined = undefined; // HTML element ID for player (optional)
	export let videoId: string; // Youtube video ID (required)
	export let options: Options | undefined = undefined; // YouTube player options (optional)

	let playerElem: HTMLElement; // player DOM element reference
	let player: YouTubePlayer; // player API instance

	// Create and tear down player as component mounts or unmounts
	onMount(() => createPlayer());

	// Update videoId and load new video if URL changes
	$: play(videoId);

	function createPlayer() {
		player = createYTPlayer(playerElem, options);

		// Register event handlers
		player.on('ready', onPlayerReady);
		player.on('error', onPlayerError);
		player.on('stateChange', onPlayerStateChange);
		player.on('playbackRateChange', onPlayerPlaybackRateChange);
		player.on('playbackQualityChange', onPlayerPlaybackQualityChange);

		// Tear down player when done
		return () => player.destroy();
	}

	function play(videoId: string) {
		// this is needed because the loadVideoById function always starts playing,
		// even if you have set autoplay to 1 whereas the cueVideoById function
		// never starts autoplaying
		if (player && videoId) {
			if (options && options.playerVars && options.playerVars.autoplay === 1) {
				player.loadVideoById(videoId, options.playerVars.start);
			} else {
				player.cueVideoById(videoId, options?.playerVars?.start);
			}
		}
	}

	// -------------------------------------------
	// Event handling
	// -------------------------------------------
	const dispatch = createEventDispatcher();

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onReady
	 *
	 * @param {Object} event
	 *   @param {Object} target - player object
	 */
	function onPlayerReady(event: CustomEvent) {
		dispatch('ready', event);
		// Start playing
		play(videoId);
	}

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onError
	 *
	 * @param {Object} event
	 *   @param {Integer} data  - error type
	 *   @param {Object} target - player object
	 */
	function onPlayerError(event: CustomEvent) {
		dispatch('error', event);
	}

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onStateChange
	 *
	 * @param {Object} event
	 *   @param {Integer} data  - status change type
	 *   @param {Object} target - actual YT player
	 */
	function onPlayerStateChange(event: CustomEvent & { data: number }) {
		dispatch('stateChange', event);

		switch (event.data) {
			case PlayerState.ENDED:
				dispatch('end', event);
				break;

			case PlayerState.PLAYING:
				dispatch('play', event);
				break;

			case PlayerState.PAUSED:
				dispatch('pause', event);
				break;

			default:
		}
	}

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange
	 *
	 * @param {Object} event
	 *   @param {Float} data    - playback rate
	 *   @param {Object} target - actual YT player
	 */
	function onPlayerPlaybackRateChange(event: CustomEvent) {
		dispatch('playbackRateChange', event);
	}

	/**
	 * https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange
	 *
	 * @param {Object} event
	 *   @param {String} data   - playback quality
	 *   @param {Object} target - actual YT player
	 */
	function onPlayerPlaybackQualityChange(event: CustomEvent) {
		dispatch('playbackQualityChange', event);
	}
</script>

<div {id} bind:this={playerElem} />
