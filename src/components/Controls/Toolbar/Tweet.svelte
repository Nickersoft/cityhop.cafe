<script lang="ts">
	import { page } from '$app/stores';
	import { stationMap } from '$data/stations';
	import { nowPlaying } from '$lib/stores.svelte';
	import { getSharableURL } from '$lib/utils';

	import ToolbarButton from './ToolbarButton.svelte';

	function createHashtag(str: string) {
		return str.replace(/[\W\s]+/g, '');
	}

	function shareTweet() {
		const url = getSharableURL($page.url);

		if (!nowPlaying.scene || !nowPlaying.station?.trackID) {
			return;
		}

		const tweet = `Come ${nowPlaying.scene.type} in #${createHashtag(
			nowPlaying.scene.name
		)} with me and chill! 🎧 #cityhop #${createHashtag(
			stationMap[nowPlaying.station.trackID].genre.toLowerCase()
		)} 

${url}`.trim();

		window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
	}
</script>

<ToolbarButton icon="mingcute:social-x-line" action={shareTweet} title="Share on X" />
