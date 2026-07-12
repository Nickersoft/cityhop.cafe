<script lang="ts">
	import { onMount, setContext } from 'svelte';

	import VideoPlayer from '$components/video-player.svelte';
	import WaitingRoom from '$components/waiting-room.svelte';
	import AudioPlayer from '$components/audio-player.svelte';
	import { Controls } from '$components/controls';

	import setupHeartbeat from '$lib/heartbeat';
	import setupHotkeys from '$lib/hotkeys';
	import setupHover from '$lib/hover';

	import { nowPlaying, ui } from '$lib/state.svelte';

	import type { PageProps } from './$types';

	const { data }: PageProps = $props();

	// Used in scene-selection.svelte
	setContext('totalScenes', data.totalScenes);

	$effect(() => {
		if (data.scene) {
			nowPlaying.scene = data.scene;
		}

		if (data.station) {
			nowPlaying.station = data.station;
		}
	});

	onMount(() => {
		const cleanupHeartbeat = setupHeartbeat();
		const cleanupHotkeys = setupHotkeys();
		const cleanupHover = setupHover();

		return () => {
			cleanupHeartbeat();
			cleanupHotkeys();
			cleanupHover();
		};
	});

	$effect(() => {
		if (ui.windowActive) {
			document.body.dataset.active = 'true';
		} else {
			document.body.dataset.active = 'false';
		}
	});
</script>

<WaitingRoom />
<Controls />
<VideoPlayer />
<AudioPlayer />
