<script lang="ts">
	import { onMount } from 'svelte';

	import VideoPlayer from '$components/video-player.svelte';
	import WaitingRoom from '$components/waiting-room.svelte';
	import AudioPlayer from '$components/audio-player.svelte';
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

<WaitingRoom />
<Controls />
<VideoPlayer />
<AudioPlayer />
