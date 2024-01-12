<script lang="ts">
	import { page } from '$app/stores';
	import { stationMap } from '$data/stations';
	import { currentScene, currentStation } from '$lib/stores';
	import { getSharableURL } from '$lib/utils';

	import ToolbarButton from './ToolbarButton.svelte';

	function createHashtag(str: string) {
		return str.replace(/[\W\s]+/g, '');
	}

	function shareTweet() {
		const url = getSharableURL($page.url);

		const tweet = `Come ${$currentScene.type} in #${createHashtag(
			$currentScene.name
		)} with me and chill! 🎧 #cityhop #${createHashtag(
			stationMap[$currentStation.trackID].genre.toLowerCase()
		)} 

${url}`.trim();

		window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
	}
</script>

<ToolbarButton icon="mingcute:social-x-line" action={shareTweet} title="Share on X" />
