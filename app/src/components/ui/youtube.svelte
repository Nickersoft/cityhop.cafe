<script lang="ts">
	import { untrack } from 'svelte';

	import { initPlayer, type PlayerEvents } from '$lib/youtube';
	import type { Options, YouTubePlayer } from 'youtube';

	interface Props extends PlayerEvents {
		id?: string | undefined;
		videoId: string;
		options?: Options | undefined;
	}

	let { id, videoId, options = {}, onReady, ...events }: Props = $props();

	let playerElem = $state<HTMLElement | null>(null);
	let player: YouTubePlayer;
	let loadedVideoId = $state<string>();

	function cueVideo(videoId: string) {
		if (!player || !videoId) return;

		loadedVideoId = videoId;
		return player.cueVideoById(videoId, options.playerVars?.start);
	}

	function loadVideo(videoId: string) {
		if (!player || !videoId) return;

		loadedVideoId = videoId;
		return player.loadVideoById(videoId, options.playerVars?.start);
	}

	$effect(() => {
		if (playerElem) {
			let teardown: () => void;
			const initialOptions = untrack(() => options);
			const initialEvents = untrack(() => events);

			[player, teardown] = initPlayer(playerElem, {
				...initialOptions,
				...initialEvents,
				onReady(event) {
					onReady?.(event);
					cueVideo(videoId);
				}
			});

			return teardown;
		}
	});

	$effect(() => {
		if (loadedVideoId && videoId !== loadedVideoId) {
			loadVideo(videoId);
		}
	});
</script>

<div {id} bind:this={playerElem}></div>
