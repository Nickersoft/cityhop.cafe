<script lang="ts">
	import { random } from 'radash';

	import YouTube from './YouTube.svelte';

	export let playing;
	export let videoID: string;
	export let audioID: string;
	export let videoOffset: number = 0;

	function onPlay() {
		playing = true;
	}

	function onBackgroundReady(event: CustomEvent) {
		event.detail.target.setVolume(15);
	}

	function onBackgroundEnded(event: CustomEvent) {
		event.detail.target.seekTo(videoOffset, true);
	}

	function onAudioReady(event: CustomEvent) {
		event.detail.target.setVolume(100);
		event.detail.target.playVideo();
	}
</script>

<YouTube
	on:end={onBackgroundEnded}
	on:play={onPlay}
	on:ready={onBackgroundReady}
	class="w-full pointer-events-none h-full scale-125 fixed inset-0 min-h-[800px]"
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

<YouTube
	class="appearance-none hidden"
	videoId={audioID}
	on:ready={onAudioReady}
	options={{
		playerVars: {
			start: random(videoOffset, videoOffset + 1800),
			autoplay: 1,
			playsinline: 1
		}
	}}
/>
