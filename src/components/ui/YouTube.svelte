<script lang="ts">
	import type { Options, YouTubePlayer } from 'youtube-player/dist/types';

	import { initPlayer, type PlayerEvents } from '$lib/youtube';

	interface Props extends PlayerEvents {
		id?: string | undefined;
		videoId: string;
		options?: Options | undefined;
	}

	let { id, videoId, options = {}, onReady, ...events }: Props = $props();

	let playerElem = $state<HTMLElement | null>(null);
	let player: YouTubePlayer;

	function play(videoId: string) {
		if (!player || !videoId) return;

		// this is needed because the loadVideoById function always starts playing,
		// even if you have set autoplay to 1 whereas the cueVideoById function
		// never starts autoplaying
		return options.playerVars?.autoplay === 1
			? player.loadVideoById(videoId, options.playerVars.start)
			: player.cueVideoById(videoId, options?.playerVars?.start);
	}

	$effect(() => {
		if (playerElem) {
			let teardown: () => void;

			[player, teardown] = initPlayer(playerElem, {
				...options,
				...events,
				onReady(event) {
					onReady?.(event);
					play(videoId);
				}
			});

			return teardown;
		}
	});

	$effect(() => {
		play(videoId);
	});
</script>

<div {id} bind:this={playerElem}></div>
