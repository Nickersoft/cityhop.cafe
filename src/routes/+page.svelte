<script lang="ts">
	import { onMount } from 'svelte';

	import VideoPlayer from '$components/VideoPlayer.svelte';
	import WaitingRoom from '$components/WaitingRoom.svelte';
	import AudioPlayer from '$components/AudioPlayer.svelte';
	import { Controls } from '$components/controls';

	import setupHeartbeat from '$lib/heartbeat';
	import setupHotkeys from '$lib/hotkeys';
	import setupHover from '$lib/hover';

	import { nowPlaying } from '../state.svelte';
	import { randomize } from '$lib/now-playing';

	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	const { scene, station } = data;

	onMount(() => {
		const cleanupHeartbeat = setupHeartbeat();
		const cleanupHotkeys = setupHotkeys();
		const cleanupHover = setupHover();

		if (scene && station) {
			nowPlaying.scene = scene;
			nowPlaying.station = station;
		} else {
			randomize();
		}

		return () => {
			cleanupHeartbeat();
			cleanupHotkeys();
			cleanupHover();
		};
	});
</script>

<!-- <WaitingRoom /> -->
<Controls />
<!-- <VideoPlayer /> -->
<!-- <AudioPlayer /> -->
