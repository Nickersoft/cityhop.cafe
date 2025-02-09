<script lang="ts">
	import type { YouTubePlayer } from 'youtube-player/dist/types';

	import { nowPlaying } from '$lib/state.svelte';
	import { random } from '$lib/utils';

	import YouTube from '$ui/YouTube.svelte';

	let player = $state<YouTubePlayer | null>(null);

	function onReady(event: CustomEvent) {
		player = event.detail.target;
		player?.setVolume(100);
		player?.playVideo();
	}
</script>

{#if nowPlaying.station}
	<div
		class="pointer-events-none relative z-50 hidden appearance-none overflow-hidden rounded-md bg-white shadow-lg"
	>
		<YouTube
			id="audio"
			videoId={nowPlaying.station.trackID}
			{onReady}
			options={{
				width: 400,
				height: 300,
				playerVars: {
					...(!nowPlaying.station.live && { start: random(0, 1800) }),
					autoplay: 1,
					playsinline: 1,
					rel: 0,
					disablekb: 1
				}
			}}
		/>
	</div>
{/if}
