<script lang="ts">
	import { onMount } from 'svelte';
	import { on } from 'svelte/events';
	import { random } from 'es-toolkit';

	import { nowPlaying, preferences } from '$lib/state.svelte';
	import { YouTube } from '$components/ui';
	import { hasPlaybackStartBeenRequested, START_PLAYBACK_EVENT } from '$lib/playback-events';
	import type { YouTubePlayer } from 'youtube';

	let player = $state<YouTubePlayer | null>(null);

	function onReady(event: CustomEvent) {
		player = event.detail.target;
		player?.setVolume(100);

		if (hasPlaybackStartBeenRequested()) {
			queueMicrotask(startPlayback);
		}
	}

	function startPlayback() {
		player?.playVideo();
	}

	$effect(() => {
		player?.setVolume(preferences.current.muteMusic ? 0 : preferences.current.musicVolume);
	});

	onMount(() => {
		return on(document, START_PLAYBACK_EVENT, startPlayback);
	});
</script>

{#if nowPlaying.station}
	<div
		class="pointer-events-none fixed -bottom-[300px] -left-[400px] h-[300px] w-[400px] overflow-hidden"
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
					autoplay: 0,
					playsinline: 1,
					rel: 0,
					disablekb: 1
				}
			}}
		/>
	</div>
{/if}
